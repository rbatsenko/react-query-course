import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../helpers/fetchData";
import { User } from "../models/users";

export const useUserData = (userId: string) => {
  const userQuery = useQuery<User>(["users", userId], () => fetchData(`/api/users/${userId}`), { enabled: !!userId });

  return userQuery;
}