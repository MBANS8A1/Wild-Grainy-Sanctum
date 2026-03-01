import { useEffect, useRef } from "react";

export function useOutsideClick() {
  const clickRef = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (clickRef.current && !clickRef.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [close],
  );
}
