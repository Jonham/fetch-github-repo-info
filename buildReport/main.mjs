import { readdirSync, readFileSync } from 'fs'
import msexcelBuilder from './lib/msexcel-builder.js'
import { headers } from './headers.mjs'
import { parseItem } from './parseItem.mjs'

function main() {
  const list = readdirSync('./results/raw')
  list.sort((pre, n) => {
    const [preIndex] = pre.split('-')
    const [nIndex] = n.split('-')
    return parseInt(preIndex) > parseInt(nIndex) ? 1 : -1
  })

  const wb = msexcelBuilder.createWorkbook(
    './results/reports',
    'github-excel-repos.xlsx',
  )

  const sheet1 = wb.createSheet('sheet1', headers.length + 10, list.length + 10)
  headers.forEach((name, index) => {
    const col = parseInt(index) + 1
    const row = 1
    sheet1.set(col, row, name)
  })

  list.forEach((item, index) => {
    const row = parseInt(index) + 2
    const content = readFileSync(`./results/raw/${item}`, 'utf-8')
    const contents = parseItem(JSON.parse(content))
    for (let col = 0; col < contents.length; col++) {
      sheet1.set(col + 1, row, contents[col] || '')
    }
  })

  wb.save((err) => {
    if (err) {
      throw err
    } else {
      console.log('workbook created. row count:', list.length)
      console.log('lookup `./reseults/reports` folder')
    }
  })
}

main()
