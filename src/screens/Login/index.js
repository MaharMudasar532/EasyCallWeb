import React, { useState } from "react";
import Header from "../../components/header";
import CodeInpt from "../../components/CodeInpt";
import { Colors } from "../../Utils/Color";
import { ScrollData } from "../../components/ScrollData";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const Login = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");

  const [showInpt1, setShowInpt1] = useState(true);
  const [showInpt2, setShowInpt2] = useState(true);
  const [showInpt3, setShowInpt3] = useState(true);

  const getUnicodeHex = (char) => char.codePointAt(0).toString(16);
  const getEmoji = (unicodeHex) =>
    String.fromCodePoint(parseInt(unicodeHex, 16));

  return (
    <div
      style={{
        height: window.innerHeight + "px",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Header />
      <div
        className="d-flex justify-content-between align-items-center mt-2"
        style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
      >
        <CodeInpt
          code={code1}
          setShowInpt={setShowInpt1}
          setCode={setCode1}
          showInpt={showInpt1}
        />
        <CodeInpt
          code={code2}
          setShowInpt={setShowInpt2}
          setCode={setCode2}
          showInpt={showInpt2}
        />
        <CodeInpt
          code={code3}
          setShowInpt={setShowInpt3}
          setCode={setCode3}
          showInpt={showInpt3}
        />
      </div>
      {/* scroll item >/? */}
      <div
        className="border border-secondary"
        style={{
          height: 140,
          width: 300,
          alignSelf: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: Colors.borderColor,
        }}
      >
        <div className="container scrollBar" style={{ overflow: "scroll" }}>
          <div className="row p-1 m-1" style={{ width: 350, height: 120 }}>
            {ScrollData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border border-dark"
                  style={{
                    height: 74,
                    width: 80,
                    margin: 2,
                    backgroundColor: item.type == "color" ? item.value : "#fff",
                  }}
                >
                  <h4 style={{ textAlign: "center", marginTop: "36%" }}>
                    {item.type == "emoji" ? getEmoji(item.value) : item.value}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* "scrol  itemend ?" */}

      <Button btnTitle="Log in " />
      <Button btnTitle="Sign up" />
      <Footer />
    </div>
  );
};

export default Login;
