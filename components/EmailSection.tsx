const EmailSection = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-8 px-4">
        <div className="flex flex-wrap items-center text-center md:text-left -mx-2">
          <div className="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0 order-1 lg:order-none">
            <h2 className="text-4xl mb-6 font-semibold font-heading">
              Keep in touch through email.
            </h2>
            <form className="w-full max-w-lg mx-auto sm:mx-0">
              <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 mb-4">
                  <input
                    className="appearance-none block w-full py-3 px-4 leading-snug text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none focus:outline-none"
                    type="text"
                    placeholder="Your email @protnmail.com.."
                  />
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded md:rounded-l-none">
                    Subscribe
                  </button>
                </div>
                <div className="w-full">
                  <p>We promise to never spam and only send alpha.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmailSection