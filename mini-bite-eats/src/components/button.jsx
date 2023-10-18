import PropTypes from "prop-types";

function Button({ label, type, onClick }) {
  return (
    <div>
      <button
        className="btn bg-[#EFD372] border-[#EFD372] text-[#274C5B] w-full font-medium rounded-xl hover:bg-[#d2b859]"
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

function ButtonBlue({ label, type, onClick }) {
  return (
    <div>
      <button
        className="btn bg-[#274C5B] border-[##274C5B] text-white w-full font-medium rounded-xl hover:bg-[#0d2731]"
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

ButtonBlue.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

function ButtonBorder({ label, type, onClick }) {
  return (
    <div>
      <button
        className="btn border-[#274C5B] text-[#274C5B] w-full font-medium rounded-xl"
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

ButtonBorder.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export { Button, ButtonBlue, ButtonBorder };
