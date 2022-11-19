import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    fetch,
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }),

  cache: new InMemoryCache(),
});

export const GET_ISSUES = gql`
  query ISSUES($last: Int!, $states: [IssueState!]) {
    repository(name: "reactjs.org", owner: "reactjs") {
      id
      issues(last: $last, states: $states) {
        totalCount
        edges {
          cursor
          node {
            id
            author {
              login
            }
            comments {
              totalCount
            }
            title
            number
            createdAt
          }
        }
      }
    }
  }
`;

export const GET_ISSUES_PAGANITION = gql`
  query ISSUES($last: Int!, $before: String!, $states: [IssueState!]) {
    repository(name: "reactjs.org", owner: "reactjs") {
      id
      issues(states: $states, last: $last, before: $before) {
        totalCount
        edges {
          cursor
          node {
            id
            author {
              login
            }
            comments {
              totalCount
            }
            title
            number
            createdAt
          }
        }
      }
    }
  }
`;
