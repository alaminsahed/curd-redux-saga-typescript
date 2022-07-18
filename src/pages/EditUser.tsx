import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUserStart, updateUserStart } from "../redux/action";
import { toast } from "react-toastify";
import { RootState } from "../redux/store";

import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

type infoType = {
  id: number;
  name: string;
  email: string;
};

type formValueType = {
  name: string;
  email: string;
};

const EditUser = () => {
  const [formValue, setFormValue] = useState<formValueType>({
    name: " ",
    email: " ",
  });
  const [edit, setEdit] = useState<boolean>(false);

  const { name, email } = formValue;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.users);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const singleValue = user.find((info: infoType) => info.id === Number(id));
      console.log(user, id, singleValue);
      setFormValue({ ...singleValue });
      setEdit(true);
    }
  }, [id]);

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && email) {
      if (!edit) {
        dispatch(createUserStart(formValue));
        toast.success("User created successfully");
        navigate("/home");
      } else {
        dispatch(updateUserStart(formValue));
        setEdit(false);
        navigate("/home");
      }
    }
  };

  return (
    <div className="mt-5">
      <MDBValidation className="row g-3" noValidate onSubmit={handleSubmit}>
        <MDBValidationItem className="col-md-4">
          <MDBInput
            value={name || ""}
            name="name"
            onChange={onChange}
            required
            label="Name"
            type="text"
          />
        </MDBValidationItem>
        <MDBValidationItem className="col-md-4">
          <MDBInput
            value={email || ""}
            name="email"
            onChange={onChange}
            required
            label="Email"
            type="email"
          />
        </MDBValidationItem>
        <div className="col-12">
          <MDBBtn type="submit">Submit</MDBBtn>
          <MDBBtn onClick={() => navigate("/home")}>Back</MDBBtn>
        </div>
      </MDBValidation>
    </div>
  );
};

export default EditUser;
