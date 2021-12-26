import { fetchRepoDetailAndSave } from './githubApi/fetchDetailAndSave.mjs'
import { GetRepoList } from './githubApi/getRepoList.mjs'
import { parsePercent } from './util/parsePercent.mjs'

async function main() {
  const list = await GetRepoList()

  // fetch one by one
  for (const index in list) {
    // display progress
    console.log(`fetching ${parsePercent(index, list)}: ${list[index]}`)

    await fetchRepoDetailAndSave(list[index], +index + 1)
  }
}
main()
