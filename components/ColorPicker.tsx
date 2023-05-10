import { COLORS } from "@shared/consts.ts";

export default function ColorPicker() {
  const createHandleClick = (color: string) => () => {
    console.log(color);
  };

  return (
    <div class="flex gap-8 justify-center">
      <div class={`grid grid-cols-${COLORS.length} gap-x-2`}>
        {COLORS.map((color) => (
          <button
            class={`w-8 h-8 border bg-[${color}]`}
            onClick={createHandleClick(color)}
          />
        ))}
      </div>
    </div>
  );
}
