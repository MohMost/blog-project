import Image from "next/image";
import Overlay from "@/components/ui/Overlay";
import Button from "@/components/ui/Button";
import Map from "@/components/ui/Map";

const page = () => {
  return (
    <div>
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/contact.jpg"
          fill
          alt="contact image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          Contact Us
        </h1>
      </div>

      <div className="p-10 leading-8 text-lg mt-10 relative max-w-7xl m-auto rouded-lg text-center">
        <h1 className="text-4xl font-extrabold w-full text-center uppercase text-secondary mb-10">
          Let's Discuss
        </h1>

        <form className="flex flex-col w-full gap-5">
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Name"
              className="px-1 pt-3 border-b-2 border-secondary/50 w-full text-gray-900  placeholder:text-secondary/50 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-1 pt-3 border-b-2 border-secondary/50 w-full text-gray-900  placeholder:text-secondary/50 outline-none"
            />
          </div>
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Subject"
              className="px-1 pt-3 border-b-2 border-secondary/50 w-full text-gray-900  placeholder:text-secondary/50 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="px-1 pt-3 border-b-2 border-secondary/50 w-full text-gray-900  placeholder:text-secondary/50 outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={8}
            className="px-1 pt-3 border-b-2 border-secondary/50 w-full text-gray-900  placeholder:text-secondary/50 outline-none"
          />
          <div className="flex justify-center">
            <Button aria="submit contact form" text="Submit" />
          </div>
        </form>
      </div>
      <Map />
    </div>
  );
};

export default page;
