"use client";

import { useState } from "react";

function translateHexToRGB(hex: string) {
  if (!/^#[0-9A-Fa-f]+$/g.test(hex)) {
    return "Ошибка!";
  }

  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

export default function Home() {
  const [color, setColor] = useState("");

  const hexHandler = (e: any) => {
    e.preventDefault();
    if (e.target.value.length >= 7) {
      const rgbaString = translateHexToRGB(e.target.value);
      rgbaString === "Ошибка!"
        ? setColor("rgba(255, 69, 0)")
        : setColor(rgbaString);
    } else setColor("");
  };

  return (
    <div style={{ backgroundColor: `${color}` }}>
      <input type="text" onInput={(e) => hexHandler(e)} />
      <div>{color === "rgba(255, 69, 0)" ? "Ошибка!" : color}</div>
    </div>
  );
}
