import { Outlet } from "react-router-dom";
const articles = () => {
  return (
    <>
      <h1>this is articles page</h1>
      <Outlet />
    </>
  );
};
export default articles;
