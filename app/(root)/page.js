import classes from "@/app/styles/home.module.css";
import Banner from "../components/home/banner";
import About from "../components/home/about";
import Testimonials from "../components/home/testimonials";
import Events from "../components/home/events";
import Quote from "../components/home/quote";

export default function Home() {
  return (
    <div className={classes.home}>
      <Banner />
      <About />
      <Testimonials />
      <Events />
      <Quote />
    </div>
  );
}
