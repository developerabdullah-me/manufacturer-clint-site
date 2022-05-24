const { useState, useEffect } = require("react")

const UseProduct=()=>{
    const [products,setproducts]=useState([])
    console.log(products);
    useEffect(()=>{
        fetch('http://localhost:5000/pareses')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return [products,setproducts]
}
export default UseProduct