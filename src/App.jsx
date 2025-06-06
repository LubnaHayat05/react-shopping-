import { useState } from 'react'
import './App.css'
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");

  function NameHandler(event){
    setName(event.target.value);
  }
  function AgeHandler(event){
    setAge(event.target.value);
  }
  function CommentHandler(event){
    setComment(event.target.value);
  }
  function ShippingHandler(event){
    setShipping(event.target.value);
  }
  function PaymentHandler(event){
    setPayment(event.target.value);
  }

  return (
      <div>
      <h3>Happy Shopping</h3>
      <input value = {name} 
      onChange={NameHandler}/>
      <p>Name:{name}</p>
      <input value = {age} 
      type='number' 
      onChange={AgeHandler}/>
      <p> Age: {age}</p>
      <textarea value={comment} 
      placeholder="Enter your comment" 
      onChange={CommentHandler}/>
      <p>Comment: {comment}</p>
      <p>Shipping Method:</p>
      <label><input type="radio" 
          name="shipping" 
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={ShippingHandler} 
          />Pick Up</label>
      <label><input type="radio"
          name="shipping"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={ShippingHandler}
        />Delivery</label>
      <p>Shipping: {shipping}</p>

      <select value={payment} 
      onChange={PaymentHandler}>
        <option value="">Select the Payment option</option>
        <option value="Visa">Visa</option>
        <option value="UPI">UPI</option>
        <option value="Master">Master</option>
        <option value="Gift Card">Gift Card</option>
      </select>
      <p> Payment method: {payment} </p>
    </div>
  );
}

export default App
