const { useState, useEffect } = require("react")

const UseProduct=()=>{
    const [products,setproducts]=useState([])
    console.log(products);
    useEffect(()=>{
        fetch('https://parse-and-co.onrender.com/pareses')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return [products,setproducts]
}
export default UseProduct