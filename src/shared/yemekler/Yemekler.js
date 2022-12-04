import React, { useEffect, useState } from "react";

const Yemekler = (props) => {
  function toBase64(arr) {
    return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
  }



  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(
      props.urunler.map((product) => {
        return (
          <div key={product.Id} className="urun">
            <h5>
              {product.ProductName} <br />
              {product.UnitCalorie} kcal/gr
            </h5>
            <img src={`data:image/png;base64,${toBase64(product.Image.data)}`} alt="aa" />
          </div>
        );
      })
    );
  }, [props.urunler]);



  return <div className="yemekler">{loading.length ? loading : <span className="loader"></span>}</div>;
};

export default Yemekler;
