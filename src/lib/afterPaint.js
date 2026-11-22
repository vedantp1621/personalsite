// Give the loading screen a frame to paint before starting expensive work.
export function afterPaint(callback) {
  let timer;
  const frame = requestAnimationFrame(() => {
    timer = setTimeout(callback, 0);
  });
  return () => {
    cancelAnimationFrame(frame);
    clearTimeout(timer);
  };
}
