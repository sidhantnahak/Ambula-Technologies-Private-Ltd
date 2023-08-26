import React from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const Navbar = () => {
  let cartLs = JSON.parse(localStorage.getItem("cart_page")) || [];


  const alert=useAlert();
  return (
    <div style={{paddingBottom:"1rem",borderBottom:"1px solid rgb(80, 76, 76)"}}  className="flex justify-around  mt-7" >
      <Link  className="text-2xl hover:text-white" to="/Home">
        Home
      </Link >
      <Link className="text-2xl hover:text-white" to="/About">
        About
      </Link>
      <Link className="text-2xl hover:text-white" to="/Contact">
        Contact
      </Link>
      <Link  onClick={()=>cartLs.length===0&&alert.success("no cart items present")} className="text-2xl hover:text-white" to="/Cart">
        Cart <span style={{position:"relative",bottom:"0.5rem ",right:"0rem",background:"white",padding:"0.3rem 0.6rem",borderRadius:"70%",fontSize:"0.8rem",color:"black",fontWeight:"800"}}>{cartLs.length}</span> 
      </Link>
    </div>
  );
};

export default Navbar;
