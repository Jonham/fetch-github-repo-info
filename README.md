# fetch Github repo info

> this is a tool to fetch given GitHub repos info.
> and transform info into an Excel file for further analysis.

## How To Use

1. fill `repoList.list` file with your chosen repo links
2. `yarn`
3. `yarn fetch` to fetch all links on `repoList.list`. result jsons will be placed on `results/raw`.
4. `yarn build` to build a Excel _report_ `results/reports/github-excel-repos.xlsx`

## Want more repo detail fields

1. visit: [Github GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer) and write your own query.
2. copy your query and modify `query/githubApi/graphQLQuery.mjs` file.
3. follow the `How To Use` part and get your report

## Result preview

### Report Excel example

> on results/reports/github-excel-repos.xlsx

| name        | description                                                        | orgRun   | license            | link                                      | homepage             | language                 | stars | forks | watchers | commitComments | isFork   | repositoryTopics                                                                                                        | issues | isLocked | active               | lastRelease | releaseVersion | releaseCount | pullRequests | usedBy | contributors | 商业化 |
| ----------- | ------------------------------------------------------------------ | -------- | ------------------ | ----------------------------------------- | -------------------- | ------------------------ | ----- | ----- | -------- | -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- | ------ | -------- | -------------------- | ----------- | -------------- | ------------ | ------------ | ------ | ------------ | ------ |
| sheetjs     | :green_book: SheetJS Community Edition -- Spreadsheet Data Toolkit | org      | Apache License 2.0 | https://github.com/SheetJS/sheetjs        | https://sheetjs.com/ | Shell,Makefile,Batchfile | 28540 | 7306  | 598      | 22             | original | xlsx,xls,excel,spreadsheet,data,xml,csv,database,nodejs,html5,javascript,ios,json,react,vue,angular,table,html,grid,dbf | 2110   | -        | 2021-12-25T20:26:05Z | -           | -              |              | 278          | -      | -            | -      |
| ExcelReport | This reporting engine is built on NPOI.                            | personal | MIT License        | https://github.com/hanzhaoxin/ExcelReport |                      | C#                       | 532   | 231   | 58       |                | original |                                                                                                                         | 22     | -        | 2021-12-20T21:04:53Z | -           | -              |              | 6            | -      | -            | -      |

### repo detail example

repo: [qax-os/excelize](https://github.com/qax-os/excelize)

```json
{
  "repository": {
    "name": "excelize",
    "url": "https://github.com/qax-os/excelize",
    "forkCount": 1079,
    "stargazerCount": 10322,
    "description": "Golang library for reading and writing Microsoft Excel™ (XLSX) files.",
    "watchers": {
      "totalCount": 207
    },
    "commitComments": {
      "totalCount": 32
    },
    "createdAt": "2016-08-29T12:32:12Z",
    "homepageUrl": "https://xuri.me/excelize",
    "isFork": false,
    "isInOrganization": true,
    "isLocked": false,
    "updatedAt": "2021-12-25T13:51:49Z",
    "repositoryTopics": {
      "nodes": [
        {
          "topic": {
            "name": "xlsx"
          }
        },
        {
          "topic": {
            "name": "golang"
          }
        },
        {
          "topic": {
            "name": "excel"
          }
        },
        {
          "topic": {
            "name": "microsoft"
          }
        },
        {
          "topic": {
            "name": "office"
          }
        },
        {
          "topic": {
            "name": "ooxml"
          }
        },
        {
          "topic": {
            "name": "openxml"
          }
        },
        {
          "topic": {
            "name": "go"
          }
        },
        {
          "topic": {
            "name": "excelize"
          }
        },
        {
          "topic": {
            "name": "spreadsheet"
          }
        },
        {
          "topic": {
            "name": "xlsm"
          }
        },
        {
          "topic": {
            "name": "openoffice"
          }
        },
        {
          "topic": {
            "name": "ecma-376"
          }
        },
        {
          "topic": {
            "name": "statistics"
          }
        },
        {
          "topic": {
            "name": "formula"
          }
        },
        {
          "topic": {
            "name": "analytics"
          }
        },
        {
          "topic": {
            "name": "visualization"
          }
        },
        {
          "topic": {
            "name": "hacktoberfest"
          }
        },
        {
          "topic": {
            "name": "data-science"
          }
        }
      ]
    },
    "pullRequests": {
      "totalCount": 210
    },
    "issues": {
      "totalCount": 804
    },
    "releases": {
      "totalCount": 15,
      "nodes": [
        {
          "name": "v2.4.1",
          "updatedAt": "2021-08-01T16:08:48Z"
        }
      ]
    },
    "licenseInfo": {
      "name": "BSD 3-Clause \"New\" or \"Revised\" License"
    },
    "languages": {
      "nodes": [
        {
          "name": "Go"
        }
      ]
    }
  }
}
```
