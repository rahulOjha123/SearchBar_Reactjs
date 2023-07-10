import React, { useState } from "react";
import data from "../SearchBar/dbms.json";

const Search = () => {
  const [text, setText] = useState("");

  const input = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "white",
          height: "300vh",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          paddingTop: "50px",
          backgroundColor:"#CFD6D9",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="search img...."
          onChange={input}
          value={text}
          style={{
            height: "7vh",
            borderRadius: "20px",
            width: "500px",
            textAlign: "center",
          }}
        />

        <div
          className="contant"
          style={{
            width: "90vw",
            height: "auto",
            // backgroundColor:"#CFD6D9",
            marginTop: "30px",
            marginLeft:"50px"
          }}
        >
          {data
            .filter((val) => {
              if (val == "") {
                return val;
                }else if(val.title.toLowerCase().includes(text.toLowerCase())){
              
                return val;
              }
            })
            .map((val) => {
              return (
                <>
                  <div
                    className="items"
                    key={val.id}
                    style={{
                      width: "20vw",
                      height: "40vh",
                      backgroundColor: "white",
                      margin: "5px",
                      borderRadius:"10px",
                      display:"block",float:"left" 
                }}
                  >
                    <img
                      src={val.img}
                      alt="error"
                      style={{ width: "100%",
                       height: "23vh",
                        borderRadius:"10px",}}
                    />
                    <h3>{val.title}</h3>
                    <p className="price">{val.price}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Search;
