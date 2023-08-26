import React from "react";
import profile from '../images/profile.jpg'

const Home = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p style={{textAlign:"center",color:"black",fontSize:"1.5rem"}}>Hi,There</p>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>“I am Sidhant Nahak an Enthusiastic coder and a web developer.Eager to contribute to team success through
hard work,attention to detail and excellent organizational skills.Seeking a responsible
Position to explore myself more efficiently in an industry.I would be interested to
learn new technologies which will be introduced in upcoming years and contribute
my best skills to the company and I would like expand my knowldges by working
hard and learning as much as possible.  ”</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={profile}
              alt="pic"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Sidhant Nahak</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Home;
