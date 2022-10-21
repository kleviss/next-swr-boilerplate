import useSWR from "swr";
import * as api from "../services/api";

export const useFetch = () => {
  return {
    GetTodos: () =>
      useSWR("allTodos", async () => {
        const response = await api.getTodos();
        console.log("SWR - response:", response);
        return response;
      }),
  };
};
