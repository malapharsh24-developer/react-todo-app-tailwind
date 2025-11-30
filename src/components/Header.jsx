import { useState, useEffect } from "react";

export default function Header() {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
  <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Todo App</h2>
    <div className="text-sm sm:text-base text-gray-600">{dateTime}</div>
    <hr className="my-4 w-full" />
  </header>
  )
}
