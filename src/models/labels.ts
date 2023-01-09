export type IssueLabel =
  | "bug"
  | "feature"
  | "enhancement"
  | "question"
  | "help"
  | "wontfix"
  | "duplicate";

export type Label = {
  id: IssueLabel;
  name: IssueLabel;
  color: string;
};
