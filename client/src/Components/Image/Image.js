import React, { Fragment, useEffect } from "react";
import { oneimageaction, clearerr } from "../../Redux/actions/imageAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Image = () => {
  const dispatch = useDispatch();
  const { error, loading, image } = useSelector((state) => state.oneImage);
  const params = useParams();
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(oneimageaction(params.id));
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
            {image && image.Imgdetails}
        </div>
      )}
    </Fragment>
  );
};

export default Image;
