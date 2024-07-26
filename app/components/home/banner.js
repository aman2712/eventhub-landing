import classes from "@/app/styles/home/banner.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.content}>
        <h1 className={classes.title}>Memorable Moments Made Effortless</h1>
        <p className={classes.desc}>
          eventhub simplifies event planning so you can focus on creating
          unforgettable memories. Leave the logistics to us and have fun!
        </p>
        <button className="primary-btn">
          Explore <FaArrowRightLong />
        </button>
      </div>
      <div className={classes.bannerAnimation}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
      </div>
    </div>
  );
};

export default Banner;
