import { team } from "../constants";
export const OurTeam = () => {
  return (
    <section className="padding margin-x">
      <section className="max-container">
        <h1 className="relative text-3xl w-fit   before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-dark-text lg:text-5xl lg:before:-bottom-2">
          notre équipe.
        </h1>
        <div className="flex justify-evenly lg:justify-between padding flex-wrap ">
          {team.map((member) => (
            <div className="relative py-28">
              <div className=" relative bg-primary w-[300px] h-[300px] rounded-3xl">
              <img src={member.imageURL} alt={member.name} className="absolute bottom-0" />
              <div className="absolute top-full translate-y-1/2 py-3 px-8 shadow-xl rounded-xl bg-light-green-bg text-primary font-bold text-sm ring-1 ring-opacity-50 ring-primary">{member.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
