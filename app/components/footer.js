import classes from "@/app/styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <p>eventhub.</p>
        <div className={classes.footerLinks}>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>&copy; 2024 Designed and Developed by Md Aman Khan</p>
      </div>
    </>
  );
}
