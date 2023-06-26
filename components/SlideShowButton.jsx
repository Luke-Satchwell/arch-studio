const SlideShowButton = ({ id, isActive, handleClick }) => {
  const activeStyles = "bg-zinc-900 text-white";
  const buttonClass = `h-20 w-20 text-gray-500 bg-white hover:bg-gray-100 font-bold ${
    isActive ? `${activeStyles} disabled-hover` : ""
  }`;

  const handleButtonClick = () => {
    handleClick(id);
  };

  return (
    <button className={buttonClass} onClick={handleButtonClick}>
      0{id}
    </button>
  );
};

export default SlideShowButton;
