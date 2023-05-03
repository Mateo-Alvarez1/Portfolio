import React, { useEffect, useState } from "react";

import "./PointerCursor.css";
export const PointerCusor = () => {

  const [cords, setCords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    
    const onHandleMove = (event) => {
      const { pageX, pageY } = event;
      setCords({ x: pageX, y: pageY });
    };

      window.addEventListener("pointermove", onHandleMove);
  
  
  }, []);

  

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "var(--blue-color-soft-opacity)",
          border: "2px solid",
          borderColor: "var(--blue-color-soft)",
          borderRadius: "50%",
          opacity: 0.7,
          pointerEvents: "none",
          left: -10, //-20
          top: -10, //-20
          width: 20,
          height: 20,
          transform: `translate(${cords.x}px, ${cords.y}px)`,
        }}
      />
    </>
  );
};
