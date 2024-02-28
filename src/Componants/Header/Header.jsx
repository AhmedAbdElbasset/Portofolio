import React, { useState } from "react";
import "./Header.css";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
const Header = () => {
  return (
    <div className="Head">
      <NavLink className={({isActive})=>isActive?'active':''} to ={'#landing'} end='true'/>
        <NavLink className={({isActive})=>isActive?'active':''} to={"#about"}/>
        <NavLink className={({isActive})=>isActive?'active':''} to={"#Skills"}/>
        <NavLink className={({isActive})=>isActive?'active':''} to={"#Portfolio"}/>
        <NavLink className={({isActive})=>isActive?'active':''} to={"#Contact"}/>
      {/* <a className={""}href={"#landing"} />
      <a className={""} href={"#about"} />
      <a className={""} href={"#Skills"} />
      <a className={""} href={"#Portfolio"} />
      <a className={""} href={"#Contact"} /> */}
    </div>
  );
};

export default Header;
