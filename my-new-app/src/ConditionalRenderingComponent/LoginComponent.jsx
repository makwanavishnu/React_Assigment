import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

export default function LoginComponent() {

  const [value,setValue] = useState("login");
  const [content,setContent] = useState("public views");

 
function handleClick(){
if(value === "login"){
  setValue("logout");

  }
  else{
    setValue("login")
  }
  if(content === "public views"){
    setContent("private views")
  }else{
    setContent("public views")
  }
}
  return (
    <div>
      <div>
        <header
          style={{
            backgroundColor: "#666",
            padding: "30px",
            textalign: "center",
            fontsize: "35px",
            color: "white",
          }}
        >
          <h2>Navigation </h2>
          <span style={{float:"right"}}><button onClick={handleClick}>{value}</button></span>
          
        </header>

        <section style={{width:"100%",
    height: "500px",alignItems:"center",justifyContent:"center",display:"flex"}}>
          {content}
        </section>

        <footer
          style={{
            backgroundColor: "#777",
            padding: "10px",
            textalign: "center",
            color: " white",
          }}
        >
          <p>Footer</p>
        </footer>
      </div>
    </div>
  );
}
