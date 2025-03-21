import React, { useEffect } from "react";
import LibraryCard from "../../Component/Patient/LibraryCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1_1 from '../../assets/Patient/pexels-mikhail-nilov-6894013.jpg'
import img1_2 from '../../assets/Patient/pexels-olly-948875.jpg'
import img1_3 from '../../assets/Patient/pexels-fauxels-3228845.jpg'

import img2_1 from '../../assets/Patient/pexels-liza-summer-6383267.jpg'
import img2_2 from '../../assets/Patient/pexels-karolina-grabowska-5979728.jpg'
import img2_3 from '../../assets/Patient/pexels-sofia-alejandra-946049-3007355.jpg'
import img2_4 from '../../assets/Patient/pexels-olly-948875.jpg'

function Patient_Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <main className="overflow-hidden">
        <section className="min-h-screen xl:flex justify-evenly items-center w-full pt-20 xl:pt-8 bg-[#E9E9E9]">
          <motion.div
            initial={{ opacity: 0.6, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8 justify-center p-5 h-full"
          >
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-center">
              Your Mental Health Matters,
              <br />
              Let’s Prioritize It Together!
            </h1>
            <p className="font-thin text-center text-md md:text-xl">
              Get the right mental health support.
              <br />
              Find the therapist who is right for you.
            </p>
            <div className="md:animate-bounce">
              <a
                onClick={() => navigate("/user/therapist")}
                className="bg-[#17A39C] p-3 px-5 rounded text-white font-semibold shadow-md shadow-black/50 cursor-pointer"
              >
                Find a Therapist
              </a>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0.6, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 grid-rows-2 px-5 py-5 lg:py-28 gap-3 min-h-[25rem] lg:h-screen w-full"
            >
              <div
                style={{
                  backgroundImage: `url(${img1_1})`,
                }}
                className="xl:min-w-[350px] bg-cover rounded-xl bg-center row-span-2"
              ></div>
              <div
                style={{
                  backgroundImage: `url(${img1_2})`,
                }}
                className="min-w-[100px] bg-cover rounded-xl bg-center"
              ></div>
              <div
                style={{
                  backgroundImage: `url(${img1_3})`,
                }}
                className="min-w-[100px]  bg-cover rounded-xl bg-center"
              ></div>
            </motion.div>
          </div>
        </section>
      <section className="py-10 flex flex-col items-center">
        <div className="text-center w-[80%] space-y-5">
          <h1 className="text-lg sm:text-4xl font-bold">
            Find Mental Health Therapists by Expertise
          </h1>
          <p className="font-thin text-center text-base md:text-lg">
            Mental health care is unique to each person. Our network helps you
            find therapists specializing in various areas, including mood
            disorders, stress management, trauma recovery, and substance use. A
            specialized therapist can provide targeted support and effective
            treatment approaches to best address your needs.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-x-40 py-20"
        >
          <div className="bg-[#E4FADE] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Chronic Pain</h3>
          </div>
          <div className="bg-[#F9FAC8] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Trauma</h3>
          </div>
          <div className="bg-[#F8E9D6] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Sexual Abuse</h3>
          </div>
          <div className="bg-[#CFDCFD] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Addiction</h3>
          </div>
          <div className="bg-[#E39A9D] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Anxiety</h3>
          </div>
          <div className="bg-[#F599F7] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Depression</h3>
          </div>
          <div className="bg-[#8CDAE1] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Stress</h3>
          </div>
          <div className="bg-[#F0B198] rounded text-center">
            <h3 className="px-5 py-3 font-bold">Relationship</h3>
          </div>
        </motion.div>

        <section className="grid grid-cols-3 grid-rows-2 min-h-[250px] sm:[300px] md:h-[350px] lg:h-[500px] gap-3 w-full px-2 lg:px-20">
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundImage:
                `url(${img2_1})`,
            }}
            className=" bg-cover bg-center rounded-xl  row-span-2"
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundImage:
                `url(${img2_2})`,
            }}
            className=" bg-cover bg-center rounded-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundImage:
                `url(${img2_3})`,
            }}
            className=" bg-cover bg-center rounded-xl  row-span-2"
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundImage:
                `url(${img2_4})`,
            }}
            className=" bg-cover bg-center rounded-xl "
          ></motion.div>
        </section>
      </section>

      <section className="flex flex-col items-center px-5 py-10">
        <div className="flex flex-col items-center p-5 space-y-5">
          <h1 className="text-lg sm:text-4xl font-bold">
            Mental Health Library
          </h1>
          <p className="font-thin text-center text-base md:text-lg">
            Explore our comprehensive library of accurate mental health
            information.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
          <LibraryCard />
        </div>
        <div className="py-10">
          <button onClick={() => navigate("/Library")}>
            View Library{" "}
            <i className="bi bi-arrow-right align-middle text-lg"></i>
          </button>
        </div>
      </section>

      <section className="flex items-center justify-center h-[50vh]">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center w-fit p-5"
          >
            <h1 className="text-lg sm:text-4xl font-bold">Why Choose Us?</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:w-[50%] p-5"
          >
            <p className="font-thin text-center text-base md:text-lg">
              Our approach centers on treating people with the same kindness and
              respect that we value for ourselves. We understand mental health
              challenges firsthand and support your pursuit of well-being with
              compassion. Whether it’s connecting you with the right therapist
              or supporting you through difficult times, we embrace you as part
              of our community.
            </p>
          </motion.div>
        </div>
      </section>
      </main>
    </>
  );
}

export default Patient_Home;
