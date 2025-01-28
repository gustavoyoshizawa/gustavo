import PropTypes from "prop-types";

const Cards = ({ items }) => {
  return (
    <ul className="cards">
      {items.map((item) => (
        <li key={item.name}>
          <p>{item.name}</p>
          <img src={item.src} alt={item.alt} />
        </li>
      ))}
    </ul>
  );
};

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // O nome é obrigatório
      src: PropTypes.string.isRequired, // O caminho da imagem é obrigatório
      alt: PropTypes.string, // O texto alternativo da imagem é opcional
    })
  ).isRequired, // 'items' é um array obrigatório
};

export default Cards;
