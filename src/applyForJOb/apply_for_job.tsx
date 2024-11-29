import { Field, Form, Formik, FormikHelpers } from "formik";
import Wrapper from "../components/wrapper";
import { useRef, useEffect } from "react";
import Container from "../components/container";
import animate from "../utils/animate";
import FieldError from "../components/field_error";
import job from "../assets/job.svg";

interface FormData {
  fullName: string;
  email: string;
  post: string;
  address: string;
  gender: string;
  date: string;
  sop: File | string;
  qulaification: File | string;
  expLetter: File | string;
  expCertificate: File | string;
  additionalFile: File | string;
  aboutYourself: string;
}

const validate = (values: FormData) => {
  const errors: Partial<FormData> = {};

  if (!values.fullName) {
    errors.fullName = "Please enter a name";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.post) {
    errors.post = "Please enter a post";
  }

  if (!values.address) {
    errors.address = "Please enter address";
  }

  if (!values.gender) {
    errors.gender = "Please select a gender";
  }

  if (!values.date) {
    errors.date = "Date is required";
  } else if (!/^\d{4}-\d{2}-\d{2}$/i.test(values.date)) {
    errors.date = "Invalid date format (YYYY-MM-DD)";
  }

  if (!values.sop) {
    errors.sop = "Please upload your sop as PDF Format";
  }
  if (!values.qulaification) {
    errors.qulaification = "Please upload your qualification as PDF Format";
  }
  if (!values.expLetter) {
    errors.expLetter = "Please upload your Experience letter as PDF Format";
  }
  if (!values.expCertificate) {
    errors.expCertificate = "Please upload your Experience Certificate as PDF Format";
  }

  return errors;
};

