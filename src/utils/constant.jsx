import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";

import userImg from '../assets/userpic.png';
const shoesImg =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const laptopImg = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const user1 = "https://randomuser.me/api/portraits/women/54.jpg";

const user2 = "https://randomuser.me/api/portraits/women/50.jpg";

export  {
    userImg,
    shoesImg
}

export const months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const productsTableColumns =  [{
    Header:"Photo",
    accessor:"photo"
  },{
    Header:"Name",
    accessor:"name"
  },{
    Header:"Price",
    accessor:"price"
  },{
    Header:"Stock",
    accessor:"stock"
  },{
    Header:"Action",
    accessor:"action"
  }
  ]

// Products

export const productArray = [
    {
      photo: <img src={shoesImg} alt="Shoes" />,
      name: "Puma Shoes Air Jordan Cook Nigga 2023",
      price: 690,
      stock: 3,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
    {
      photo: <img src={laptopImg} alt="Shoes" />,
      name: "Macbook",
      price: 232223,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },  {
      photo: <img src={shoesImg} alt="Shoes" />,
      name: "Puma Shoes Air Jordan Cook Nigga 2023",
      price: 690,
      stock: 3,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
    {
      photo: <img src={laptopImg} alt="Shoes" />,
      name: "Macbook",
      price: 232223,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },{
      photo: <img src={shoesImg} alt="Shoes" />,
      name: "Puma Shoes Air Jordan Cook Nigga 2023",
      price: 690,
      stock: 3,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
   
  ];
  
  // Customer
  export const customerArray = [
    {
      avatar: (
        <img
          style={{
            borderRadius: "50%",
          }}
          src={user1}
          alt="Shoes"
        />
      ),
      name: "Emily Palmer",
      email: "emily.palmer@example.com",
      gender: "female",
      role: "user",
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },
    {
      avatar: (
        <img
          style={{
            borderRadius: "50%",
          }}
          src={user2}
          alt="Shoes"
        />
      ),
      name: "May Scoot",
      email: "aunt.may@example.com",
      gender: "female",
      role: "user",
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },
    {
      avatar: (
        <img
          style={{
            borderRadius: "50%",
          }}
          src={user1}
          alt="Shoes"
        />
      ),
      name: "Emily Palmer lady",
      email: "emily.palmer@example.com",
      gender: "female",
      role: "user",
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    }, {
      avatar: (
        <img
          style={{
            borderRadius: "50%",
          }}
          src={user2}
          alt="Shoes"
        />
      ),
      name: "May Scott",
      email: "aunt.may@example.com",
      gender: "female",
      role: "user",
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },
  
  ];

  export const customerTableColumns = [{
    Header:"Avatar",
    accessor:"avatar"
  },{
    Header:"Name",
    accessor:"name"
  },{
    Header:"Gender",
    accessor:"gender"
  },{
    Header:"Email",
    accessor:"email"
  },{
    Header:"Role",
    accessor:"role"
  },{
    Header:"Action",
    accessor:"action"
  }
  ]

  // Transaction 
  export const transactionUsersArray = [
    {
      user: "Charas",
      amount: 4500,
      discount: 400,
      status: <span className="red">Processing</span>,
      quantity: 3,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
  
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="green">Shipped</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="purple">Delivered</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
  ];

  export const transactionTableColumns = [{
    Header:"User",
    accessor:"user"
  },{
    Header:"Amount",
    accessor:"amount"
  },{
    Header:"Discount",
    accessor:"discount"
  },{
    Header:"Quantity",
    accessor:"quantity"
  },{
    Header:"Status",
    accessor:"status"
  },{
    Header:"Action",
    accessor:"action"
  }
  ]