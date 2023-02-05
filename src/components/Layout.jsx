import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/"></Link>
      <Link to="/sign-up"></Link>
      <Link to="/sign-in"></Link>

      <Outlet />
    </>
  );
};

export default Layout;
