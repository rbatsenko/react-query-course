import { Link } from "react-router-dom";
import { Issue } from "../models/issues";
import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate";
import { useUserData } from "../hooks/useUserData";

type IssueItemProps = Issue;

export const IssueItem = ({
  title,
  number,
  assignee,
  comments,
  createdBy,
  createdDate,
  labels,
  status,
}: IssueItemProps) => {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);

  return (
    <li>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <span key={label} className="label red">
              {label}
            </span>
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)}{" "}
          {createdByUser.isSuccess &&
            createdByUser.data &&
            `by ${createdByUser.data.name}`}
        </small>
      </div>
      {assignee && assigneeUser.isSuccess && assigneeUser.data && (
        <img
          src={assigneeUser.data.profilePictureUrl}
          alt={`Assigned to ${assigneeUser.data.name}`}
          className="assigned-to"
        />
      )}
      <span className="comment-count">
        {comments.length > 0 ? (
          <>
            <GoComment />
            {comments.length}
          </>
        ) : null}
      </span>
    </li>
  );
};
