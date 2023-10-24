import PropTypes from "prop-types";

function Input({ placeholder, type, register, error, name, value, onChange }) {
  return (
    <div className="w-full mb-4 h-16">
      <input
        className="input input-bordered focus:outline-[#EFD372] focus:border-[#EFD372] h-11 w-full rounded "
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        {...(register
          ? register(name, {
              valueAsNumber: type === "number" ? true : false,
            })
          : {})}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-800">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
