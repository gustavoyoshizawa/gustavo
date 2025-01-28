import PropTypes from "prop-types";

const Subtitle = ({ text, className }) => {
  const Tag = `p`;
  return <Tag className={className}>{text}</Tag>;
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Subtitle;
