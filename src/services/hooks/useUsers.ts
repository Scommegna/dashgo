import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: any;
};

// Gets users data
export async function getUsers() {
  const { data } = await api.get("users");

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

//Hook to get users data
export function useUsers() {
  return useQuery<User[]>("users", getUsers, {
    staleTime: 1000 * 5,
  });
}
