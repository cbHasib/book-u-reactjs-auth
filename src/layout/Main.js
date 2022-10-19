import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner";

const Main = () => {
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {loading ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default Main;
