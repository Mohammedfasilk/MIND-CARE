import React, { useEffect, useState } from "react";
import Button from "../../Component/Common/Button";
import useScrolltoTop from "../../Custom Hooks/useScrolltoTop";

function Complaints() {
  useScrolltoTop();

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
            <Button handleClick={handlefeedback}>Send Feedback</Button>
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
            <Button handleClick={handleComplaint}>Send Complaint</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Complaints;
