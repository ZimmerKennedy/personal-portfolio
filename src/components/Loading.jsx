import React from "react";

const Loading = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "black",
    fontSize: "2rem",
    color:"white",
  };

  return (
    <div style={style}>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;