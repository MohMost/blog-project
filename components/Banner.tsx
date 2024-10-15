import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";

const Banner: React.FC = async () => {
  const user = await getCurrentUser(); // Récupère les informations utilisateur

  return (
    <header
      className="relative flex flex-col justify-between w-full h-[90vh] bg-cover"
      style={{ backgroundColor: "#ea3f27" }}
    >
      {/* Navbar Background Top */}
      <img className="w-full z-10" src="/svgs/waves.svg" alt="Waves" />

      {/* Banner Section */}
      <div className="relative flex flex-col justify-center items-start h-screen w-[95%] mx-auto max-w-[1450px]">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-1/2">
          <h1 className="text-3xl font-semibold text-[#fff8f8] mb-3 md:text-2.5xl lg:text-6xl">
            Dash into insightful perspectives on today's topics
          </h1>
          <a
            href={user ? "/create" : "/access"} // Définition de l'URL en fonction de l'utilisateur
            className="relative inline-block mt-2 border-2 text-center text-[#fff8f8] bg-transparent border border-[#fff8f8] rounded-lg p-2.5 text-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#42240C] before:hover:scale-x-100 cursor-pointer overflow-hidden"
          >
            {user ? "Write a blog" : "Write your first blog"}
            <span className="absolute inset-0 z-[-1] bg-[#fff8f8] border-2 border-[#fff8f8] rounded-md transition-transform duration-200 ease-in-out transform scale-x-0 hover:scale-x-100"></span>
          </a>
        </div>
        <img
          className="absolute right-5 top-1/2 transform -translate-y-1/2 w-[45rem] h-auto z-0"
          src="/images/banner.png"
          alt="Artwork"
        />
      </div>

      {/* Arrow Navigation */}
      <a href="#posts" className="flex justify-center items-center z-20">
        <svg
          className="absolute bottom-3 w-12 rounded-lg animate-bounce"
          width="50"
          height="32"
          viewBox="0 0 200 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89.9141 123.338C95.4926 129.588 104.552 129.588 110.131 123.338L195.816 27.3375C201.395 21.0875 201.395 10.9375 195.816 4.6875C190.238 -1.5625 181.178 -1.5625 175.6 4.6875L100 89.3875L24.4003 4.7375C18.8218 -1.5125 9.76236 -1.5125 4.18387 4.7375C-1.39462 10.9875 -1.39462 21.1375 4.18387 27.3875L89.8695 123.388L89.9141 123.338Z"
            fill="#42240C"
          />
        </svg>
      </a>

      {/* Navbar Background Bottom */}
      <div className="relative z-10 w-full border-[0] h-1/2 bg-contain no-repeat bg-[url('/assets/backgroundsplit.png')]">
        <img className="w-full" src="/svgs/wave_bottom.svg" alt="Wave Bottom" />
        <div className="w-full h-16 bg-white"></div>
      </div>
    </header>
  );
};

export default Banner;
