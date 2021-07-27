import React from "react";
import ItemDetails from "./ItemDetails.jsx";

const List = (props) => {
  return (
    <div className="container">
      {props.items.map((item, index) => (
        <ItemDetails item={item} key={index} />
      ))}
    </div>
  );
};
export default List;