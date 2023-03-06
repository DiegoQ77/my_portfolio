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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas commodi molestiae nostrum molestias tempora. Sapiente
                sunt eveniet recusandae impedit natus libero quam quasi vero
                officiis quas odit id, deleniti excepturi!
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-wrap mt-8 sm:mt-0">
            <div className="border-solid border-2 border-white-500 shadow-2xl w-5/6  p-5 hover:bg-blue-second hover:text-white rounded-lg">
              <h2 className="font-bold">Software development Junior</h2>
              <span className="text-xs">Date: 2019-08-12</span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas commodi molestiae nostrum molestias tempora. Sapiente
                sunt eveniet recusandae impedit natus libero quam quasi vero
                officiis quas odit id, deleniti excepturi!
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center flex-wrap mt-5">
            <div className="border-solid border-2 border-white-500 shadow-2xl w-5/6  p-5 hover:bg-blue-second hover:text-white rounded-lg">
              <h2 className="font-bold">
                First place in Hackathon datos abiertos Panama
              </h2>
              <span className="text-xs">Date: 2019-08-12</span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas commodi molestiae nostrum molestias tempora. Sapiente
                sunt eveniet recusandae impedit natus libero quam quasi vero
                officiis quas odit id, deleniti excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
