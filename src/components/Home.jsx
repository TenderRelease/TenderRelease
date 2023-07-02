import React from 'react'

export default function Home() {
  return (
    <div className="">
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-32">
     
      <div className="text-center">
        <h1 className="text-2xl font-bold  text-gray-900 sm:text-6xl">
         
Welcome to the Road Tenders Registration Portal!
        </h1>
        <p className="mt-6 text-lg  text-gray-600">
        We are delighted to introduce our user-friendly website, designed to streamline the process of registering companies for road tenders. Whether you are an established construction company or a budding contractor, this platform aims to make your registration experience efficient, <strong>transparent, decentralized, immutable, secure </strong>and hassle-free.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a onClick={(e)=>{e.preventDefault();}}
            href="/register"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </a>
          <a onClick={(e)=>{e.preventDefault();}} href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    {/*  */}
    <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Why choose us?</h2>
        {/* <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
          aliquid explicabo? Excepturi, voluptate?
        </p> */}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 containers mx-auto my-16">
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.drupal.org/files/project-images/reg_confirm_email_with_button_0.png"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Easy Registration Process
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Our step-by-step registration process ensures a seamless experience for companies. Simply follow the guided instructions and provide the necessary information to complete your registration.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://it.wisc.edu/wp-content/uploads/Secure-Website-900x400.jpg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Secure and Reliable
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            We prioritize the security of your data. Our robust authentication system ensures that only authorized representatives can register their companies. Your information is safeguarded using industry-standard security protocols.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.thoughtco.com/thmb/LeLKKn5JeptxHxXqOYY6rgDrI5c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-538807532-59c441cb9abed500113df68c.jpg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            User-Friendly Online Forms
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Our online forms are thoughtfully designed to capture specific information from your company. Fill in details such as company profiles, technical capabilities, past project experience, and financial information with ease.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://assets-global.website-files.com/62e17765d63bf58b55b9c94e/62fa96bdef70a18bcc7ab52f_61fc2ab789e440807ed61162_script-automation.jpeg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Automated Validation
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            To minimize errors and save time, our system incorporates automated validation checks. Ensure that the information you submit meets the specified requirements, avoiding any unnecessary delays.
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.shutterstock.com/image-photo/stay-updated-written-on-speechbubble-260nw-420981622.jpg"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Decentralized
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            sourabh batayega
            </p>
           
          </div>
          
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://www.freeiconspng.com/uploads/feedback-icon-21.png"
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Transparency and Feedback
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            We value transparency in our processes. We provide regular updates on tender evaluations and awards, ensuring that you are informed every step of the way. We also encourage you to share your feedback on the registration process and website functionality, as we are committed to continuous improvement.
            </p>
           
          </div>
          
        </div>
      </div>



  </div>

  )
}
