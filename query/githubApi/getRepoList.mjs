import { readFile } from 'fs/promises'
import { resolve } from 'path'

export async function GetRepoList() {
  const content = await readFile(resolve('./repoList.list'), 'utf-8')
  return content
    .split('\n')
    .map(i => i.trim())
    .filter(Boolean)
}
