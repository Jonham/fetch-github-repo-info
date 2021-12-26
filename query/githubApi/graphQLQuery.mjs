const gql = (raw) => raw

// explorer https://docs.github.com/en/graphql/overview/explorer
export const GET_REPO = gql`
  query RepoInfo($repoOwner: String!, $repoName: String!) {
    repository(owner: $repoOwner, name: $repoName) {
      name
      url
      forkCount
      stargazerCount
      description
      watchers {
        totalCount
      }
      commitComments {
        totalCount
      }
      createdAt
      homepageUrl
      isFork
      isInOrganization
      isLocked
      updatedAt
      repositoryTopics(first: 20) {
        nodes {
          topic {
            name
          }
        }
      }
      pullRequests {
        totalCount
      }
      issues {
        totalCount
      }
      releases(last: 1) {
        totalCount
        nodes {
          name
          updatedAt
        }
      }
      licenseInfo {
        name
      }
      languages(first: 3) {
        nodes {
          name
        }
      }
    }
  }
`
