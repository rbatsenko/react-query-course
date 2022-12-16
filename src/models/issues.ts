type IssueStatus = "backlog" | "todo" | "inProgress" | "done" | "cancelled";

export type Issue = {
  id: string;
  title: string;
  labels: string[];
  comments: string[];
  number: number;
  status: IssueStatus;
  createdDate: string;
  createdBy: string;
  assignee: string;
  dueDate: string | null;
  completedDate: string | null;
};