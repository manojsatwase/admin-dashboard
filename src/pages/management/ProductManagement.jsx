import { useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import { shoesImg } from "../../utils/constant";

const TransactionManagement = () => {
  const [name, setName] = useState("Puma Shoes");
  const [price, setPrice] = useState(2000);
  const [stock, setStock] = useState(5);
  const [photo, setPhoto] = useState(shoesImg);

  const [updateName, setUpdateName] = useState(name);
  const [updatePrice, setUpdatePrice] = useState(price);
  const [updateStock, setUpdateStock] = useState(stock);
  const [updatePhoto, setUpdatePhoto] = useState(photo);

  const changeImageHandler = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setUpdatePhoto(reader.result);
        }
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setName(updateName);
    setPrice(updatePrice);
    setStock(updateStock);
    setPhoto(updatePhoto);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <strong>ID - 507f1f77bcf86cd799439011</strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">No Available</span>
          )}
          <h3>${price}</h3>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={updateName}
                onChange={({ target: { value } }) => setUpdateName(value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={updatePrice}
                onChange={({ target: { value } }) =>
                  setUpdatePrice(Number(value))
                }
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={updateStock}
                onChange={({ target: { value } }) =>
                  setUpdateStock(Number(value))
                }
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={changeImageHandler}
              />
            </div>
            {updatePhoto && <img src={updatePhoto} alt="New Photo" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default TransactionManagement;
