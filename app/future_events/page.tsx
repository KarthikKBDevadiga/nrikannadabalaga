'use client';
import { useState, useEffect } from 'react';

const futureEvents = [
  { title: 'Event 1', timeInSeconds: 10 },
  { title: 'Event 2', timeInSeconds: 20 },
  { title: 'Event 3', timeInSeconds: 30 },
  { title: 'Event 4', timeInSeconds: 40 },
  { title: 'Event 5', timeInSeconds: 50 },
];

const FutureEventCountdown = () => {
  const [countdowns, setCountdowns] = useState(futureEvents);

  useEffect(() => {
    const timers = countdowns.map((event) => {
      return setInterval(() => {
        setCountdowns((prevCountdowns) =>
          prevCountdowns.map((prevEvent) =>
            prevEvent.title === event.title
              ? { ...prevEvent, timeInSeconds: prevEvent.timeInSeconds - 1 }
              : prevEvent
          )
        );
      }, 1000);
    });

    return () => {
      timers.forEach((timer, index) => {
        clearInterval(timer);
      });
    };
  }, [countdowns]);

  useEffect(() => {
    const allEventsCompleted = countdowns.every((event) => event.timeInSeconds === 0);
    if (allEventsCompleted) {
      // Replace this with your desired action when all events have occurred
      alert('All future events have occurred!');
    }
  }, [countdowns]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Future Events Countdown</h1>
        <ul>
          {countdowns.map((event) => (
            <li key={event.title} className="text-xl">
              {event.title}: {event.timeInSeconds > 0 ? `Time remaining: ${event.timeInSeconds} seconds` : 'Event has occurred!'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FutureEventCountdown;


