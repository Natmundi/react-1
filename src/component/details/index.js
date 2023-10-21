import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function Details({ title, ...rest }) {
  return (
    <Box shadow className="details">
      <Heading border>{title}</Heading>
      <ListProperty {...rest} />
    </Box>
  );
}
function ListProperty({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={guest}>
        <span>{guests} гості</span>
      </ListItem>
      <ListItem imageSrc={bedroom}>
        <span>{bedrooms} спальня</span>
      </ListItem>
      <ListItem imageSrc={bed}>
        <span>{beds} ліжко</span>
      </ListItem>
      <ListItem imageSrc={bath}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  );
}
