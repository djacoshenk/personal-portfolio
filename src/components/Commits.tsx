import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

export function Commits() {
  const [tick, setTick] = useState(0);

  const COMMITSCOL = Array(52).fill(0);
  const COMMMITSBOX = Array(7).fill(0);

  function getRandomColor() {
    const COLORS = ["bg-gray-50", "bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600"];
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  }

  useEffect(() => {
    const tickId = setInterval(() => {
      setTick(tick + 1);
    }, 2000);

    return () => clearInterval(tickId);
  }, [tick]);

  return (
    <>
      <div className="hidden w-full flex items-center justify-center py-6 overflow-x-hidden xl:flex">
        {COMMITSCOL.map(() => {
          return (
            <div className="w-min flex flex-col items-center justify-center px-1" key={uuid()}>
              {COMMMITSBOX.map(() => {
                return <div className={`h-2.5 w-2.5 my-1 rounded-sm ${getRandomColor()}`} key={uuid()}></div>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
