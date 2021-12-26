import axios from 'axios'
import { writeFile } from 'fs/promises'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import { parseRepoInfo } from './parseRepoInfo.mjs'
import { GET_REPO } from './graphQLQuery.mjs'

const queryResultFolder = './results/raw'
const endpoint = 'https://api.github.com/graphql'

/**
 * fetch Github repo detail from repo URL
 *
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2021-12-26
 * @export
 * @param {string} githubRepoURL
 * @param {string} index
 */
export async function fetchRepoDetailAndSave(githubRepoURL, index) {
  const repoInfo = parseRepoInfo(githubRepoURL)
  const payload = {
    query: GET_REPO[0],
    variables: repoInfo,
  }

  if (!process.env.GITHUB_TOKEN)
    throw new Error('please set GIHTUB_TOKEN on command line env')

  try {
    const res = await axios.post(endpoint, payload, {
      headers: {
        Authorization: 'bearer ' + process.env.GITHUB_TOKEN,
      },
    })
    const filename = `${repoInfo.repoOwner}-${repoInfo.repoName}`
    await writeFile(
      `${queryResultFolder}/${index}-${filename}.json`,
      JSON.stringify(res.data.data),
    )
  } catch (err) {
    console.log(err.message)
  }
}
