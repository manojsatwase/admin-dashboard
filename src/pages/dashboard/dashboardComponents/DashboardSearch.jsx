import { BsSearch } from "react-icons/bs"
import { FaRegBell } from 'react-icons/fa';
import { userImg } from "../../../utils/constant";

const dashboardsearch = () => {
  return (
        <div className="bar">
        <BsSearch />
        <input type="text" placeholder="Search for data, users , docs" />
        <FaRegBell />
        <img src={userImg} alt="User" />
        </div>
  )
}

export default dashboardsearch;