/**
 *
 *
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2021-12-26
 * @param {string} url
 * @returns {{repoName: string, repoOwner: string}}
 */
export function parseRepoInfo(url) {
  const [repoOwner, repoName] = url
    .slice('https://github.com/'.length)
    .split('/')
  return {
    repoName,
    repoOwner,
  }
}
