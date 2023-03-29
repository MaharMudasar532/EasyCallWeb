import React from "react";
import { Colors } from "../Utils/Color";

export default function Footer(props) {
  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center px-0"
        style={{
          height: 100,
          width: 300,
          marginLeft: "auto",
          marginRight: "auto",
          alignSelf: "center",
          flexDirection: "row",
          marginTop: "1%",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            height: 62,
            width: 62,
            backgroundColor: "#E4E4E4",
            borderRadius: 12,
            paddingTop: 4,
            paddingBottom: 2,
          }}
        >
          <img
            height={30}
            width={30}
            style={{ marginLeft: "24%" }}
            src={require("../assets/setting.png")}
          />
          <h5 style={{ fontSize: 12, textAlign: "center", marginTop: 2 }}>
            Setting
          </h5>
        </div>
        <div
          style={{
            height: 62,
            width: 124,
            backgroundColor: Colors.lightBlue,
            borderRadius: 12,
          }}
        >
            <h4 style={{textAlign:"center",marginTop:10}}>Enter</h4>
        </div>
        <div
          style={{
            height: 62,
            width: 62,
            backgroundColor: "#E4E4E4",
            borderRadius: 12,
            paddingTop: 4,
            paddingBottom: 2,
          }}
        >
          <img
            height={30}
            width={30}
            style={{ marginLeft: "28%" }}
            src={require("../assets/close.png")}
          />
          <h5 style={{ fontSize: 12, textAlign: "center", marginTop: 2 }}>
            Setting
          </h5>
        </div>
      </div>
    </div>
  );
}
