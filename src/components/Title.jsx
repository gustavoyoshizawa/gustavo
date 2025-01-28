import PropTypes from "prop-types";

const Title = ({ text, level = 1, className = "titleSection" }) => {
  const Tag = `h${level}`;
  return <Tag className={className}>{text}</Tag>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.number,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: "titleSection",
};

export default Title;
