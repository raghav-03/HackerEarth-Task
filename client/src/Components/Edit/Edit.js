import React, { Fragment, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { editimageaction, oneimageaction,clearerr } from "../../Redux/actions/imageAction";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { error, loading, image } = useSelector((state) => state.oneImage);
  const params = useParams();
  const { imgName, Imgdetails, img_url } = image;
  const [formdata, setformdata] = useState({
    imgName: "",
    Imgdetails:"",
    img_url:"",
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
      imgName: imgName ,
      Imgdetails: Imgdetails ,
      img_url: img_url ,
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
    dispatch(editimageaction(formdata,params.id));
    navigate(`/show/${params.id}`)
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={editdata}>
          <input
            className="adddata"
            type="text"
            name="imgName"
            value={formdata.imgName}
            placeholder="Enter Image Name "
            readOnly={true}
          ></input>
          <input
            className="adddata"
            type="text"
            name="Imgdetails"
            value={formdata.Imgdetails}
            placeholder="Enter Image Details "
            onChange={changedata}
          ></input>
          <input
            className="adddata"
            type="text"
            name="img_url"
            value={formdata.img_url}
            placeholder="Enter Image URL "
            onChange={changedata}
          ></input>
          <button type="submit">Edit Data</button>
        </form>
      )}
    </Fragment>
  );
};

export default Edit;
