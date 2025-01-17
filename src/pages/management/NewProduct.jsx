import {  useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";

const NewProduct = () => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState();
    const [stock,setStock] = useState();
    const [photo,setPhoto] = useState();

    const changeImageHandler = (e) => {
        const file = e.target.files?.[0];
    
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === "string") {
                    setPhoto(reader.result);
                }
            };
            reader.onerror = (error) => {
                console.error("Error reading file:", error);
            };
            reader.readAsDataURL(file);
        }
    };
    
  return (
    <div className="admin-container">
    <AdminSidebar />
    <main className="product-management">
      <article>
         <form>
            <h2>New Product</h2>
            <div>
                <label>Name</label>
                <input 
                    required
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={({target:{value}}) => setName(value)}
                 />
            </div>
            <div>
                <label>Price</label>
                <input 
                    required
                    type="number" 
                    placeholder="Price"
                    value={price}
                    onChange={({target:{value}}) => setPrice(Number(value))}
                 />
            </div>
            <div>
                <label>Stock</label>
                <input 
                    required
                    type="number" 
                    placeholder="Stock"
                    value={stock}
                    onChange={({target:{value}}) => setStock(Number(value))}
                 />
            </div>
            <div>
              <label>Photo</label>
              <input type="file" accept="image/*" onChange={changeImageHandler} />
            </div>
            {
                photo && <img src={photo} alt="New Photo" />
            }
            <button type="submit">Create</button>
         </form>
      </article>
    </main>
    </div>
  )
}

export default NewProduct;