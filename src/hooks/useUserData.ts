import { useQuery } from "@tanstack/react-query"
import { User } from "../models/users";

export const useUserData = (userId: string) => {
  const userQuery = useQuery<User>(["users", userId], () => fetch(`/api/users/${userId}`).then(res => res.json()));

  return userQuery;
}