import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_9kfxv9l",
      "template_bfokfbk",
      e.target,
      "user_H3LN1BxuZvQeFF2kKgF0K"
    )
    .then(
      (result) => {
        alert("Message sent successfully !");
        e.target.reset();
      },
      (error) => {
        alert(error.text);
      }
    );
}

function ContactForm() {
  return (
    <div className="lg:w-1/2 w-9/10 m-auto content-center">
      <div className="px-4 lg:text-center sm:px-0 mb-4">
        <div className="flex">
          <div className="h-1 w-1/4 bg-gradient-to-l from-indigo-500 to-pink-400 m-auto dark:bg-gray-50 rounded-full"></div>
          <h3 className="mt-2 text-xl leading-8 mb-2 font-bold tracking-wide text-gray-900 dark:text-white uppercase">
            Contact me
          </h3>
          <div className="h-1 w-1/4 bg-gradient-to-r from-indigo-500 to-pink-400 m-auto dark:bg-gray-50 rounded-full"></div>
        </div>
        <p className="mt-1 text-lg text-center text-gray-500 lg:mx-auto dark:text-gray-400">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form id="contactForm" onSubmit={sendEmail}>
          <div className="overflow-hidden rounded-md">
            <div className="p-6 bg-gray-100 dark:bg-gray-700 dark:text-gray-50 space-y-3">
              <div className="grid grid-cols-6 gap-x-6 gap-y-2 ">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="mt-1 border border-transparent focus:outline-none focus:ring-2 
                      focus:ring-indigo-600 focus:border-transparent py-3 block w-full h-1/2
                       bg-white dark:bg-gray-800 shadow-md px-1 sm:text-sm rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 border border-transparent focus:outline-none focus:ring-2 
                      focus:ring-indigo-600 focus:border-transparent py-3 block w-full h-1/2
                       bg-white dark:bg-gray-800 shadow-md px-1 sm:text-sm rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email_address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  className="mt-1 border border-transparent focus:outline-none focus:ring-2 
                      focus:ring-indigo-600 focus:border-transparent py-3 block w-full h-1/2
                       bg-white dark:bg-gray-800 shadow-md px-1 sm:text-sm rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-50"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="message"
                    rows="3"
                    className="mt-1 border border-transparent focus:outline-none focus:ring-2 
                      focus:ring-indigo-600 focus:border-transparent p-2 block w-full h-1/2
                       bg-white dark:bg-gray-800 shadow-md px-1 sm:text-sm rounded-md"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 
                    shadow-md text-sm font-medium rounded-md text-white
                    bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function TestimonialForm() {
  return (
    <div className="md:col-span-1">
      <div className="px-4 text-center sm:px-0 mb-6">
        <h3 className="mt-2 text-2xl leading-8 mb-2 font-extrabold tracking-tight text-gray-900 dark:text-white">
          Leave a comment
        </h3>
        <p className="mt-1 text-lg text-gray-500 lg:mx-auto dark:text-gray-400">
          Your comment will be displayed in the reviews section.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="overflow-hidden rounded-md">
            <div className="p-6 bg-gray-100 dark:bg-gray-700 dark:text-gray-50 space-y-3">
              <div className="grid grid-cols-6 gap-x-6 gap-y-2">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="mt-1 px-1 py-0.5 block ring-2 ring-gray-300 dark:ring-gray-600
                      dark:bg-gray-700 bg-gray-100 w-full sm:text-sm rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 ring-2 ring-gray-300 dark:ring-gray-600 px-1 py-0.5 block 
                      dark:bg-gray-700 bg-gray-100 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="py-2">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-50"
                >
                  Comment
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    className="p-2 mt-1 ring-2 ring-gray-300 dark:ring-gray-600
                      dark:bg-gray-700 bg-gray-100 block w-full sm:text-sm rounded-md"
                  ></textarea>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className=" justify-center py-2 px-4 ring-2 ring-indigo-500 dark:ring-indigo-700 shadow-sm 
                    text-sm font-medium rounded-md text-gray-800 dark:text-white
                    focus:outline-none hover:bg-indigo-500 dark:hover:bg-indigo-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-screen lg:min-h-screen md:h-auto px-4 lg:px-8 py-10
      grid content-center gap-x-8 gap-y-10 
      bg-gray-100 dark:bg-gray-700"
    >
      <ContactForm />
    </div>
  );
}
