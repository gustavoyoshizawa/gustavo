import PropTypes from "prop-types";

const Cards = ({ items }) => {
  return (
    <ul className="cards">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <li
            key={item.name}
            style={{ "--technology-color": item.color }}
          >
            <p>{item.name}</p>
            {Icon ? (
              <Icon aria-hidden="true" className="technology-icon" />
            ) : (
              <img className="technology-image" src={item.src} alt={item.alt} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string,
      alt: PropTypes.string,
      icon: PropTypes.elementType,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default Cards;
