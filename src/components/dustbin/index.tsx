import { MathJax, MathJaxContext } from "better-react-mathjax";
import { CSSProperties, FC, useState, useCallback, memo } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { ItemTypes } from "../ItemTypes";

const style: CSSProperties = {
  border: "5px solid rgb(0, 128, 128, 0.1)",
  height: "150px",
  width: "150px",
  padding: "2rem",
  textAlign: "center",
};

export interface TargetBoxProps {
  onDrop: (item: any) => void;
  lastDroppedColor?: any;
  text: string;
}

const TargetBox: FC<TargetBoxProps> = memo(function TargetBox({
  onDrop,
  lastDroppedColor,
  text,
}) {
  const config = {
    loader: { load: ["input/asciimath"] },
    "fast-preview": { disabled: true },
    tex2jax: { preview: "none" },
  };
  const [{ isOver, draggingColor, canDrop }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BOX],
      drop(_item: any, monitor) {
        onDrop(monitor.getItem());
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
  const opacity = isOver ? 1 : 0.7;
  let backgroundColor = "#fff";

  return (
    <div
      ref={drop}
      data-color={lastDroppedColor || "none"}
      style={{ ...style, backgroundColor, opacity }}
      role="TargetBox"
    >
      <MathJaxContext renderMode="post" config={config}>
        <MathJax>{`\`${text}\``}</MathJax>
        {!canDrop && lastDroppedColor && (
          <p>
            Answer: <MathJax>{`\`${lastDroppedColor.name}\``}</MathJax>
          </p>
        )}
      </MathJaxContext>
    </div>
  );
});

export interface StatefulTargetBoxState {
  lastDroppedColor: any | null;
}
export const Dustbin: FC<{ textProps: string }> = ({ textProps }) => {
  const [lastDroppedColor, setLastDroppedColor] = useState<any>(null);
  const handleDrop = useCallback(
    (color: any) => setLastDroppedColor(color),
    []
  );

  return (
    <TargetBox
      text={textProps}
      lastDroppedColor={lastDroppedColor as any}
      onDrop={handleDrop}
    />
  );
};
