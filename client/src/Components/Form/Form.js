import {  useState, React } from "react";
import { addimageaction } from "../../Redux/actions/imageAction";
import {  useDispatch } from "react-redux";
import './Form.css'
const Form = () => {
const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    imgName: "",
    Imgdetails: "",
    img_url: "",
  });
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
  const adddata = (e) => {
    e.preventDefault();
    dispatch(addimageaction(formdata))
    dispatch({type:"ADD_IMAGE_RESET"});
    // call axios
    // resetting the state
    setformdata({
        imgName: "",
        Imgdetails: "",
        img_url: "",
    });
  };
  return (
    <div>
      <form onSubmit={adddata}>
        <input
          className="adddata"
          type="text"
          name="imgName"
          value={formdata.imgName}
          placeholder="Enter Image Name "
          onChange={changedata}
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
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default Form;
