import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    <h4> Items in Stock </h4>
    <h2>There are {props.items.length} items.</h2> <br/>
      {props.items.map((item, index) => (
       <div key={index}>
        <ListItem setRefresh = {props.setRefresh}
        refresh = {props.refresh} item={item} />
      </div>
   ) ) } 
   
 </div>
)


export default List;
