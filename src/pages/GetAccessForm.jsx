import React from "react";
import { Formik, Form } from "formik";
import IllustrationImage from "../component/IllustrationImage";
import Input from "../component/ui/Input";
import { genderOptions } from "../data/genderOptions";
import { courseOptions } from "../data/courseOptions";
import { levels } from "../data/experienceLevels";
import { Check } from "lucide-react";
import { formSchema } from "../utils/validationSchema";
import { useNavigate } from "react-router-dom";

// supabase client
import supabase from "../lib/supabaseClient";

const GetAccessForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        course: "",
        experience: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(async () => {
          const { error } = await supabase.from("StudentOnboardList").insert({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            gender: values.gender,
            course: values.course,
            experience: values.experience,
          });

          if (!error) {
            setSubmitting(false);
            resetForm();
            navigate("/success");
          } else {
            console.log("supabase error", error);
            setSubmitting(false);
          }
        }, 3000);
      }}
    >
      {(formik) => {
        const handleSelect = (value) => {
          formik.setFieldValue("experience", value);
        };
        return (
          <Form className="relative mx-auto w-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <IllustrationImage />
            <section className="flex items-center justify-center flex-col gap-3 w-[90%] md:w-[80%] max-w-200 mx-auto my-14">
              <section className="mb-8">
                <h1 className="text-2xl md:text-3xl font-space text-center md:text-left font-semibold">
                  Join The Genesis Lab – A Practical Web Development & Design
                  Program.
                </h1>
                {/* <p className="font-manrope text-center md:text-left my-3 tracking-wider">
                  Join a learning space where you actually build, practice, and
                  grow.
                </p> */}
                <div className="flex items-center justify-start gap-2 font-manrope mt-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>

                  <p className="tracking-wide opacity-80 text-center md:text-left text-sm md:text-md">
                    A paid, hands-on training program for web developers, UI/UX designers, and graphic
                    designers who want to learn by building - not just watch tutorials.
                  </p>
                </div>
              </section>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                formik={formik}
                label="First Name"
              />
              <Input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                formik={formik}
                label="Last Name"
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                formik={formik}
                label="Email"
              />
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                formik={formik}
                label="Phone Number"
              />
              <Input
                as="select"
                id="gender"
                label="gender"
                name="gender"
                placeholder="Gender"
                options={genderOptions}
                formik={formik}
              />
              <Input
                as="select"
                id="course"
                label="course"
                name="course"
                placeholder="What do you want to learn?"
                options={courseOptions}
                formik={formik}
              />

              <div className="w-full mt-6">
                {/* Label */}
                <label className="block text-2xl text-blackish mb-3 text-center font-medium uppercase tracking-tighter font-space">
                  What's your experience level?
                </label>

                {/* Cards */}
                <div className="w-full mx-auto gap-6 flex flex-col md:grid md:grid-cols-3">
                  {levels.map((level) => {
                    const isSelected = formik.values.experience === level.value;
                    return (
                      <button
                        key={level.value}
                        type="button"
                        onClick={() => handleSelect(level.value)}
                        className={`flex flex-col items-center text-center gap-2 p-4 rounded-tr-4xl rounded-bl-4xl transition-all duration-500 ease-in-out hover:scale-[1.04] active:scale-[0.9] bg-green-900 text-white font-manrope ${isSelected ? "outline-4 outline-brandColor relative" : ""}`}
                      >
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-brandColor absolute right-2 bottom-2 flex items-center justify-center">
                            <Check size={14} />
                          </span>
                        )}
                        <span className="text-2xl">{level.emoji}</span>
                        <span className="text-sm font-bold tracking-wide">
                          {level.label}
                        </span>
                        <span className="text-xs leading-snug opacity-80">
                          {level.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {formik.errors.experience && formik.touched.experience && (
                  <p className="text-red-500 text-xs mt-2">
                    {formik.errors.experience}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className={`font-manrope border-none outline-none bg-green-800 text-stone-100 py-4 rounded mt-8 w-full px-8 text-sm font-bold tracking-wide cursor-pointer hover:bg-green-900 duration-500 ease-in-out hover:scale-[1.04] active:scale-[0.9] rounded-tr-4xl rounded-bl-4xl disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${formik.isSubmitting && "animate-bounce"}`}
              >
                {formik.isSubmitting ? "Granting Access" : "Grant Me Access"}
              </button>
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

export default GetAccessForm;
