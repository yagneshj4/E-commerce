import React, { useState } from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'
export default function Addproduct() {
    const [formData, setFormData] = useState({
        name: "", price: 0, description: "", image: ""
    })
    const navigate = useNavigate()
    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function handleAddProduct(e) {
        e.preventDefault()
        const dataToSend = { ...formData, price: Number(formData.price) }
        API.post("/product/add", dataToSend)
            .then((res) => {
                if (res.status == 201) {
                    alert("Product added successfully")
                    navigate("/")
                }
            })
            .catch(err => {
                console.error("Error adding product:", err);
                const message = err?.response?.data?.message || "Something went wrong";
                alert(message);
            })
    }
    return (
        <div className='container'>
            <div className='row'>
                <form onSubmit={handleAddProduct}>
                    <div className="mb-3">
                        <h2>Product</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" placeholder='Enter Name' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" name="price" className="form-control" placeholder='Enter Price' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Description</label>
                        <input type="text" name="description" className="form-control" placeholder='Enter description' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Image URL</label>
                        <input type="text" name='image' className="form-control" placeholder='Enter image url' onChange={handleChange} />
                    </div>
                    <button className='btn btn-warning'>Add Product</button>
                </form>
            </div>
        </div>
    )
}