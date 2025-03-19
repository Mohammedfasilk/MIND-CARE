import React, { useEffect, useState } from "react";

function Complaints() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [feedBack, setFeedback] = useState("");
  const [complaint, setComplaint] = useState("");

  const handlefeedback = () => {
    console.log(feedBack);
    feedBack === "" ? alert("empty") : alert("Feedback submitted");
    setFeedback("");
  };
  const handleComplaint = () => {
    console.log(complaint);
    complaint === "" ? alert("empty") : alert("Complaint submitted");
    setComplaint("");
  };
  return (
    <main className="pt-10 px-5 md:px-20 flex flex-col items-center bg-[#E9E9E9]">
      <section className="pt-20 md:px-20 w-full">
        <div className="py-5 font-bold text-xl sm:text-2xl">
          <h1>Feedback</h1>
        </div>
        <div>
          <textarea
            className="border border-black rounded-lg w-full h-20 p-3"
            maxLength="250"
            placeholder="Type Feedback Here....."
            value={feedBack}
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
            name="Feedback"
          ></textarea>
          <div className="flex justify-center p-5">
            <a
              onClick={handlefeedback}
              className="bg-[#17A39C] p-3 px-5 rounded text-white font-semibold shadow-md shadow-black/50 cursor-pointer"
            >
              Send Feedback
            </a>
          </div>
        </div>
      </section>
      <section className="md:px-20 w-full">
        <div className="py-5 font-bold text-xl sm:text-2xl">
          <h1>Complaint</h1>
        </div>
        <div>
          <textarea
            className="border border-black rounded-lg w-full h-20 p-3"
            placeholder="Type Complaint Here....."
            value={complaint}
            onChange={(e) => {
              setComplaint(e.target.value);
            }}
            name="Complaint"
          ></textarea>
          <div className="flex justify-center p-5">
            <a
              onClick={handleComplaint}
              className="bg-[#17A39C] p-3 px-5 rounded text-white font-semibold shadow-md shadow-black/50 cursor-pointer"
            >
              Send Complaint
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Complaints;
