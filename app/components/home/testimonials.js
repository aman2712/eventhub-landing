import classes from "@/app/styles/home/testimonials.module.css";
import testimonials from "@/app/utils/testimonials.json";

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <div className="section-header">
        <h5>TESTIMONIALS</h5>
        <h1>What Our Clients Say</h1>
      </div>
      <div
        className={classes.slider}
        style={{ "--quantity": `${testimonials.length}` }}
      >
        {testimonials.map((data, index) => (
          <div
            className={classes.slide}
            key={index}
            style={{ "--position": `${index}` }}
          >
            <div className={classes.upper}>
              <img src={data.image} alt={data.author} />
              <div className={classes.upperContent}>
                <h3>{data.author}</h3>
                <h6>{data.companyName}</h6>
              </div>
            </div>
            <p>{data.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
