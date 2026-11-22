import { useEffect, useState } from "react";
export default function Typer({ dataText }) {
  const [text, setText] = useState(dataText[0]);
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    let timer,
      index = 0,
      count = dataText[0].length,
      deleting = true,
      stopped = false;
    const tick = () => {
      if (stopped || query?.matches) return;
      if (deleting) {
        count--;
        if (count === 0) {
          deleting = false;
          index = (index + 1) % dataText.length;
        }
      } else count++;
      setText(dataText[index].slice(0, count));
      if (!deleting && count === dataText[index].length) {
        deleting = true;
        timer = setTimeout(tick, 1500);
      } else timer = setTimeout(tick, deleting ? 35 : 110);
    };
    const restart = () => {
      clearTimeout(timer);
      setText(dataText[0]);
      index = 0;
      count = dataText[0].length;
      deleting = true;
      if (!query?.matches) timer = setTimeout(tick, 1800);
    };
    restart();
    query?.addEventListener?.("change", restart);
    return () => {
      stopped = true;
      clearTimeout(timer);
      query?.removeEventListener?.("change", restart);
    };
  }, [dataText]);
  return (
    <span className="rotating-interest">
      <span aria-hidden="true">
        {text}
        <span className="type-cursor">|</span>
      </span>
      <span className="sr-only">{dataText.join(", ")}</span>
    </span>
  );
}
