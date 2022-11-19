import { DocumentNode, useQuery } from "@apollo/client";

export const useFetchingData = ({
  issueState,
  query,
  before = "",
}: {
  before?: string;
  issueState: string;
  query: DocumentNode;
}) => {
  const { data, loading, error, previousData } = useQuery(query, {
    variables: {
      last: 10,
      states: issueState,
      before: before,
    },
  });
  return {
    data,
    loading,
    error,
    previousData,
  };
};
