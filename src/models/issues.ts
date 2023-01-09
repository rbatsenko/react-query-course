import { IssueLabel } from "./labels";

type Status = "backlog" | "todo" | "inProgress" | "done" | "cancelled";

export type Issue = {
  id: string;
  title: string;
  labels: IssueLabel[];
  comments: string[];
  number: number;
  status: Status;
  createdDate: string;
  createdBy: string;
  assignee: string;
  dueDate: string | null;
  completedDate: string | null;
};
