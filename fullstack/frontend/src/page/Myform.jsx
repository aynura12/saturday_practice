import React from "react";
import "../page/form.scss"
const Myform = () => {
  return (
    <div>
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="" className="myform">
                <h2>Add Product</h2>
                <input type="text" name="image" placeholder="Image..." />
                <input type="text" name="name" placeholder="Name..." />
                <input type="text" name="price" placeholder="Price..." />
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myform;
