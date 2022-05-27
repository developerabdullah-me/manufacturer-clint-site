const { useState, useEffect } = require("react")

const UseProduct=()=>{
    const [products,setproducts]=useState([])
    console.log(products);
    useEffect(()=>{
        fetch('https://enigmatic-dawn-06088.herokuapp.com/pareses')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return [products,setproducts]
}
export default UseProduct