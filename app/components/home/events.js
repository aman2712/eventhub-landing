import classes from "@/app/styles/home/events.module.css";
import events from "@/app/utils/events.json";
import { FaArrowRightLong } from "react-icons/fa6";

const Events = () => {
  return (
    <div className={classes.events}>
      <div className="section-header">
        <h5>EVENTS</h5>
        <h1>Explore Some Public Events</h1>
      </div>
      <div className={classes.eventsGrid}>
        {events.splice(0, 3).map((event, index) => (
          <div key={index} className={`${classes.event} autoShow`}>
            <div className={classes.eventImage}>
              <img src={event.coverImage} alt={event.title} />
            </div>
            <div className={classes.content}>
              <div className={classes.tags}>
                {event.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
              <h3>{event.title}</h3>
              <p>{event.shortDescription}</p>
              <p className={classes.creatorName}>
                Organised By {event.creatorName}
              </p>
              <button className="primary-btn">Book Your Tickets</button>
            </div>
          </div>
        ))}
      </div>
      <button className="secondary-btn">
        Explore More <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Events;
