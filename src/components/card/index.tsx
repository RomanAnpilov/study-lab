import style from "./Card.module.scss"
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../ItemTypes'
export interface BoxProps {
    name: string
  }
  
  interface DropResult {
    name: string
  }
export const Card: React.FC<BoxProps> = ({name}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { name },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult<DropResult>()
          if (item && dropResult) {
            alert(`You dropped ${item.name} into ${dropResult.name}!`)
          }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
      }))

      const opacity = isDragging ? 0.4 : 1
      return (
        <div
          ref={drag}
          role="Box"
          style={{ ...style, opacity }}
          className={style.card}
          data-testid={`box-${name}`}
        >
          {name}
        </div>
      )
}