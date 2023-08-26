import React from 'react'

const About = () => {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-25 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        
        <h1 style={{fontWeight:"700"}} className='mx-auto text-center text-2xl text-black '>Ambula Technologies Private Limited</h1>
        <figure className="mt-5">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p >
              “Ambula is an App based on UHI (Unified Health Interface) popularly known as 'Ayushman Bharat Digital Mission' envisioned by our honourable Prime Minister of India which connects patients live with the unified health network across India for all healthcare needs.In Bhubaneshwar, this establishment occupies a prominent location in Rasulgarh. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Mangala Temple Road, Near Ashok Vatika, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Software Companies”
            </p>
            {/* <p>“Ambula Technologies Pvt Ltd in Rasulgarh, Bhubaneshwar is a top player in the category Software Companies in the Bhubaneshwar. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bhubaneshwar. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Bhubaneshwar, this establishment occupies a prominent location in Rasulgarh. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Mangala Temple Road, Near Ashok Vatika, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Software Companies. ”</p> */}
          </blockquote>
          <figcaption className="mt-10">
 
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
              <div className="text-gray-600 text-center">CEO Abhishek Gautam </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

 
    </>
  )
}

export default About