export default function ApplyForJob() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    if (containerRef.current)
      return animate(containerRef.current, "animate-zoomIn");
  }, []);

  const handleSubmit = (
    _: FormData,
    { setSubmitting }: FormikHelpers<FormData>
  ) => {
    // Add additional logic for form submission if needed
    setSubmitting(false);
  };

  const professions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Mobile App Developer",
    "Game Developer",
  ];


  return (
    <Container>
      <Wrapper className="flex flex-col">
        <div
          ref={containerRef}
          className="flex flex-col gap-3 justify-center items-center"
        >
            <img  src={job} height={"100px"} width={"100px"}/>
          <div className="text-cred text-3xl font-extrabold">
            Apply For IT Job
          </div>
          <p className="text-secondary">
            Fill up below form and send to apply for job
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col gap-4">
          <div className="flex-1">
            <Formik<FormData>
              initialValues={{
                fullName: "",
                email: "",
                post: "",
                address: "",
                gender: "",
                date: "",
                sop: "",
                qulaification: "",
                expLetter: "",
                expCertificate: "",
                additionalFile: "",
                aboutYourself: "",
              }}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ errors }) => (
                <Form className="mx-auto mt-8 uppercase">
                  <div className="grid grid-cols-1 gap-[2rem] sm:grid-cols-2">
                    {/* Full Name Field */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Full name
                      </label>
                      <Field
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Your full name"
                        className="block w-full mt-2.5 border-0 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                      />
                      {errors.fullName && (
                        <FieldError errorText={errors.fullName} />
                      )}
                    </div>
                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        className={`block w-full border-0 mt-2.5 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                      {/* Show error message only if there is an error */}
                      {errors.email && (
                        <FieldError errorText={errors.email} />
                      )}
                    </div>
                    {/* Address Field */}
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Address
                      </label>
                      <Field
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Your address"
                        className={`block w-full border-0 mt-2.5 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                      {/* Show error message only if there is an error */}
                      {errors.address && (
                        <FieldError errorText={errors.address} />
                      )}
                    </div>
                    {/* Gender Field */}
                    <div>
                      <label
                        htmlFor="gender"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Select Gender
                      </label>
                      <Field
                        as="select"
                        id="gender"
                        name="gender"
                        className={`block mt-2.5 w-full border-0 px-3.5 py-2 bg-white text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      >
                        <option
                          value=""
                          disabled
                          defaultValue={"Select a gender"}
                        >
                          Select a gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Field>
                      {/* Show error message only if there is an error */}
                      {errors.gender && (
                         <FieldError errorText={errors.gender} />
                      )}
                    </div>
                    {/* Post Field */}
                    <div>
                      <label
                        htmlFor="post"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Post
                      </label>
                      <Field
                        as="select"
                        id="post"
                        name="post"
                        className={`block w-full border-0 mt-2.5 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      >
                        <option
                          value=""
                          disabled
                          defaultValue={"Select a POST"}>Select a post</option>
                          {professions.map((profession: string, index: number) => {
                          return <option key={index}>{profession}</option>;
                          })}

                      </Field>
                      {/* Show error message only if there is an error */}
                      {errors.post && (
                        <FieldError errorText={errors.post} />
                      )}
                    </div>
                    {/* Date Field */}
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Date
                      </label>
                      <Field
                        type="text"
                        id="date"
                        name="date"
                        placeholder="YYYY-MM-DD"
                        className={`block mt-2.5 w-full border-0 px-3.5 py-2 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                      {/* Show error message only if there is an error */}
                      {errors.date && (
                        <FieldError errorText={errors.date} />
                      )}
                    </div>
                    {/* SOP Field */}
                    <div>
                      <label
                        htmlFor="sop"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Upload Your SOP (pdf)
                      </label>
                      <Field
                        type="file"
                        id="sop"
                        name="sop"
                        accept="application/pdf"
                        placeholder="SOP"
                        className={`block mt-2.5 w-full border-0 px-3.5 py-2 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                      {/* Show error message only if there is an error */}
                      {errors.sop && (
                        <FieldError errorText={errors.sop} />
                      )}
                    </div>
                    {/* Qulification Field */}
                    <div>
                      <label
                        htmlFor="qualifiaction"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Upload Your Qualification (pdf)
                      </label>
                      <Field
                        type="file"
                        id="qualification"
                        name="qualification"
                        accept="application/pdf"
                        placeholder="Qualification"
                        className={`block mt-2.5 w-full border-0 px-3.5 py-2 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                      {/* Show error message only if there is an error */}
                      {errors.qulaification && (
                        <FieldError errorText={errors.qulaification} />
                      )}
                    </div>
                    {/* Experience letter */}
                    <div>
                      <label
                        htmlFor="cv"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Upload Your Experience Letter (pdf)
                      </label>
                      <Field
                        type="file"
                        id="expLetter"
                        name="expLetter"
                        accept="application/pdf"
                        placeholder="expLetter"
                        className={`block mt-2.5 w-full border-0 px-3.5 py-2 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                      {/* Show error message only if there is an error */}
                      {errors.expLetter && (
                        <FieldError errorText={errors.expLetter} />
                      )}
                    </div>
                    {/* Experience certificate */}
                    <div>
                      <label
                        htmlFor="cv"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Upload Your Experience Certificate (pdf)
                      </label>
                      <Field
                        type="file"
                        id="expCertificate"
                        name="expCertificate"
                        accept="application/pdf"
                        placeholder="expCertificate"
                        className={`block mt-2.5 w-full border-0 px-3.5 py-2 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                      {/* Show error message only if there is an error */}
                      {errors.expCertificate && (
                        <FieldError errorText={errors.expCertificate} />
                      )}
                    </div>
                    {/* Additional File Field */}
                    <div>
                      <label
                        htmlFor="additionalFile"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Additional File (optional) (PDF)
                      </label>
                      <Field
                        type="file"
                        id="additionalFile"
                        name="additionalFile"
                        accept="application/pdf"
                        placeholder="Additional File"
                        multiple
                        className={`block mt-2.5 w-full border-0 px-3.5 py-2 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6`}
                      />
                    </div>

                    {/* Special Request Field */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="aboutYourself"
                        className="block text-sm font-semibold leading-6 text-secondary"
                      >
                        Tell About Yourself
                      </label>
                      <Field
                        type="text"
                        id="aboutYourself"
                        name="aboutYourself"
                        placeholder="About yourself here"
                        className="block w-full h-16 border-0 px-3.5 py-1 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {/* Submit Button */}
                    <div className="sm:col-span-2">
                      <div className="mt-1">
                        <button
                          type="submit"
                          name="Book"
                          id="Book"
                          className="block w-full border-0 px-3.5 py-3 sm:text-sm sm:leading-6 bg-cred hover:bg-secondary text-white transition-all duration-300 ease-in-out rounded-md"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
