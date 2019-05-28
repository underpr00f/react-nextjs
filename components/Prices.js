import { useState } from "react";
export const Prices = ({bpi}) => {
  const [state, setState] = useState({currency: 'USD'})
  return (
    <div itemScope itemType="http://schema.org/Product">
      <ul className="list-group">
        <li className="list-group-item"><span itemProp="name">Bitcoin rate</span> for {bpi[state.currency].description} : 
        <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <span className="badge badge-primary" itemProp="priceCurrency">{bpi[state.currency].code}</span> 
          <strong itemProp="price">{bpi[state.currency].rate}</strong>
        </div>
      </li>
      </ul>
      <br/>
      <select onChange={e => setState({currency: e.target.value})} className="form-control">
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  )
}
