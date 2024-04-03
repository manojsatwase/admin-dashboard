import { useCallback, useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import { transactionTableColumns, transactionUsersArray } from "../../utils/constant";
import TableHOC from "../../components/TableHOC";

const Transaction = () => {
  
  const [data] = useState(transactionUsersArray);
   const columns = transactionTableColumns;

  const Table = useCallback(
    TableHOC(
       columns,
       data,
       "dashboard-table-box",
       "Transaction",
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

export default Transaction