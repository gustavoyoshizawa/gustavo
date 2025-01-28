import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Title from "./title";
import Subtitle from "./Subtitle";
import Text from "./Text";

const Jobs = () => {
  const { t } = useTranslation();
  const roles = t("experience.roles", { returnObjects: true });

  return (
    <section>
      <ul className="listExp">
        {roles.map((role, index) => (
          <li key={index}>
            <Title text={role.name} level={2} className="titleExp" />
            <Subtitle text={role.nivel} />
            <Text>{role.descricao}</Text>
            <Subtitle text={role.periodo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Jobs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nivel: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      periodo: PropTypes.string.isRequired,
    })
  ),
};

export default Jobs;
