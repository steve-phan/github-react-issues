import { GET_ISSUES } from "../libs/apollo-graphql";

export const mockIssuesQuery = {
  query: GET_ISSUES,
  variables: {
    last: 10,
    states: "OPEN",
  },
};
export const mockIssuesData = {
  repository: {
    __typename: "Repository",
    id: "MDEwOlJlcG9zaXRvcnkxMDU5NjMyNTM=",
    issues: {
      __typename: "IssueConnection",
      totalCount: 564,
      edges: [
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVXneMg==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5Ved4y",
            author: {
              __typename: "User",
              login: "jfines",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 1,
            },
            title: "Offer Print Feature in New Beta Docs",
            number: 5235,
            createdAt: "2022-11-03T03:27:06Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVYlGaw==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5ViUZr",
            author: {
              __typename: "User",
              login: "MelvinWM",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title:
              "Add warning to the Portals example page or remove the example.",
            number: 5236,
            createdAt: "2022-11-03T17:56:04Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVaXfRQ==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5Vpd9F",
            author: {
              __typename: "User",
              login: "dingyl666",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title:
              " Its instance type 'Component<Omit<FormComponentProps<any>, \"form\">, any, any>' is not a valid JSX element.",
            number: 5242,
            createdAt: "2022-11-05T09:54:58Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVgNI9Q==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5WA0j1",
            author: {
              __typename: "User",
              login: "MenaiAla",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title: "Why you did not mention the name of empty wrapper?",
            number: 5251,
            createdAt: "2022-11-10T01:17:38Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVh42ig==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5WHjaK",
            author: {
              __typename: "User",
              login: "LittleBabyYu",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title: "React official document Problem",
            number: 5254,
            createdAt: "2022-11-11T02:14:44Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOViT_MQ==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5WJP8x",
            author: {
              __typename: "User",
              login: "Quintis1212",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title: "Using fetch in functional components",
            number: 5256,
            createdAt: "2022-11-11T10:24:59Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVjY3Rg==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5WNjdG",
            author: {
              __typename: "User",
              login: "tys404",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 2,
            },
            title: "Change displayed shortcut in search based on user system .",
            number: 5257,
            createdAt: "2022-11-12T10:49:35Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVkAzlQ==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5WQDOV",
            author: {
              __typename: "User",
              login: "croraf",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title:
              "Missing undefined in the list of possible return types of render function",
            number: 5261,
            createdAt: "2022-11-13T19:17:15Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVpj5qA==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5WmPmo",
            author: {
              __typename: "User",
              login: "arafatiqbal",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title:
              '[Beta][Bug] Clicking on Next "Blog" from the Meet the Team page fails',
            number: 5273,
            createdAt: "2022-11-17T07:41:08Z",
          },
        },
        {
          __typename: "IssueEdge",
          cursor: "Y3Vyc29yOnYyOpHOVsurcg==",
          node: {
            __typename: "Issue",
            id: "I_kwDOBlDe9c5Wy6ty",
            author: {
              __typename: "User",
              login: "gwwo",
            },
            comments: {
              __typename: "IssueCommentConnection",
              totalCount: 0,
            },
            title: "Questionable Comment in the `useEvent` Example",
            number: 5280,
            createdAt: "2022-11-19T04:05:30Z",
          },
        },
      ],
    },
  },
};
