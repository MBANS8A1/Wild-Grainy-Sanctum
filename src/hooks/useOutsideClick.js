import { useEffect, useRef } from "react";

export function useOutsideClick(closeHandler, listenOnCapturing = true) {
  const clickRef = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (clickRef.current && !clickRef.current.contains(e.target)) {
          closeHandler();
        }
      }
      document.addEventListener("click", handleClick, listenOnCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listenOnCapturing);
    },
    [closeHandler, listenOnCapturing],
  );
}
