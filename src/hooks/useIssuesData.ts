import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../helpers/fetchData";
import { Issue } from "../models/issues";

export const useIssuesData = () => {
  const issuesQuery = useQuery<Issue[]>(["issues"], () =>
    fetchData("/api/issues")
  );

  return issuesQuery;
};