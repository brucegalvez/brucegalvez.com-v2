import PropTypes from "prop-types";

const LangButtons = ({ setLanguage }) => (
  <div
    className="flex flex-col fixed z-20"
    style={{ right: "1rem", bottom: 0 }}
  >
    {["es", "en"].map((option) => (
      <button
        type="button"
        className="rounded-full text-xs uppercase 
        text-pink-500 border-pink-500 border-2
        hover:bg-pink-500 hover:text-gray-900 transform duration-200
        h-8 w-8 mb-4 flex items-center justify-center"
        key={option}
        onClick={() => setLanguage(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

LangButtons.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

export default LangButtons;
