import React from "react";
import { Colors } from "../Utils/Color";

export default function Button(props) {
  return (
    <div style={{ marginLeft: "auto", width: 300, marginRight: "auto" }}>
      <button
        className="text-center"
        style={{
          height: 60,
          width: 300,
          backgroundColor: Colors.lightGrey,
          alignSelf: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
          borderRadius: 11,
          borderWidth: 0,
        }}
      >
        {props.btnTitle}
      </button>
    </div>
  );
}
