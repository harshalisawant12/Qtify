import { red } from "@mui/material/colors";
import Button from "../Button";
import { ReactComponent as SearchIcon } from "./Search-icon.svg";
import Menu from "../Menu";
import {useState} from 'react';

export default () => {
  const [suggestion, setSuggestion]=useState("none");
  const changeSuggestion= (e)=>{
    if (e.target.value===undefined)
    {
       setSuggestion("none");

    }
    else{
      setSuggestion("block");
    }
  }
  return (
    <div>
      <form
        style={{
          display: "flex",
          minWidth: "568px",   
        }}
      >
        <input
          placeholder="Search and album of your choice"
          onChange={()=>setSuggestion("block")}
          style={{
            flex: 1,
            borderRadius: "8px 0px 0px 8px",
            padding: "8px",
          }}
        />
        <button
          style={{
            width: "66px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 8px 8px 0px",
            padding: "8px",
          }}
        >
          <SearchIcon />
        </button>
      </form>
      <div style={{
  display:`${suggestion}`
 }}>
 <Menu data={[1,2,3]}/>
 </div>
   </div>
  )
}
