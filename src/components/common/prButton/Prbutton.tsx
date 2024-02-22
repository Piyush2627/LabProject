import React from "react";

interface Tomyprops {
  buttontext: string;
}
export default function Prbutton({ buttontext }: Tomyprops) {
  return (
    <div>
      <button>{buttontext}</button>
    </div>
  );
}
