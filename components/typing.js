import React, { useEffect, useRef } from "react";
import words from "./words";
import Typed from "typed.js";

export default function Typing() {
    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: words,
        typeSpeed: 150,
        backSpeed: 50,
        loop: true,
        cursorChar: "|",
      };
      
      const typed = new Typed(typedRef.current, options);
      
      return () => {
        typed.destroy();
      };
    }, []);
    
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={typedRef}
        />
      </>
    );
}