import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Home Page</div>
      <Link to="/about">Go to about page</Link>
    </div>
  );
};

export default Home;
