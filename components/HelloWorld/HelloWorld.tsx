import { useQuery } from "@apollo/client";
import React from "react";

import { GET_ISSUES } from "../../libs/apollo-graphql";

export const HelloWorld = () => {
  const { data } = useQuery(GET_ISSUES, {
    variables: {
      last: 10,
      states: "OPEN",
    },
  });
  console.log({ data });
  return <div>Hello, World</div>;
};
