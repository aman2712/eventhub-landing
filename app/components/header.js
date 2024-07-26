import classes from "@/app/styles/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.logo}>eventhub.</h1>
      <div className={classes.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
      </div>
      <button className="primary-btn">Sign Up</button>
    </nav>
  );
};

export default Header;
