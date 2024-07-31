import React from "react";

export default function RennderList() {
  let arr = [
    "using map",
    "not use loop",
    "assign unique key",
    "avoid index for key",
  ];
  let k=1;
  return (
   <main style={{ backgroundColor: "#856" }}>
     <form  >
        <h1 style={{  color: "black" }}>
          The React Render view List
        </h1>
      <div>
        <ul style={{textAlign: "left",paddingLeft:"80px",}}>
          {arr.map((i) => (
            <li key={k++}>{i}</li>
          ))}
        </ul>
      </div>
    </form>
   </main>
  );
}
