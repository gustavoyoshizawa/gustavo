import PropTypes from "prop-types";

const Textarea = ({ label, type, name, id, ...props }) => {
  return (
    <div className="input textarea">
      <label htmlFor={id}>{label}</label>
      <textarea type={type} name={name} id={id} {...props} />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Textarea;
