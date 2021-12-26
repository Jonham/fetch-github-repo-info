import { headers } from './headers.mjs'

/**
 *  Transform GraphQL result json into array
 *
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2021-12-26
 * @export
 * @param {import('./type.js').RepositoryInfo} item
 * @returns {(number | string)[]}
 */
export function parseItem(item) {
  const repo = item.repository

  return headers.map((i) => {
    switch (i) {
      case 'name':
        return repo.name
      case 'description':
        return repo.description
      case 'orgRun':
        return repo.isInOrganization ? 'org' : 'personal'
      case 'isFork':
        return repo.isFork ? 'fork' : 'original'
      case 'isLocked':
        return repo.isLocked ? 'locked' : '-'
      case 'issues':
        return repo.issues.totalCount
      case 'releaseCount':
        return repo.releases.totalCount
      case 'license':
        return repo.licenseInfo ? repo.licenseInfo.name : ''
      case 'link':
        return repo.url
      case 'homepage':
        return repo.homepageUrl
      case 'language':
        return repo.languages.nodes.map((i) => i.name).join(',')
      case 'watchers':
        return repo.watchers.totalCount
      case 'commitComments':
        return repo.commitComments.totalCount
      case 'stars':
        return repo.stargazerCount
      case 'forks':
        return repo.forkCount
      case 'usedBy':
        return '-'
      case 'contributors':
        return '-'
      case '商业化':
        return '-'
      case 'active':
        return repo.updatedAt
      case 'lastRelease':
        return Array.isArray(repo.releases.nodes) &&
          repo.releases.nodes.length > 0
          ? repo.releases.nodes[0].updatedAt
          : '-'
      case 'releaseVersion':
        return Array.isArray(repo.releases.nodes) &&
          repo.releases.nodes.length > 0
          ? repo.releases.nodes[0].name
          : '-'
      case 'pullRequests':
        return repo.pullRequests.totalCount
      case 'repositoryTopics':
        return repo.repositoryTopics.nodes.map((i) => i.topic.name).join(',')
    }
  })
}
