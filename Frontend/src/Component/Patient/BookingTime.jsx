import React from "react";

function BookingTime() {
  return (
    <div className="flex items-center bg-white/85 py-16 px-10 space-y-5 md:w-3/4 rounded-lg shadow-2xl shadow-black/70 border">
      <div className="grid grid-rows-1 grid-cols-2 text-green-600 font-bold sm:grid-cols-4 w-full gap-5 lg:gap-16">
        <button className="border-[3px] px-3 rounded border-green-500">
          8:00 AM
        </button>
        <button className="border-[3px] px-3 rounded border-green-500">
          8:00 AM
        </button>
        <button className="border-[3px] px-3 rounded border-green-500">
          8:00 AM
        </button>
        <button className="border-[3px] px-3 rounded border-green-500">
          8:00 AM
        </button>
      </div>
    </div>
  );
}

export default BookingTime;
