export type RepositoryInfo = {
  repository: Repository
}

interface Nodes {
  topic: Topic
}

interface Nodes1 {
  name: string
  updatedAt: string
}

interface Releases {
  totalCount: number
  nodes: Nodes1[]
}

interface Repository {
  name: string
  url: string
  forkCount: number
  stargazerCount: number
  description: string
  watchers: Watchers
  commitComments: Watchers
  createdAt: string
  homepageUrl: string
  isFork: boolean
  isInOrganization: boolean
  isLocked: boolean
  updatedAt: string
  repositoryTopics: RepositoryTopics
  pullRequests: Watchers
  issues: Watchers
  releases: Releases
  licenseInfo: Topic
  languages: RepositoryTopics
}

interface RepositoryTopics {
  nodes: Topic[]
}

interface RootInterface {
  repository: Repository
}

interface Topic {
  name: string
}

interface Watchers {
  totalCount: number
}
