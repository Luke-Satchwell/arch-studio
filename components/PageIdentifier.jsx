const PageIdentifier = ({ title }) => {
  return (
    <div className="hidden md:flex flex-col items-center gap-12 absolute left-6 lg:left-14 xl:left-16 top-0">
      <div className="w-[1px] h-[104px] bg-gray-500" />
      <p className="uppercase font-medium text-gray-500 rotate-90">{title}</p>
    </div>
  );
};
export default PageIdentifier;
