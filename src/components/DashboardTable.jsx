import { columns } from "../utils/columns";
import TableHOC from "./TableHOC"

const DashboardTable = ({ data = [] }) => {
   
  return TableHOC(
    columns, // columns
    data, // data
    "transaction-box", // classname
    "Top Transaction" // heading name
  )();
};

export default DashboardTable;
