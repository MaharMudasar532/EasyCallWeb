import React from "react";

export default function Header(props) {
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
          marginTop: "2%",
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
            src={require("../assets/Geography.png")}
          />
          <h5 style={{ fontSize: 12, textAlign: "center", marginTop: 2 }}>
            World
          </h5>
        </div>
        <div
          style={{
            height: 60,
            width: 124,
            backgroundColor: "#E4E4E4",
            borderRadius: 12,
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#A6B9DC",
              borderRadius: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              float: "left",
              borderRadius: 12,
            }}
          >
            <div>
              <h4
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  fontSize: 15,
                }}
              >
                ON
              </h4>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#E4E4E4",
              display: "flex",
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h4
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  fontSize: 15,
                  marginLeft: 20,
                }}
              >
                OFF
              </h4>
            </div>
          </div>
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
            style={{ marginLeft: "24%" }}
            src={require("../assets/setting.png")}
          />
          <h5 style={{ fontSize: 12, textAlign: "center", marginTop: 2 }}>
            Setting
          </h5>
        </div>
      </div>
    </div>
  );
}
