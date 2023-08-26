import React, { useState } from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const Cart = () => {
  let cartLs = JSON.parse(localStorage.getItem("cart_page")) || [];
  const [data, setdata] = useState([]);
const alert=useAlert();


  const handleDelete = (index) => {
    cartLs.splice(index, 1);
    alert.success("deleted sucessfully");
    localStorage.setItem("cart_page", JSON.stringify(cartLs));
    window.location.reload();

  };
  useEffect(() => {
    if (cartLs.length > 0) {
      setdata(cartLs);
    } 
  }, [alert]);
  return (
    <div className="flex flex-wrap gap-10 justify-around mt-10  ">
      <div>
        <h1 className="text-2xl">Number of item in a cart : {data.length}</h1>
      </div>

      {data.map((item, index) => {
        return (
          <div style={{boxShadow:"1px 1px 4px rgb(80,76,76)"}} className="card w-96 bg-base-100 shadow-xl" key={item.author}>
            <div className="card-body">
              {/* <h2 className="card-title text-4xl">{item.title}</h2>
              <p>{item.description}</p> */}
              <img src={`${item.urlToImage}`} alt="Image Not Found" />
              <p>{item.title}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-primary"
                >
                  Delete from Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
