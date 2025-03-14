import React from "react";
import classes from "./Header.module.css";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <section>
      <div className={classes.header_continear}>
        
        <div className={classes.logo_continear}>
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </a>
        </div>

        
        <div className={classes.delivery}>
          <CiLocationOn size={20} />
          <p>
            Delivery to <span>Ethiopia</span>
          </p>
        </div>

     
        <div className={classes.search}>
          <select>
            <option value="All">All</option>
          </select>
          <input type="text" placeholder="Search products" />
          <IoSearch size={20} />
        </div>

       
        <div className={classes.order_containear}>
         
          <div className={classes.language}>
            <img
              src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000"
              alt="Language"
            />
            <select>
              <option value="EN">EN</option>
            </select>
          </div>

      
          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>

        
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

         
          <a href="" className={classes.cart}>
            <PiShoppingCartSimple size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
