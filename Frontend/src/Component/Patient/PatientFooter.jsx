import React from "react";
import { Link } from "react-router-dom";

function PatientFooter() {
  return (
    <footer className="bg-[#F8F5F5] px-10 shadow-inner shadow-neutral-150">
      <div className="border-b border-stone-300 p-10">
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
              MindCare
            </h1>
          </div>
          <div>
            <ul className="text-center lg:text-left py-5 space-y-3 text-slate-600 font-bold">
              {[
                { name: "Home", path: "/user/Dashboard" },
                { name: "Find a Therapist", path: "/user/therapist" },
                { name: "Appointments", path: "/user/Appointment" },
                { name: "Library", path: "/user/Library" },
                { name: "Complaint & Feedback", path: "/user/Feedback" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="text-center lg:text-left py-5  space-y-3 text-slate-600 font-bold">
              <li className="text-xl">Contact Us</li>
              <li>
                <i className="text-xl bi bi-telephone"></i>{" "}
                <a className="underline" href="">
                  9876543210
                </a>
              </li>
              <li>
                <i className=" text-xl bi bi-envelope-at"></i>{" "}
                <a className="underline" href="">
                  Mindcare@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-slate-600 font-bold">
              <li className="text-xl">Social Media</li>
              <li>
                <div className="flex space-x-5 text-xl">
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-whatsapp"></i>
                  <i className="bi bi-twitter-x"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5">
        <p className="text-[8px] sm:text-base">
          All Rights Reserved. Copyright © MindCare, LLC 2025
        </p>
      </div>
    </footer>
  );
}

export default PatientFooter;
