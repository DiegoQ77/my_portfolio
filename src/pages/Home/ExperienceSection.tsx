function ExperienceSection() {
  return (
    <section className="bg-blue-dark  text-white ">
      <div className="h-full min-h-[80vh] flex flex-col  sm:flex sm:flex-row relative p-5 container-default">
        <div className="sm:w-1/3 flex items-center justify-center font-bold text-2xl mt-10">
          EXPERIENCE BEFORE AND AFTER UNIVERSITY
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          <div className="flex items-center justify-center flex-wrap">
            <div className="border-solid  border-2 border-white-500 shadow-2xl w-5/6 p-5 hover:bg-blue-second hover:text-white rounded-lg mt-4">
              <h2 className="font-bold">
                First place in Hackathon datos abiertos Panama
              </h2>
              <span className="text-xs">Date: 2019-08-12</span>
              <p className="text-sm mt-2">
                I was in charge of the Backend development of the system
                Ecopunto Panama, a venture carried out in the Technological
                University of Panama together with Maxia Latam, create the apis
                system and design the database. I used some backend technologies
                as php and mysql, bootstrap and js.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-wrap mt-8 sm:mt-0">
            <div className="border-solid border-2 border-white-500 shadow-2xl w-5/6  p-5 hover:bg-blue-second hover:text-white rounded-lg">
              <h2 className="font-bold">
                Software development Junior on LoanMate
              </h2>
              <span className="text-xs">Date: 2020-12-15 to 2022-01-15 </span>
              <p className="text-sm mt-2">
                In LoanMate I was in charge of carrying out the implementation
                of new modules to the loan administration system, using
                technologies such as RoR, PostgreSQL, perform the implementation
                of new mockups in the graphical interface of the application. In
                another period of employment I had the possibility of use Flask
                and make Lambda functions using AWS for the creation of Cron
                Jobs.
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center flex-wrap mt-5">
            <div className="border-solid border-2 border-white-500 shadow-2xl w-5/6  p-5 hover:bg-blue-second hover:text-white rounded-lg">
              <h2 className="font-bold">Software Developer on Maxia Latam</h2>
              <span className="text-xs">Date: 2022-01-15 to 2022-06-01</span>
              <p className="text-sm mt-2">
                In MaxiaLatam. I was a junior developer using techonologis as
                react, php, mysql. I was working on two big softwares to public
                clinics, I did work with technologies as apache kafka for data
                analisys
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
