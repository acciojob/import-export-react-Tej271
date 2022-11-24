import React, { Component, useState } from "react";
import "../styles/App.css";
import Heading from "./Heading";
import InputQuery from "./InputQuery";
import SubHeading from "./SubHeading";
import SubmitBtn from "./SubmitButton";

const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitBtn />
    </div>
  );
};

export default App;
