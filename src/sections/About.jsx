export const About = () => {
  return (
    <section className="w-full bg-light-green-bg ">
      <section className="max-container padding-x lg:px-0 padding ">
        <h1 className="relative text-3xl w-fit   before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-dark-text lg:text-5xl lg:before:-bottom-2">
          Notre mission.
        </h1>
        <div className="lg:flex">
          <p className="text-dark-text py-12 leading-8 lg:flex-1 lg:text-xl lg:leading-10">
            Chez Maroc Dentaire, notre mission dépasse la simple pratique
            dentaire ; elle consiste à cultiver des relations durables fondées
            sur la confiance et l'excellence. Guidés par un engagement à élever
            les normes de santé bucco-dentaire, nous allions expertise et
            compassion pour offrir des soins personnalisés adaptés aux besoins
            uniques de chaque patient. À chaque sourire que nous sublimons, nous
            cherchons à redéfinir l'expérience dentaire, permettant aux
            individus d'embrasser la confiance et le bien-être. Bienvenue dans
            un univers où l'innovation rencontre l'intégrité, et où votre
            parcours vers une santé dentaire optimale commence.
          </p>
          <div className="w-full flex justify-center lg:flex-1 ">
            <iframe
              className=" w-full md:max-w-[500px] rounded-2xl h-[600px] "
              src="https://www.youtube.com/embed/HOO6gf6mfqo?si=SvUcmWsViPvQdDIU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>{" "}
          </div>
        </div>
      </section>
    </section>
  );
};
