import "./index.css";
import Heading from "../heading";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <>
      <div className="contact__form">
        <img className="contact__photo" alt="ContactPhoto" src={image} />
        <div className="contact__info">
          <Heading>Господар - {name}</Heading>
          <div className="contact__info-block">
            <span className="contact__info-value">{phone}</span>
            <span className="contact__info-value">{response_time}</span>
            <span className="contact__info-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p className="contact__description">{info}</p>
    </>
  );
}
