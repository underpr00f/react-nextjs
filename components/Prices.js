import { useState } from "react";
export const Prices = ({bpi}) => {
  const [state, setState] = useState({currency: 'USD'})
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Bitcoin rate for {bpi[state.currency].description} : 
        <span className="badge badge-primary">{bpi[state.currency].code}</span> 
        <strong>{bpi[state.currency].rate}</strong>
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
