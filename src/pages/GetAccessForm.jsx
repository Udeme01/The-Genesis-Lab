import React from "react";
import { Formik, Form } from "formik";
import IllustrationImage from "../component/IllustrationImage";
import Input from "../component/ui/Input";
import { genderOptions } from "../data/genderOptions";
import { courseOptions } from "../data/courseOptions";
import { levels } from "../data/experienceLevels";
import { Check } from "lucide-react";
import { formSchema } from "../utils/validationSchema";

const GetAccessForm = () => {
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
        setTimeout(() => {
          alert("form submitted");
          setSubmitting(false);
          resetForm();
        }, 1000);
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
              <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                formik={formik}
              />
              <Input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                formik={formik}
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                formik={formik}
              />
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                formik={formik}
              />
              <Input
                as="select"
                id="gender"
                name="gender"
                placeholder="Gender"
                options={genderOptions}
                formik={formik}
              />
              <Input
                as="select"
                id="course"
                name="course"
                placeholder="What do you want to learn?"
                options={courseOptions}
                formik={formik}
              />

              <div className="w-full mt-6">
                {/* Label */}
                <label className="block text-2xl text-green-800 mb-3 text-center font-bold uppercase tracking-tighter">
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
                        className={`flex flex-col items-center text-center gap-2 p-4 rounded-tr-4xl rounded-bl-4xl transition-all duration-500 ease-in-out hover:scale-[1.04] active:scale-[0.9] bg-green-900 text-white ${isSelected ? "outline-4 outline-green-600 relative" : ""}`}
                      >
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-green-600 absolute right-2 bottom-2 flex items-center justify-center">
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
                className="border-none outline-none bg-green-800 text-stone-100 py-4 rounded mt-8 w-full px-8 text-sm font-bold tracking-wide cursor-pointer hover:bg-green-900 duration-500 ease-in-out hover:scale-[1.04] active:scale-[0.9] rounded-tr-4xl rounded-bl-4xl"
              >
                Get Access
              </button>
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

export default GetAccessForm;
