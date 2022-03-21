import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  function dimensioneFinestra() {
    setSize(window.innerWidth);
  }
  console.log("render");
  useEffect(() => {
    console.log("setto listener");
    window.addEventListener("resize", dimensioneFinestra);
    //meglio usare la clean up function
    // return () => {
    //   console.log("rimuvo listener");
    //   window.removeEventListener("resize", dimensioneFinestra);
    // };
  }, []);
  return (
    <div
      className="container w-75 col-6 offset-3 bg-white shadow py-4"
      style={{ textAlign: "center" }}
    >
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
