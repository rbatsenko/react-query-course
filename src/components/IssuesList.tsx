import { useIssuesData } from "../hooks/useIssuesData";
import { IssueItem } from "./IssueItem";

export const IssuesList = () => {
  const { isLoading, data } = useIssuesData();

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
