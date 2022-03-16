import style from "./Card.module.scss";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { MathJax, MathJaxContext } from "better-react-mathjax";
export interface BoxProps {
  name: string;
}

interface DropResult {
  name: string;
}
export const Card: React.FC<BoxProps> = ({ name }) => {
  const config = {
    loader: { load: ["input/asciimath"] },
    "fast-preview": { disabled: true },
    tex2jax: { preview: "none" },
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="Box"
      style={{ ...style, opacity }}
      className={style.card}
      data-testid={`box-${name}`}
    >
      <MathJaxContext renderMode="post" config={config}>
        <MathJax>{`\`${name}\``}</MathJax>
      </MathJaxContext>
    </div>
  );
};
