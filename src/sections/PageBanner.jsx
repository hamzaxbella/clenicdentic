import { contactSimple } from "../constants";
export const PageBanner = ({ imgURL, Label }) => {
  return (
    <section className="max-container mb-12">
      {/* CONTACT INFO */}
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-12 padding margin-x">
        {contactSimple.map((contact) => (
          <div
            className="flex gap-2 text-md font-normal text-gray-text md:text-lg"
            key={contact.label}
          >
            <img src={contact.icon} width={20} height={20} alt="phone" />
            <p>{contact.label}</p>
          </div>
        ))}
      </div>

      <div className="relative lg:rounded-3xl h-[30vh] lg:h-[70vh] mx-auto overflow-hidden text-center ">
        <img src={imgURL} alt="" className="w-full h-full object-cover " />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-4xl text-white font-bold z-[6]">
          {Label}
        </h1>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[5]"></div>
      </div>
    </section>
  );
};
