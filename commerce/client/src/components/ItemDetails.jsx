import React from "react";

const ItemDetails = (props) => {
  return (
    <div className="card">

      <img calssName="card-image" src={props.item.imageUrl} alt="item image" />
      
      <div className="card-itemDetails">
          <h4>{props.item.itemName}</h4>
          <h5>{props.item.price}</h5>
          <h5>{props.item.itemDescription}</h5>
          <h5>{props.item.quantity}</h5>
        <button>Delete</button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default ItemDetails;
