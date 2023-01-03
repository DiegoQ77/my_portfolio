import { Outlet } from "react-router-dom";

function ArticlesLayout() {
  return (
    <div>
      <h1>Articles Layout</h1>
      <Outlet />
    </div>
  );
}

export default ArticlesLayout;
