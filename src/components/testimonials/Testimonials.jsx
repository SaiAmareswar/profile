import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "DASARI",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo vel! Quidem itaque labore natus magnam modi odio debitis impedit magni perspiciatis. Sit praesentium perspiciatis modi amet sapiente incidunt veritatis1",
  },
  {
    avatar: AVTR2,
    name: "DASARI",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo vel! Quidem itaque labore natus magnam modi odio debitis impedit magni perspiciatis. Sit praesentium perspiciatis modi amet sapiente incidunt veritatis2",
  },
  {
    avatar: AVTR3,
    name: "DASARI",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo vel! Quidem itaque labore natus magnam modi odio debitis impedit magni perspiciatis. Sit praesentium perspiciatis modi amet sapiente incidunt veritatis3",
  },
  {
    avatar: AVTR4,
    name: "DASARI",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo vel! Quidem itaque labore natus magnam modi odio debitis impedit magni perspiciatis. Sit praesentium perspiciatis modi amet sapiente incidunt veritatis4",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__continer">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article KEY={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
