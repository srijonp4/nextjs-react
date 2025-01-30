import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

type CountdownTimerProps = {
  targetDate: Date;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const initialTime = targetDate.getTime() - new Date().getTime();

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setProgress(100);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);

        const progressPercentage =
          ((initialTime - difference) / initialTime) * 100;
        setProgress(progressPercentage);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      {progress < 100 ? (
        <>
          <ProgressBar value={progress} max={100} />
          <h1>TIME LEFT UNTIL TARGET</h1>
          <div style={{ display: 'flex', gap: '10px', fontSize: '1.5rem' }}>
            <span>{days}d</span>
            <span>{hours}h</span>
            <span>{minutes}m</span>
            <span>{seconds}s</span>
          </div>
        </>
      ) : (
        <div style={{ fontSize: '2rem', color: 'red' }}>Boom!🚀</div>
      )}
    </div>
  );
};

export default CountdownTimer;
