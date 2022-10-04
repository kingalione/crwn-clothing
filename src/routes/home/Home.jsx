import { Outlet } from "react-router-dom";

import React from "react";
import Directory from "../../components/directory/Directory";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
