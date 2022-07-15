import React, { Fragment, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  editimageaction,
  oneimageaction,
  clearerr,
} from "../../Redux/actions/imageAction";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, image } = useSelector((state) => state.oneImage);
  const params = useParams();
  const { imgName, Imgdetails, img_url } = image;
  const [formdata, setformdata] = useState({
    imgName: "",
    Imgdetails: "",
    img_url: "",
  });
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(oneimageaction(params.id));
  }, [dispatch, error]);
  useEffect(() => {
    setformdata({
      imgName: imgName,
      Imgdetails: Imgdetails,
      img_url: img_url,
    });
  }, [image]);

  // Used to change the data fetched from editform
  const changedata = (e) => {
    const fieldname = e.target.name;
    const value = e.target.value;
    // fetch old data
    const newformdata = { ...formdata };
    // update given field with value
    newformdata[fieldname] = value;
    // updating data
    setformdata(newformdata);
  };
  // function made to add new data to table
  const editdata = (e) => {
    e.preventDefault();
    // call axios
    dispatch(editimageaction(formdata, params.id));
    navigate(`/show/${params.id}`);
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-form-edit">
          <form className="signup" onSubmit={editdata}>
            <div className="form-title">Add a new Image</div>
            <div className="form-body">
              <div className="row">
                <input
                  type="text"
                  placeholder="Image Name*"
                  name="imgName"
                  value={formdata.imgName}
                  onChange={changedata}
                  autoComplete="off"
                  readOnly={true}
                />
                <input
                  type="text"
                  placeholder="Image URL*"
                  name="img_url"
                  value={formdata.img_url}
                  onChange={changedata}
                  autoComplete="off"
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  placeholder="Image Details*"
                  name="Imgdetails"
                  value={formdata.Imgdetails}
                  onChange={changedata}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="rule"></div>
            <div className="form-footer">
              <button type="submit">
                <span style={{ color: "white" }}>Add Data</span>
              </button>
            </div>
          </form>
        </div>
        // <form onSubmit={editdata}>
        //   <input
        //     className="adddata"
        //     type="text"
        //     name="imgName"
        //     value={formdata.imgName}
        //     placeholder="Enter Image Name "
        //     readOnly={true}
        //   ></input>
        //   <input
        //     className="adddata"
        //     type="text"
        //     name="Imgdetails"
        //     value={formdata.Imgdetails}
        //     placeholder="Enter Image Details "
        //     onChange={changedata}
        //   ></input>
        //   <input
        //     className="adddata"
        //     type="text"
        //     name="img_url"
        //     value={formdata.img_url}
        //     placeholder="Enter Image URL "
        //     onChange={changedata}
        //   ></input>
        //   <button type="submit">Edit Data</button>
        // </form>
      )}
    </Fragment>
  );
};

export default Edit;
