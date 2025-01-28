import PropTypes from "prop-types";

const Input = ({ label, type, name, id, ...props }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} {...props} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
