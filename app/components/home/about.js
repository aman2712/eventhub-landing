import classes from "@/app/styles/home/about.module.css";
import { BsCalendar4Event } from "react-icons/bs";
import { GiSellCard } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GrSupport } from "react-icons/gr";

const services = [
  {
    icon: <BsCalendar4Event className={classes.icon} />,
    title: "Event Planning",
    content:
      "Our expert team meticulously plans every detail of your event, from initial concept to final execution. We handle venue selection, vendor coordination, scheduling, and more to ensure a flawless event experience.",
  },
  {
    icon: <GiSellCard className={classes.icon} />,
    title: "Vendor Management",
    content:
      "We manage all vendor relationships, negotiating contracts and coordinating logistics to ensure that everything runs smoothly. Our extensive network of trusted vendors guarantees quality service and competitive pricing.",
  },
  {
    icon: <MdOutlineEmojiPeople className={classes.icon} />,
    title: "Guest Coordination",
    content:
      "From invitations to RSVPs, we handle all aspects of guest coordination. We ensure clear communication with your attendees and provide support for special requests, making sure every guest feels welcomed and valued.",
  },
  {
    icon: <GrSupport className={classes.icon} />,
    title: "On-Site Support",
    content:
      "Our dedicated team provides on-site support during your event to handle any last-minute changes and ensure everything goes as planned. We oversee setup, manage the event flow, and troubleshoot any issues.",
  },
];

const About = () => {
  return (
    <div className={classes.about}>
      <div className="section-header">
        <h5>WHAT WE DO</h5>
        <h1>What We Offer You</h1>
      </div>
      <div className={classes.cards}>
        {services.map((item, index) => (
          <div className={`${classes.card} autoShow`} key={index}>
            {item.icon}
            <h3 className={classes.cardTitle}>{item.title}</h3>
            <p className={classes.cardContent}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
