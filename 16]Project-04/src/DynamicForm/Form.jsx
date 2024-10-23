import React, { useState } from 'react';

export default function Form() {
    const [cat, setCat] = useState('');
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    
    const [error, setError] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();


        if ( name === "" || companyName === "" || productName === "" || productPrice === "" ) {
            setError("Please Filled Detail According to required!");
        }else{
            setError("");
        }
        
        
        
    };

    return (
        <div>
            <h1>Dynamic Form</h1>
            <form onSubmit={handleSubmit}>
                {error && <span>{error}</span>}
                <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Enter Your Company Name' onChange={(e) => setCompanyName(e.target.value)} />
                <input type="text" placeholder='Enter Your Product Name' onChange={(e) => setProductName(e.target.value)} />
                <input type="text" placeholder='Enter Your Product Price' onChange={(e) => setProductPrice(e.target.value)} />
                
                <select onChange={(e) => setCat(e.target.value)}>
                    <option hidden>Category</option>
                    <option value="cloth">Cloth</option>
                    <option value="shoes">Shoes</option>
                    <option value="electronics">Electronics</option>
                    <option value="foods">Foods</option>
                </select>

                {cat === "cloth" && (
                    <div>
                        <input type="text" placeholder='Enter Your Cloth Category' onChange={(e) => setClothCategory(e.target.value)} />
                        <input type="text" placeholder='Enter Your Cloth Size' onChange={(e) => setClothSize(e.target.value)} />
                        <input type="text" placeholder='Enter Your Cloth Price' onChange={(e) => setClothPrice(e.target.value)} />
                    </div>
                )}

                {cat === "shoes" && (
                    <div>
                        <input type="text" placeholder='Enter Your Shoes Category' onChange={(e) => setShoesCategory(e.target.value)} />
                        <input type="text" placeholder='Enter Your Shoes Size' onChange={(e) => setShoesSize(e.target.value)} />
                        <input type="text" placeholder='Enter Your Shoes Price' onChange={(e) => setShoesPrice(e.target.value)} />
                    </div>
                )}

                {cat === "electronics" && (
                    <div>
                        <input type="text" placeholder='Enter Your Electronics Category' onChange={(e) => setElectronicsCategory(e.target.value)} />
                        <input type="text" placeholder='Enter Your Electronics Warranty' onChange={(e) => setElectronicsWarranty(e.target.value)} />
                        <input type="text" placeholder='Enter Your Electronics Price' onChange={(e) => setElectronicsPrice(e.target.value)} />
                    </div>
                )}

                {cat === "foods" && (
                    <div>
                        <input type="text" placeholder='Enter Your Foods Name' onChange={(e) => setFoodsName(e.target.value)} />
                        <input type="text" placeholder='Enter Your Foods Type' onChange={(e) => setFoodsType(e.target.value)} />
                        <input type="text" placeholder='Enter Your Foods Price' onChange={(e) => setFoodsPrice(e.target.value)} />
                    </div>
                )}

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
