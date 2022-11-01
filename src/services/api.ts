import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTodos = async () => {
  try {
    const response = await api.get("todos");
    console.log("axios - response:", response);
    return response.data;
  } catch (error) {
    console.error(error.response.status);
  }
};
