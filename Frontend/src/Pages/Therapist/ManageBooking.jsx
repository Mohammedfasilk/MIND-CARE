import React, { useState, useEffect } from "react";
import Day from "../../Component/Therapist/Day";
import Slot from "../../Component/Therapist/Slot";

function ManageBooking() {
  //date
  const [dates, setDates] = useState([]);
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const today = new Date();
    const newDates = [];

    for (let i = 0; i <= 6; i++) {
      const getday = new Date();
      getday.setDate(today.getDate() + i);
      const futureDate = today.getDate() + i;

      newDates.push({
        day: weekday[getday.getDay()],
        date: futureDate,
      });
    }

    setDates(newDates);
  }, []);
  //date

  //slot
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(weekday[today.getDay()]);
  const [slot, setSlot] = useState("");
  const [allSlots, setAllslots] = useState({});

  const handleDate = (day) => setSelectedDay(day);

  const addSlot = (slot) => {
    if (slot) {
      setAllslots((prevSlots) => {
        const dayKey = selectedDay;

        return {                                                                          //add slte
          ...allSlots,
          [dayKey]: [...(prevSlots[dayKey] || []), slot],
        };
      });
    }
    setSlot("");
  };

  const removeSlot = (slotToRemove) => {
    setAllslots((prevSlots) => {
      const dayKey = selectedDay;                                                   //remove slot
      return {
        ...prevSlots,
        [dayKey]: prevSlots[dayKey].filter((s) => s !== slotToRemove),
      };
    });
  };

  const formatTimeTo12Hour = (time) => {
    if (!time) return "";
    let [hours, minutes] = time.split(":");
    let period = "AM";

    hours = parseInt(hours, 10);
    if (hours >= 12) {
      period = "PM";
      if (hours > 12) hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    return `${hours}:${minutes} ${period}`;
  };
  //slot

  return (
    <main className="pt-20 min-h-screen">
      <div className="flex justify-evenly py-8">
        {dates.map((date, index) => (
          <Day
            key={index}
            day={date.day}
            date={date.date}
            handleDate={handleDate}
            selected={selectedDay}
          />
        ))}
      </div>

      <div className="bg-gray-100 p-5 min-h-screen">
        <div>
          <div className="flex justify-center py-8">
            <input
              className="border border-black w-1/3"
              type="time"
              placeholder="hrs:mins"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" && addSlot(formatTimeTo12Hour(slot));
              }}
            />
            <button
              className="border border-black ml-5"
              onClick={() => addSlot(formatTimeTo12Hour(slot))}
            >
              Add
            </button>
          </div>

          <div className="flex justify-center">
            {allSlots[selectedDay] ? (
              <div className="grid grid-rows-1 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-16">
                {(allSlots[selectedDay] || []).map((slots, index) => (
                  <Slot key={index} time={slots} removeSlot={removeSlot} />
                ))}
              </div>
            ) : (
              <div>
                <h1 className="text-xl text-gray-500 italic font-light">
                  No Slots Found
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ManageBooking;
