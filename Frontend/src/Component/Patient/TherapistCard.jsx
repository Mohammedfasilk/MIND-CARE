import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TherapistCard({ key, obj }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col lg:flex-row items-center justify-center p-3 w-full sm:w-[90%] rounded-xl shadow-2xl shadow-neutral-400 mt-8 bg-white"
    >
      <div className="sm:flex  w-full">
        <div>
          <img
            className="h-[100px] w-[100px] sm:h-[120px] sm:w-[130px] rounded border border-neutral-500"
            src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            alt="profile"
          />
        </div>
        <div className="px-3 h-[120px] overflow-hidden w-full">
          <h1 className="font-bold text-xl">{obj.name}</h1>
          <p className="text-sm font-thin italic">Location {obj.location}</p>
          <p>Licenced at {obj.License}</p>
        </div>
      </div>
      <div className="lg:w-[350px] flex justify-center lg:justify-end lg:px-5 pt-5 lg:pt-0">
        <Link
          to="/user/booking"
          className="bg-[#17A39C] text-sm sm:text-base p-3 px-5 rounded text-white font-semibold shadow-md shadow-black/50"
        >
          Book an Appointment
        </Link>
      </div>
    </motion.div>
  );
}

export default TherapistCard;
