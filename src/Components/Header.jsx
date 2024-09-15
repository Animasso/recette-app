import React from "react";
import "../styles/header.css";
const Header = () => {
  return (
    <header className="  w-full">
      <div className=" flex flex-row justify-center ">
        {" "}
        <img
          src="../assets/logoPoulet.png"
          alt="logo"
          className=" mt-3  w-40 h-40 rounded-full"
        />
        <h1 className=" font-bold ml-9 text-7xl mt-8 text-headerCustom shadow">
          On Prépare Quoi ?
        </h1>{" "}
      </div>
    </header>
  );
};

export default Header;
