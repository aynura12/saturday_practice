import React from "react";
import "../page/form.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {Helmet} from "react-helmet"
const Myform = () => {
  const [state, setState] = useState({
    image: "",
    name: "",
    price: "",
  });
  const addData = async () => {
    if (!state.image || !state.name || !state.price)
      await axios.post("http://localhost:8080/product", state);
  };
  const handleChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    addData();
  }, []);
  return (
    <div>
      <Helmet><title>Add</title></Helmet>
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="" className="myform">
                <h2>Add Product</h2>
                <input
                  type="text"
                  name="image"
                  value={state.image}
                  onChange={handleChange}
                  placeholder="Image..."
                />
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  placeholder="Name..."
                />
                <input
                  type="text"
                  name="price"
                  value={state.price}
                  onChange={handleChange}
                  placeholder="Price..."
                />
                <button type="submit" onClick={addData}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myform;
