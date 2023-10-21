import "./index.css";
import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

export default function ReviewList({ title, list }) {
  return (
    <div className="review__block">
      <Heading border>{title}</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest}></Item>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__line">
        <span className="review__title">{guestName}</span>
        <span className="review__rating">Рейтинг: {rating}</span>
      </div>
      <span className="review__info">{review}</span>
    </Box>
  );
}
