import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Purchase = () => {
    const { Id } = useParams();
    const [product, setProduct] = useState({});
    const [newQuantity, setNewQuantity] = useState(0)
    const { img, name, description, price, quantity } = product;
  
    useEffect(() => {
      fetch(`http://localhost:5000/purchaseProduct/${Id}`)
        .then(res => res.json())
        .then(data =>{ 
            
          setProduct(data) 
          setNewQuantity(data.quantity)
      });
    }, []);
  
    const handleQuantityUpdate = event => {
      event.preventDefault()
  
      const restock = event.target.restock.value
  
      const updatedData = + restock + newQuantity
      setNewQuantity(updatedData)
      const url = `http://localhost:5000/purchaseProduct/${Id}`
  
      fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({ updatedData })
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          
          // alert('quantity updatted')
      })
  event.target.reset()
  }
  
  // delevary
  
  const handleDelivery = () => {
  
      if (newQuantity > 0) {
          const updatedData = newQuantity - 1
          setNewQuantity(updatedData)
          const url = `http://localhost:5000/purchaseProduct/${Id}`
  
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify({ updatedData })
          })
              .then(res => res.json())
              .then(data => {
                toast.success('Success',data)
                  alert('quantity updatted')
              })
      }
  
  }

    return (
        <div>
          
              <div>
      <div className="shadow-lg w-80  mx-auto p-5 mb-7">
        <div className=" ">
          <img className="w-32 mx-auto rounded" src={img} alt="" />
          <div className="text-center">
            <h1> {name} </h1>
            <p> quantity: {newQuantity}</p>
            <p>price:{price}</p>

            <form onSubmit={handleQuantityUpdate}>
            <input className="w-24 py-3 mr-2 bg-slate-300"  type="number"  name='restock' placeholder='newQuantity' required/>
            <button className="btn">Add quantity</button>
            </form>

          </div>
        </div>
        <div className=" flex justify-around mt-3">
          <button onClick={handleDelivery} className="btn">
            Delivery
          </button>
          
        </div>
      </div>
      {toast}
    </div>
   
        </div>
    );
};

export default Purchase;