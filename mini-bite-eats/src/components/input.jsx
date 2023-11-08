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

function SelectField({ label, id, options, error, value, onChange }) {
  return (
    <div className="form-control  pt-4">
      <label htmlFor={id}>{label}</label>
      <select
        className="select select-bordered focus:outline-[#EFD372] focus:border-[#EFD372] h-11 w-full rounded"
        id={id}
        value={value}
        onChange={onChange}
      >
        <option></option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-400">{error.message}</span>}
    </div>
  );
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.object,
};

export { Input, SelectField };
