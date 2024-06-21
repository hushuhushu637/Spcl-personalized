import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO SPCL"
              title="Best Online Education Hub"
            />
            <p>Your one-stop destination for learning and exploring...</p>
            <p>
              With changing times, educational needs are also changing. In
              ancient times, students followed the Guru in a gurukul system.
              This system provided enough space for students to form bonds with
              their Gurus. In modern times, due to Demographic hindrances and
              cutthroat competitions, there is little scope for bonds to form.
              No wonder one out of every four students in India is depressed,
              and one student commits suicide every hour.....
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
