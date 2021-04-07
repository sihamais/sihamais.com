export default function Contact() {
  return (
    <div
      id="contact"
      className="w-screen lg:min-h-screen md:h-auto px-4 lg:px-8 py-10
      grid content-center gap-x-8 gap-y-10 
      bg-gray-100 dark:bg-gray-700"
    >
      <div className="lg:w-1/2 w-4/5 m-auto content-center">
        <div className="px-4 text-center sm:px-0 mb-4">
          <h3 className="mt-2 text-2xl leading-8 mb-2 font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact me
          </h3>
          <p className="mt-1 text-lg text-gray-500 lg:mx-auto dark:text-gray-400">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="overflow-hidden rounded-md">
              <div className="p-6 bg-gray-100 dark:bg-gray-700 dark:text-gray-50 space-y-3">
                <div className="grid grid-cols-6 gap-x-6 gap-y-2 ">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autocomplete="given-name"
                      className="mt-1 ring-2 ring-gray-300 dark:ring-gray-600 py-0.5 block w-full
                       bg-gray-100 dark:bg-gray-700 shadow-sm px-1 sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autocomplete="family-name"
                      className="mt-1 ring-2 ring-gray-300 dark:ring-gray-600 py-0.5 px-1 block 
                      dark:bg-gray-700 bg-gray-100 w-full shadow-sm sm:text-sm rounded-md"
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    for="email_address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autocomplete="email"
                    className="mt-1 px-1 py-0.5 ring-2 ring-gray-300 dark:ring-gray-600 block w-full
                     dark:bg-gray-700 bg-gray-100 shadow-sm sm:text-sm rounded-md"
                  />
                </div>
                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-50"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      className="shadow-sm ring-2 ring-gray-300 dark:ring-gray-600 p-2 mt-1 
                      dark:bg-gray-700 bg-gray-100 block w-full sm:text-sm rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 
                    shadow-sm text-sm font-medium rounded-md dark:text-white text-gray-800
                    focus:outline-none ring-2 ring-indigo-500 hover:bg-indigo-500 dark:ring-indigo-700 dark:hover:bg-indigo-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="md:col-span-1">
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
                      for="first_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autocomplete="given-name"
                      className="mt-1 px-1 py-0.5 block ring-2 ring-gray-300 dark:ring-gray-600
                      dark:bg-gray-700 bg-gray-100 w-full sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-100"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autocomplete="family-name"
                      className="mt-1 ring-2 ring-gray-300 dark:ring-gray-600 px-1 py-0.5 block 
                      dark:bg-gray-700 bg-gray-100 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="py-2">
                  <label
                    for="about"
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
        </div> */}
      {/* </div> */}
    </div>
  );
}
