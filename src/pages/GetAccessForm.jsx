import React from "react";
import { Formik, Form } from "formik";
import IllustrationImage from "../component/IllustrationImage";

const courses = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Data Analysis",
  "Cybersecurity",
];

const GetAccessForm = () => {
  const inputStyles = `outline-none border border-stone-200 p-3 rounded w-full focus:border-green-700 transition-all duration-500 ease-in-out placeholder:text-stone-300`;
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        course: "",
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {}}
    >
      {(formik) => (
        <Form className="relative mx-auto min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <IllustrationImage />
          <section className="flex items-center justify-center h-[60vh] flex-col gap-3 w-[80%] mx-auto">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className={inputStyles}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className={inputStyles}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={inputStyles}
            />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              className={inputStyles}
            />
            <select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className={inputStyles}
            >
              <option value="" disabled hidden>
                Gender
              </option>
              {["male", "female"].map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            <select
              name="course"
              onChange={formik.handleChange}
              value={formik.values.course}
              className={inputStyles}
            >
              <option value="" disabled hidden>
                What do you want to learn?
              </option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="border-none outline-none bg-green-800 text-stone-100 py-4 rounded mt-8 w-full px-8 text-sm font-bold tracking-wide cursor-pointer hover:bg-green-900 duration-500 ease-in-out hover:scale-[1.04] active:scale-[0.9]"
            >
              Get Access
            </button>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default GetAccessForm;
