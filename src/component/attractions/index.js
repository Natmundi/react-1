import "./index.css";
import { Fragment } from "react";

import Box from "../box";
import Heading from "../heading";

export default function Attractions({ title, list }) {
  return (
    <Box shadow className="attractions">
      <Heading border>{title}</Heading>

      <div className="attractions__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <a href={link} className="attractions__link">
      {name}
    </a>
  );
}
