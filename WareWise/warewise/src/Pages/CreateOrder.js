import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import "../styles/CreateOrder.css"

function CreateOrder() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState(0);

  const products = ["Bureau", "Chaise", "Etagères", "Banc", "Table picnic", "Casier", "Tableau"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOrderId = uuidv4(); // Generate a new UUID for the order
    setOrderId(newOrderId); // Update the state with the new order ID
    setMessage(`Order #${newOrderId} placed successfully for ${quantity} units of ${product}.`);
  };

  return (
    <div className="order-form">
      <h1>Créer votre commande</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Produit:
          <select value={product} onChange={e => setProduct(e.target.value)} required>
            <option value="">--Choisir des choix suivants--</option>
            {products.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Quantité:
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} required />
        </label>
        <button type="submit">Créer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateOrder;
