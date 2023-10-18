import PropTypes from "prop-types";

function Input({ value, onChange, placeholder }) {
  return (
    <input
      className="input input-bordered focus:outline-[#EFD372] focus:border-[#EFD372] h-11 w-full rounded mb-4"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
