import axios from "axios";

export const loadUserApi = async () => {
  const response = await axios.get("http://localhost:3006/users");
  return response.data;
};

export const AddUserApi = async (user: any) => {
  const response = await axios.post("http://localhost:3006/users", user);
  return response;
};

export const DeleteUserApi = async (id: number) => {
  console.log("f", id);
  const response = await axios.delete(`http://localhost:3006/users/${id}`);
  console.log("response", response);
  return response;
};

export const UpdateUserApi = async (id: number, info: any) => {
  const response = await axios.put(`http://localhost:3006/users/${id}`, info);
  console.log("response", response);
  return response;
};
