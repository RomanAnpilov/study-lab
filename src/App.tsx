import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { MainPage } from "./pages/main";

export default function App() {
  const config = {
    loader: { load: ["input/asciimath"] },
    "fast-preview": { disabled: true },
    tex2jax: { preview: "none" },
  };
  const [set, setSet] = React.useState("123123");
  const [text, setText] = React.useState("sosiski sosisli");

  const changeHandler = (e: any) => {
    setSet(e.target.value);
  };

  console.log(set);
  return (
    // <MathJaxContext renderMode="post" config={config}>
    //   <input type="text" value={set} onChange={changeHandler} />
    //   {/* <button onClick={() => setText("sosisj")}>agagagaga</button>
    //   <h2>{text}</h2> */}
    //   <MathJax dynamic>{`\`${set}\``}</MathJax>
    // </MathJaxContext>
    <MainPage></MainPage>
  );
}
