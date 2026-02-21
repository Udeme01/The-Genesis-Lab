import * as Yup from "yup";

// form schema

export const formSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First name is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .transform((value) => value.replace(/\s+/g, ""))
    .matches(/^(\+?\d{1,3})?\d{10,14}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  gender: Yup.string().required("Please select your gender"),
  course: Yup.string().required("Please select a course"),
  experience: Yup.string().required("Please select your experience level"),
});
