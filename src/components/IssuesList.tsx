import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../helpers/fetchData";
import { Issue } from "../models/issues";
import { IssueItem } from "./IssueItem";

export const IssuesList = () => {
  const { isLoading, data } = useQuery<Issue[]>(["issues"], () =>
    fetchData("/api/issues")
  );

  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {data?.map((issue) => (
            <IssueItem key={issue.id} {...issue} />
          ))}
        </ul>
      )}
    </div>
  );
};
