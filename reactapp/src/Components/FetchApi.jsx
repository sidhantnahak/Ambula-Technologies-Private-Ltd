import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Error="Data Not Found Check The Api Key is Correct or Not";

const FetchApi = () => {
  let cartLs = JSON.parse(localStorage.getItem("cart_page")) || [];
  const [data, setdata] = useState([]);
  const alert = useAlert();

  const locatin = useLocation();

  // fetch the imdb movie data function
  let getData = async () => {
    try {
      let res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da6a6d4b18214e2084a5c0d4dd47de69`
      );
      let data = await res.json();
      if(res.status!==200){
      console.log(data.message)
       return
      }
      setdata(data.articles);
    } catch (e) {
      // seterror(e.message);

    }
  };
  useEffect(() => {
    getData();
  }, [alert]);
  // to check item will be in cart or not
  const addtocart = (id) => {
    for (let i = 0; i < cartLs.length; i++) {
      if (cartLs[i].author === id) {
        return false;
      }
    }
    return true;
  };
  // to added a cart function 
  const handleCart = (item) => {
    if (addtocart(item.author) === true) {

      cartLs.push(item);
      localStorage.setItem("cart_page", JSON.stringify(cartLs));
      window.location.reload();



    } else {
      alert.error("Item all ready in the cart");
    }
  };

  return (
    <>
    {
     data&& data.length>0?
    

      <div style={{ margin: "2rem 0" }} className="flex flex-wrap gap-10 justify-around  ">
        {data.map((item) => {
          return (
            <div style={{ boxShadow: "1px 1px 4px rgb(80,76,76)" }} className="card w-96 bg-base-100" key={item.author}>
              <div className="card-body">
                <img src={`${item.urlToImage}`} alt="Image Not Found" />
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                  <Link target="blank" to={item.url} ><button

                    className="btn btn-primary"
                  >
                    View Details
                  </button></Link>
                  <button
                    onClick={() => handleCart(item)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            </div>
          );
        })}
      </div>:<h1 style={{textAlign:"center",fontSize:"2rem",margin:"1.5rem 0"}}>{Error}</h1>
      }
    </>
  );
};

export default FetchApi;
