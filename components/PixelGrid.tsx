import { useState } from "preact/hooks";

import {
  DESKTOP_PIXEL_SIZE,
  EDITOR_HEIGHT,
  EDITOR_WIDTH,
  PIXEL_SIZE,
} from "@shared/consts.ts";

const initialTiles = Array.from(
  { length: EDITOR_WIDTH * EDITOR_HEIGHT },
  () => "#ffffff",
);

export default function PixelGrid() {
  const [tiles, updateTiles] = useState(initialTiles);

  const handleClick = (index: number) => {
    const newTiles = [...tiles];
    newTiles[index] = "#000000";
    updateTiles(newTiles);
  };

  return (
    <div
      class={`
        border border-white
        grid grid-cols-${EDITOR_WIDTH} 
        w-[${EDITOR_WIDTH * PIXEL_SIZE}px]
        h-[${EDITOR_HEIGHT * PIXEL_SIZE}px]
        sm:w-[${EDITOR_WIDTH * DESKTOP_PIXEL_SIZE}px]
        sm:h-[${EDITOR_HEIGHT * DESKTOP_PIXEL_SIZE}px]
      `}
    >
      {tiles.map((color, index) => (
        <div
          class={`
            w-[${PIXEL_SIZE}px] h-[${PIXEL_SIZE}px]
            sm:w-[${DESKTOP_PIXEL_SIZE}px] sm:h-[${DESKTOP_PIXEL_SIZE}px]
            bg-[${color}]
          `}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
