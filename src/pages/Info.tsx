import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type itemType = {
  id: number;
  name: string;
  email: string;
};

const Info = () => {
  const params = useParams();
  const { id } = params;

  const user = useSelector((state: RootState) => state.user.users);

  const data = user.filter((item: itemType) => item.id === Number(id));

  const { name, email } = data[0];

  return (
    <div>
      <h1>Info</h1>
      <div>
        <h3>name:{name}</h3>
        <h3>email:{email}</h3>
      </div>
    </div>
  );
};

export default Info;
