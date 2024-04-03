import { useRouteError } from "react-router-dom";

import AdminSidebar from "../components/admin/AdminSidebar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="admin-container">
        <AdminSidebar/>
      <main className="dashboard">
      <div className="error-message">
          <img
            lazy="loading"
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Page Not Found"
          />
          <div className="error-text">
            <p>!Oops {error?.status} Page {error.statusText}</p>
            <p>Something Went Wrong!!</p>
          </div>
        </div> 
      </main>
    </div>
  )
}

export default ErrorPage;
