import { useEffect, useState } from "react";

function useTimer(initialTime) {
  const [timer, setTimer] = useState(initialTime);
  useEffect(() => {
    let time = setInterval(() => setTimer(Date.now()), 1000);
    return () => {
      clearInterval(time);
    };
  }, []);
  const getDayTime = () => new Date(timer).toLocaleTimeString("ko-KR");
  const getDayName = () =>
    new Date(timer).toLocaleDateString("ko-KR", { weekday: "long" });
  const getDate = () =>
    new Date(timer).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return [getDayTime, getDayName, getDate];
}

export default useTimer;
