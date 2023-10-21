import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Properties({ title, ...rest }) {
  return (
    <Box shadow className="properies">
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}
function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkIn_instructions,
}) {
  return (
    <ul className="properties__list">
      <ListItem title="Правила дому">
        <span>{house_rules}</span>
      </ListItem>
      <ListItem title="Політика скасування">
        <span>{cancellation_policy}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{local_transportation}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        <span>{host_languages}</span>
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">
        <span>{special_offers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{checkIn_instructions}</span>
      </ListItem>
    </ul>
  );
}
