import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingStart, deleteUserStart } from "../redux/action";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";
import { MDBIcon, MDBTooltip } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../redux/store";

type itemType = {
  id: number;
  name: string;
  email: string;
};

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.users);
  console.log(user);

  useEffect(() => {
    dispatch(loadingStart());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUserStart(id));
      toast.success("user deleted successfully");
    }
    //navigator('/home');
  };

  return (
    <div>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {user.map((item: itemType, index: number) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <MDBBtn
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon fas icon="trash" size="lg" />
                    </MDBTooltip>
                  </MDBBtn>{" "}
                  <Link to={`/AddEditUser/${item.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon fas icon="pen" size="lg" />
                    </MDBTooltip>
                  </Link>{" "}
                  <Link to={`/userInfo/${item.id}`}>
                    <MDBTooltip title="View" tag="a">
                      <MDBIcon fas icon="eye" size="lg" />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Home;
