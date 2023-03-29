import React from "react";
import { Colors } from "../Utils/Color";
import "../../src/index.css";

export default function CodeInpt(props) {
  const { code, setShowInpt, setCode, showInpt } = props;
  console.log("code rendering ");
  return (
    <>
      <div
        style={{
          height: 80,
          width: 80,
          backgroundColor: Colors.itemBackGroundColor,
          borderRadius: 12,
        }}
      >
        {showInpt && code == "" ? (
          <img
            style={{ marginTop: 10, marginLeft: 27 }}
            // height={25}
            src={require("../assets/dial.png")}
          />
        ) : (
          <div style={{ height: 20 }}></div>
        )}
        <div style={{ marginTop: "auto", height: "auto" }}>
          <input
            maxLength={1}
            value={code}
            onFocus={() => setShowInpt(false)}
            onBlur={() => setShowInpt(true)}
            onChange={(e) => setCode(e.target.value)}
            className="input"
            placeholder="Cell"
            type={"text"}
            style={{
              width: 80,
              height: 30,
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              border: "none",
              fontSize: 19,
              backgroundColor: Colors.itemBackGroundColor,
            }}
          />
        </div>
      </div>
    </>
  );
}
