import React, { Fragment, useEffect } from "react";
import "./Images.css";
import { imageaction, clearerr } from "../../Redux/actions/imageAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import {Link} from "react-router-dom";

const Images = () => {
  const dispatch = useDispatch();
  const { error, loading, allimages } = useSelector((state) => state.Image);
  const { success } = useSelector((state) => state.newImage);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(imageaction());
  }, [dispatch, error, success]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="gallery gallery__content--flow">
          {allimages &&
            allimages.map((image) => {
              return (
                <Link to={`show/${image._id}`}>
                  <figure key={image._id}>
                    <img src={image.img_url} alt={image.imgName} />
                    <figcaption className="header__caption" role="presentation">
                      <h1 className="title title--primary">{image.imgName}</h1>
                    </figcaption>
                  </figure>
                </Link>
              );
            })}
        </div>
      )}
    </Fragment>
  );
};

export default Images;
