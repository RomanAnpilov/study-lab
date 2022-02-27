import { CSSProperties, FC, useState, useCallback, memo } from 'react'
import { useDrop, DropTargetMonitor } from 'react-dnd';
import {ItemTypes} from "../ItemTypes"

const style: CSSProperties = {
  border: '1px solid gray',
  height: '100px',
  width: '100px',
  padding: '2rem',
  textAlign: 'center',
}

export interface TargetBoxProps {
  onDrop: (item: any) => void
  lastDroppedColor?: any
}

const TargetBox: FC<TargetBoxProps> = memo(function TargetBox({
  onDrop,
  lastDroppedColor,
}) {
  const [{ isOver, draggingColor, canDrop }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BOX],
      drop(_item: any, monitor) {
        onDrop(monitor.getItem())
        return undefined
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggingColor: monitor.getItem() as {name: any},
      }),
    }),
    [onDrop],
  )
    console.log(draggingColor)
  const opacity = isOver ? 1 : 0.7
  let backgroundColor = '#fff'

  return (
    <div
      ref={drop}
      data-color={lastDroppedColor || 'none'}
      style={{ ...style, backgroundColor, opacity }}
      role="TargetBox"
    >
      <p>Drop here.</p>

      {!canDrop && lastDroppedColor && <p>Last dropped: {lastDroppedColor.name}</p>}
    </div>
  )
})

export interface StatefulTargetBoxState {
  lastDroppedColor: any | null
}
export const Dustbin: FC = (props) => {
  const [lastDroppedColor, setLastDroppedColor] = useState<any>(null)
  const handleDrop = useCallback(
    (color: any) => setLastDroppedColor(color),
    [],
  )

  return (
    <TargetBox
      {...props}
      lastDroppedColor={lastDroppedColor as any}
      onDrop={handleDrop}
    />
  )
}
