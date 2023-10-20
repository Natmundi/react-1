import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import animal from "./animal.svg";
import transfer from "./transfer.svg";
import conserge from "./conserge.svg";
import serviceroom from "./serviceroom.svg";
import childrenfree from "./childrenfree.svg";

export default function Amenities({ title, ...rest }) {
  return (
    <Box shadow className="amenities">
      <Heading border>{title}</Heading>
      <ListAmenities {...rest} />
    </Box>
  );
}

function ListAmenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc={pool}>
          <span>Басейн</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc={gym}>
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={wifi}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={parking}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={animal}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={transfer}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={conserge}>
          <span>Консьєрж сервіс</span>
        </ListItem>
      )}

      {hasRoomService && (
        <ListItem imageSrc={serviceroom}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={childrenfree}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}
