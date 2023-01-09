import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../helpers/fetchData";
import { Label } from "../models/labels";

export const useLabelsData = () => {
  const labelsQuery = useQuery<Label[]>(["labels"], () =>
    fetchData("/api/labels")
  );

  return labelsQuery;
};
