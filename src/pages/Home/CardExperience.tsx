function CardExperience({ title, dates, description }: any) {
  return (
    <div className="ml-10 p-4">
      <div className="border-solid  border-2 border-white-500 shadow-2xl w-5/6 p-5 hover:bg-blue-second hover:text-white rounded-lg mt-4 ">
        <h2 className="font-extrabold text-xl">{title}</h2>
        <span className="text-sm">Date: {dates}</span>
        <p className="text-base mt-2">{description}</p>
      </div>
    </div>
  );
}

export default CardExperience;
