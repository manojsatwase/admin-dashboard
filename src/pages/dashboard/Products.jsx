import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useCallback, useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import { productArray, productsTableColumns } from "../../utils/constant";
import TableHOC from "../../components/TableHOC";

const Products = () => {
  const [data] = useState(productArray);
  // useCallback function does not create again and again that we use usecallback 
  const columns = productsTableColumns;
  const Table =  useCallback(
      TableHOC(
        columns,
        data,
        "dashboard-table-box",
        "Products",
        true
        ),[]
  )
  return (
    <div className="admin-container">
    <AdminSidebar />
    <main>
     <Table />
     <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
     </Link>
    </main>
 </div>
  )
}

export default Products