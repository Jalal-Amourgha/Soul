const Button = ({ label, icon }) => {
  return (
    <button className="gap-2 px-6 py-3 border bg-color-red rounded-full text-white text-lg">
      {label} <i className={icon}></i>
    </button>
  );
};

export default Button;
