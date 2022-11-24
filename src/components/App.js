import React, { Component, useState } from "react";
import "../styles/App.css";
import heading from "./Heading";
import inputQuery from "./InputQuery";
import subHeading from "./SubHeading";
import submitBtn from "./SubmitButton";

const App = () => {
  return (
    <div id="main">
      <heading />
      <inputQuery />
      <subHeading />
      <submitBtn />
    </div>
  );
};
