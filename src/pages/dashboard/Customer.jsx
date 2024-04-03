import {  useCallback, useState } from "react";

import AdminSidebar from '../../components/admin/AdminSidebar';
import { customerArray,customerTableColumns } from "../../utils/constant";
import TableHOC from "../../components/TableHOC";

const Customers = () => {
const [data] = useState(customerArray);

const columns = customerTableColumns;

 const Table = useCallback(
  TableHOC(
     columns,
     data,
     "dashboard-table-box",
     "Customers",
     true
    ),[])

  return (
    <div className="admin-container">
     <AdminSidebar />
     <main>
      <Table/>
    </main>
 </div>
  )
}

export default Customers