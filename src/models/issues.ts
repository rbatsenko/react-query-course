type IssueStatus = "backlog" | "todo" | "inProgress" | "done" | "cancelled";
type IssueLabel = "bug" | "feature" | "enhancement" | "question" | "help" | "wontfix" | "duplicate";

export type Issue = {
  id: string;
  title: string;
  labels: IssueLabel[];
  comments: string[];
  number: number;
  status: IssueStatus;
  createdDate: string;
  createdBy: string;
  assignee: string;
  dueDate: string | null;
  completedDate: string | null;
};