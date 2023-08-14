import CardExperience from "./CardExperience";

function ExperienceSection() {
  return (
    <section className="bg-blue-dark  text-white ">
      <div className="h-full min-h-[90vh] flex flex-col  sm:flex sm:flex-row relative p-5 container-default">
        <div className="sm:w-1/3 flex items-center justify-center font-bold text-2xl mt-10">
          WORK EXPERIENCE IN TECH AND DEVELOPMENT
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          <CardExperience
            title="FullStack Web Developer in JalaSoft"
            dates="2022-07-01 to 2023-07-10"
            description="I was in a full stack specialitation in Jalasoft, I used technologies like python, react, git and methologies like scrum
            also I build an api rest using FastApi and I connect react services with third party services
            as Keycloak. I used docker to integrate the application"
          />
          <CardExperience
            title="First place in Hackathon datos abiertos Panama"
            dates="2022-01-15 to 2022-06-01"
            description="In MaxiaLatam. I was a junior developer using techonologis as
            react, php, mysql. I was working on two big softwares to public
            clinics, I did work with technologies as apache kafka for data
            analisys"
          />
          <CardExperience
            title="Software development Junior on LoanMate"
            dates="2020-12-15 to 2022-01-15 "
            description="In LoanMate I was in charge of carrying out the implementation
            of new modules to the loan administration system, using
            technologies such as RoR, PostgreSQL, perform the implementation
            of new mockups in the graphical interface of the application. In
            another period of employment I had the possibility of use Flask
            and make Lambda functions using AWS for the creation of Cron
            Jobs."
          />

          <CardExperience
            title="First place in Hackathon datos abiertos Panama"
            dates="2019-08-12"
            description="I was in charge of the Backend development of the system
            Ecopunto Panama, a venture carried out in the Technological
            University of Panama together with Maxia Latam, create the apis
            system and design the database. I used some backend technologies
            as php and mysql, bootstrap and js."
          />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
