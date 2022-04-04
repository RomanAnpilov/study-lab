import { MathJax, MathJaxContext } from "better-react-mathjax";
import { CSSProperties, FC, useState, useCallback, memo } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { MainContext } from "../../pages/DragDrop";
import { ItemTypes } from "../ItemTypes";
import clsx from "clsx";
import style from "./Dustbin.module.scss";
import React from "react";
const styles: CSSProperties = {
  border: "5px solid rgb(0, 128, 128, 0.1)",
  height: "150px",
  width: "150px",
  padding: "2rem",

  
};

export interface TargetBoxProps {
  onDrop: (item: any) => void;
  lastDroppedColor?: any;
  text: string;
  id: string;
}

const TargetBox: FC<TargetBoxProps> = memo(function TargetBox({
  onDrop,
  lastDroppedColor,
  text,
  id,
}) {
  const { ContextData, addAnswer } = React.useContext(MainContext);
  const config = {
    loader: { load: ["input/asciimath"] },
    "fast-preview": { disabled: true },
    "HTML-CSS": { fonts: [ "sana-Math"], scale: 1000 },
    tex2jax: { preview: "none" },
  };

  const onCli = () => {
    if(ContextData.length > 0 && ContextData.some(i => i.id === String(id))){
      console.log("aaa")
    } else {
      addAnswer(String(id), lastDroppedColor.name);
    }
    
    console.log(ContextData);
  }

  const [{ isOver, draggingColor, canDrop }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BOX],
      drop(_item: any, monitor) {
        onDrop(monitor.getItem());
        // onCli()
        return undefined;
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggingColor: monitor.getItem() as { name: any },
      }),
    }),
    [onDrop]
  );
  const opacity = 1;
  let backgroundColor = "#fff";

  return (
    <div
      ref={drop}
      data-color={lastDroppedColor || "none"}
      style={{ ...styles, backgroundColor, opacity }}
      // className={clsx(
      //   lastDroppedColor &&
      //     (lastDroppedColor.name === id ? style.check : style.bad)
      // )}
      role="TargetBox"
    >
      <MathJaxContext renderMode="post" config={config}>
        <MathJax>{`\`${text}\``}</MathJax>
        {!canDrop && lastDroppedColor && (
          <p>
            Answer: <MathJax>{`\`${lastDroppedColor.name}\``}</MathJax>
            {onCli()}
            {/* {lastDroppedColor.name === id ? "GOOD" : "FAIL"} */}
          </p>
        )}
      </MathJaxContext>
    </div>
  );
});

export interface StatefulTargetBoxState {
  lastDroppedColor: any | null;
}
export const Dustbin: FC<{ textProps: string; id: number }> = ({
  textProps,
  id,
}) => {
  const { ContextData, addAnswer } = React.useContext(MainContext);
  const [lastDroppedColor, setLastDroppedColor] = useState<any>(null);
  const handleDrop = useCallback(
    (color: any) => setLastDroppedColor(color),
    []
  );

  
  const onCli = () => {
    if(ContextData.length > 0 && ContextData.some(i => i.id === String(id))){
      console.log("aaa")
    } else {
      addAnswer(String(id), textProps);
    }
    
    console.log(ContextData);
  }
  

  return (
    <>
    <TargetBox
      text={textProps}
      id={String(id)}
      lastDroppedColor={lastDroppedColor as any}
      onDrop={handleDrop}
    />
    </>
  );
};
