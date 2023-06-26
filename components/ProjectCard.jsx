const ProjectCard = ({ title, date, bgImage }) => {
  const cardStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <article
      style={cardStyle}
      className="w-11/12 h-[240px] lg:w-[350px] lg:h-[560px] bg-black/50 bg-cover bg-center bg-no-repeat relative "
    >
      <div className="bg-black/50 h-full w-full" />
      <div className="absolute left-6 bottom-6 md:left-10 bottom:bottom-10">
        <h2 className="text-white font-bold text-[32px] leading-10">{title}</h2>
        <p className="font-semibold text-white opacity-75">{date}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
