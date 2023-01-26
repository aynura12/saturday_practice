import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../components/mapcard.scss";
const Mapcard = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/product");
    setProducts(res.data);
  };
  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/product/:${id}`);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  const [sorted, setSorted] = useState({ sorted: "price", reversed: false });
  const sortByPrice = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });
    const datacopy = [...products];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return b.price - a.price;
      }
      return a.price - b.price;
    });
    setProducts(datacopy);
  };
  return (
    <div className="mapcard">
      <div className="container">
        <div className="maptext">
          <p>Devoted to wonderful beauty</p>
          <h1>Our Portfolio</h1>
        </div>
        <button onClick={sortByPrice}>Sorted</button>
        <input type="search" onChange={(e) => setSearch(e.target.value)} />
        <div className="row">
          {products
            ?.filter((product) => {
              return search.trim().toLowerCase() === ""
                ? product
                : product.name.toLowerCase().includes(search);
            })
            .map(({ image, name, price, id, _id }) => {
              return (
                <div className="mapinf col-4" key={id}>
                  <img src={image} alt="" />
                  <h3>{name}</h3>
                  <p>${price}</p>
                  <button
                    onClick={() => {
                      deleteData(_id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Mapcard;
