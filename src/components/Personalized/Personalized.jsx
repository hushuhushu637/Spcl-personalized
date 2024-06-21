import React from 'react';
import './Personalized.css';
import { personalizedData } from '../../dummydata';

const Personalized = () => {
  const data = personalizedData; 
  return (
    <div className="main-frame">
      <div className="content-container">
        <div className="title-frame">
          <b className="title-style">{data.title}</b>
        </div>
        <div className="content-container2">
          <div className="overview-our-private-container">
            <p className="overview">Overview</p>
            <br/>
            <p className="our-private-tutoring-course-is1">
              <span className="our-private-tutoring2">{data.overview.description}</span>
            </p>
            <br/>
            <p className="overview">Course Features</p>
            <br/>
            {data.overview.features.map((feature, index) => (
              <p key={index} className="our-private-tutoring-course-is">
                <span className="span9">{feature.title}</span>
                <span className="our-private-tutoring2">{feature.description}</span>
              </p>
            ))}
            <p className="blank-line8">Subjects Offered</p>
            <ol>
              {data.subjectsOffered.map((subject, index) => (
                <li key={index} className="our-private-tutoring-course-is2">
                  {subject}
                </li>
              ))}
            </ol>
            <br/>
            <p className="overview">Enrollment Process</p>
            <br/>
            {data.enrollmentProcess.map((step, index) => (
              <p key={index} className="our-private-tutoring-course-is">
                <span className="span9">{step.title}</span>
                <span className="our-private-tutoring2">{step.description}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="rightrectangle">
        <div className="rightrectangle-content">
          <button className="button-2">
            <b>Enroll Now</b>
          </button>
          <div class="content-of-card">
          <img className="knowledge-sharing-icon2"alt=""src="/images/knowledge-sharing@2x.png"/>
          <div className="instructional-paradigm2">Mode : Online and Offline</div>
          <img className="time-icon2" alt="" src="/images/time@2x.png" />
          <div className="duration-102">Duration : 10 months</div>
          <img className="exchange-rupee-icon2" alt=""src="/images/exchange-rupee@2x.png"/>
          <div className="pricing-dynamic2">Pricing : Dynamic Pricing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalized;
