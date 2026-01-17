import React, { useState } from "react";

export default function App() {
  const [phones, setPhones] = useState([
    { name: "Iphonex", price: 500, qty: 3 },
    { name: "Iphone11", price: 550, qty: 3 },
    { name: "Iphone12", price: 600, qty: 3 },
    { name: "Iphone13", price: 650, qty: 3 },
    { name: "Iphone13", price: 650, qty: 3 },
  ]);
  const addNewPhone = () => {
    let newPhoneName = prompt("Please Enter New Phone Name");
    let newPhonePrice = +prompt("Enter New Phone Price");
    let newQty = +prompt("Enter new phone Qty");
    let newObj = {
      name: newPhoneName,
      price: newPhonePrice,
      qty: newQty,
    };
    let copy = [...phones];
    copy.push(newObj);
    setPhones(copy);
  };
  const deletePhone = (index) => {
    let copy = [...phones];
    copy.splice(index, 1);
    setPhones(copy);
  };
  const updateDta = (index) => {
    let newName = prompt("Enter New Phone Name", phones[index].name);
    let newPrice = +prompt("Enter New Phone Price", phones[index].price);
    let newQty = +prompt("Enter New Phone Qty", phones[index].qty);

    let copy = [...phones];
    copy[index] = { name: newName, price: newPrice, qty: newQty };
    setPhones(copy);
  };

  return (
    <div>
      <button
        onClick={() => {
          addNewPhone();
        }}
        className="btn btn-primary "
      >
        Add New Phone
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item_Name </th>
            <th>Item Price</th>
            <th>Item Qty</th>
            <th>Item total</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>{el.price * el.qty}</td>
                <th>
                  <button
                    className="btn btn-dash"
                    onClick={() => deletePhone(index)}
                  >
                    {" "}
                    Delete
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-info"
                    onClick={() => updateDta(index)}
                  >
                    Update
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
