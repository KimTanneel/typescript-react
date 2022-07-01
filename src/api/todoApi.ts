import axios from "axios";
import { TodoType, User } from "../interface";
const apiClient = axios.create({
  baseURL: "http://172.16.5.192:3001/",
  headers: {
    "Content-type": "application/json",
  },
});
export const findAll = async () => {
  const response = await apiClient.get<TodoType[]>("/todo");
  return response.data;
};
// const UserService = {
//   findAll,
// };
// export default UserService;