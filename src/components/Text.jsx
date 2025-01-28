import PropTypes from "prop-types";

const Text = ({ children, highlight }) => {
  return <p className={`text ${highlight ? "highlight" : ""}`}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  highlight: PropTypes.bool,
};

Text.defaultProps = {
  highlight: false,
};

export default Text;
