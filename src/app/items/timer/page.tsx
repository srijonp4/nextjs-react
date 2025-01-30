'use client';
import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import { useState } from 'react';

const TimerPage = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [target, setTarget] = useState<Date | null>(null);
  const addTimeToDate = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    currentDate.setHours(currentDate.getHours() + hours);
    currentDate.setMinutes(currentDate.getMinutes() + minutes);
    currentDate.setSeconds(currentDate.getSeconds() + seconds);
    return currentDate;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTarget(addTimeToDate(days, hours, minutes, seconds));
  };
  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const numericValue = parseInt(value, 10) || 0;
    switch (id) {
      case 'days':
        setDays(numericValue);
        break;
      case 'hours':
        setHours(numericValue);
        break;
      case 'minutes':
        setMinutes(numericValue);
        break;
      case 'seconds':
        setSeconds(numericValue);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!target && (
        <form
          className="flex gap-2 items-center justify-center"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label htmlFor="days">Days</label>
            <input
              type="number"
              max={60}
              min={0}
              id="days"
              value={days}
              onChange={handleFormInputChange}
            />
          </div>
          <div>
            <label htmlFor="hours">hours</label>
            <input
              type="number"
              max={23}
              min={0}
              id="hours"
              value={hours}
              onChange={handleFormInputChange}
            />
          </div>
          <div>
            <label htmlFor="minutes">minutes</label>
            <input
              type="number"
              max={59}
              min={0}
              id="minutes"
              onChange={handleFormInputChange}
              value={minutes}
            />
          </div>
          <div>
            <label htmlFor="seconds">seconds</label>
            <input
              type="number"
              max={59}
              min={0}
              id="seconds"
              value={seconds}
              onChange={handleFormInputChange}
            />
          </div>
          <button>submit</button>
        </form>
      )}
      {target && <CountdownTimer targetDate={target} />}
      {target && (
        <button
          onClick={() => {
            setTarget(null);
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      )}
    </>
  );
};

export default TimerPage;
