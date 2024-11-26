import "../css/Home.css";
// import Swiper core and required modules
// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import heroright from "../assets/images/hero/hero-rigth-img.webp";
import heroright1 from "../assets/images/hero/hero-right-1.webp";
import herorigth2 from "../assets/images/hero/hero-right-2.webp";
import heroright3 from "../assets/images/hero/hero-right-3.webp";
import heroClock from "../assets/images/hero/hero-clock-img.webp";
import heroLocation from "../assets/images/hero/hero-location.webp";
import heroCalander from "../assets/images/hero/hero-calender.webp";
import heroVaccine from "../assets/images/hero/hero-vaccine.webp";
import Marquee from "react-fast-marquee";
import vaccineDose1 from "../assets/images/vaccines/vaccine-dose-1.webp";
import vaccineDose2 from "../assets/images/vaccines/vaccine-dose-2.webp";
import vaccineDose3 from "../assets/images/vaccines/vaccine-dose-3.webp";
import vaccineDose4 from "../assets/images/vaccines/vaccine-dose-4.webp";
import todayProtect from "../assets/images/today/today-protect.webp";
import todayPerson from "../assets/images/today/today-person.webp";
import todayTemp from "../assets/images/today/today-temperature.webp";
import rightArrow from "../assets/images/today/today-right-arrow.webp";
import regBg from "../assets/images/registration/registration-right.webp";
import { Link } from "react-router-dom";
import regStatus from "../assets/images/registration/registration-right-status.webp";
import syptomBottom from "../assets/images/symptoms/symptoms-group.webp";
import feedbackBottels from "../assets/images/feedback/feed-back-group.webp";
import feedPerson1 from "../assets/images/feedback/feedback-person-1.webp";
import feedPerson2 from "../assets/images/feedback/feed-back-person-2.webp";
import feedPerson3 from "../assets/images/feedback/feedback-person-3.webp";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="hero-section" id="home-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-left-content">
                <div className="sub-heading">
                  Get Vaccinated. Boost your Immune System
                </div>
                <div className="heading">
                  COVID-19 Vaccination Got Easier With,{" "}
                  <span>Vaccination.ng</span>
                </div>
                <div className="content">
                  Vaccination.ng will help you find the nearest centre for
                  vaccination, in all 36 states in Nigeria.
                </div>
                <div className="left-button">
                  <button className="bt1">Get Vaccine</button>
                  <button className="bt2">Help Centre</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right-image">
                <img src={heroright} alt="" />
                <div className="hero-right-1-img">
                  <img src={heroright1} alt="" />
                </div>
                <div className="hero-right-2-img">
                  <img src={herorigth2} alt="" />
                </div>
                <div className="hero-right-3-img">
                  <img src={heroright3} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="hero-clock-content">
                <img src={heroClock} alt="" />
                <span>Schedule your Vaccination</span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="hero-not-res">
                <div className="hero-bottom">
                  <div className="hero-location">
                    <img src={heroLocation} alt="" />
                    <div className="hero-loc">
                      <div className="loc-top">Location</div>
                      <div className="loc-bottom">Ikeja Lagos, Nigeria</div>
                    </div>
                  </div>
                  <div className="hero-location">
                    <img src={heroCalander} alt="" />
                    <div className="hero-loc">
                      <div className="loc-top">Date</div>
                      <div className="loc-bottom">29 February, 2022</div>
                    </div>
                  </div>
                  <div className="hero-location">
                    <img src={heroVaccine} alt="" />
                    <div className="hero-loc">
                      <div className="loc-top">Vaccine Type</div>
                      <div className="loc-bottom">Mordena</div>
                    </div>
                  </div>
                  <div className="hero-bottom-button">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
            {/* for responsive */}
            <div className="hero-bottom-resposive">
              <div className="col-lg-12">
                <div className="hero-bottom">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="hero-location">
                        <img src={heroLocation} alt="" />
                        <div className="hero-loc">
                          <div className="loc-top">Location</div>
                          <div className="loc-bottom">Ikeja Lagos, Nigeria</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero-location space">
                        <img src={heroCalander} alt="" />
                        <div className="hero-loc">
                          <div className="loc-top">Date</div>
                          <div className="loc-bottom">29 February, 2022</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero-location space">
                        <img src={heroVaccine} alt="" />
                        <div className="hero-loc">
                          <div className="loc-top">Vaccine Type</div>
                          <div className="loc-bottom">Mordena</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero-bottom-button space">
                        <button>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vacination */}
      <div className="vaccines-section" id="services-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Marquee>
                <div className="vaccinations-dosses">
                  <img src={vaccineDose1} alt="" />
                  <img src={vaccineDose2} alt="" />
                  <img src={vaccineDose3} alt="" />
                  <img src={vaccineDose4} alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      {/* DataBase */}
      <div className="database-section" id="Schedule-section">
        <div className="container">
          <div className="row">
            <div className="database-main">
              <div className="heading">
                Check your COVID-19 result on our Database
              </div>
              <div className="database-input">
                {/* <div className="data-input-1"> */}
                <input className="in-1" type="text" placeholder="Okeowo" />
                {/* </div> */}
                {/* <div className="data-input-2"> */}
                <input type="text" placeholder="NIK Number" />
                {/* </div> */}
                <div className="database-button">
                  <button>Check</button>
                </div>
              </div>
              <div className="content">
                Need a certificate for your COVID-19 result? Please click here
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Today */}
      <div className="today-section" id="Contact-us-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="today-top-content">
                <div className="heading">Why get vaccinated today?</div>
                <div className="content">
                  Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed
                  ac lorem pellentesque vestibulum risus matti. In molestie
                  condimentum malesuada non.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="today-card">
                <div className="today-protect-image">
                  <img src={todayProtect} alt="" />
                </div>
                <div className="sub-heading">
                  Protects your immune system against viruses
                </div>
                <div className="content">
                  Velit ut consectetur mauris, orci amet, faucibus. Sit turpis
                  fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem
                  ac.
                </div>
                <Link to="/">
                  Read More <img className="arr" src={rightArrow} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-10">
              <div className="today-card-2">
                <div className="today-protect-image">
                  <img src={todayPerson} alt="" />
                </div>
                <div className="sub-heading">
                  Minimize the spread of the Virus
                </div>
                <Link className="color-ch" to="/">
                  Read More <img className="arr" src={rightArrow} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-10">
              <div className="today-card-2">
                <div className="today-protect-image">
                  <img src={todayTemp} alt="" />
                </div>
                <div className="sub-heading s-h">
                  Minimize the spread of the Virus
                </div>
                <Link className="color-ch" to="/">
                  Read More <img className="arr" src={rightArrow} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Registration */}
      <div className="registration-section">
        <div className="container">
          <div className="reg-not-responsive">
            <div className="row">
              <div className="col-lg-6">
                <div className="registration-content">
                  <div className="heading">
                    Get your vaccine registration today
                  </div>
                  <div className="sub-heading-1">Patient's Full Name</div>
                  <input type="text" name="" id="" placeholder="Full name" />
                  <div className="sub-heading-2">Mobile Number</div>
                  <div className="content">
                    Notifications for appointment and reminders will be sent to
                    this provided number
                  </div>
                  <div className="in-button">
                    <input type="text" placeholder="Phone number" />
                    <button>Verify</button>
                  </div>
                  <button className="registration-button">Submit</button>
                  <div className="end-links">
                    <div className="reg-al">Already registered ? </div>
                    <div className="status">Check your status</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="reg-right">
                  <img src={regBg} alt="" />
                  <div className="reg-status">
                    <img src={regStatus} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* reg-responsive */}
          <div className="reg-resposn">
            <div className="row">
              <div className="col-lg-12">
                <div className="registrat-res-heading">
                  Get your vaccine registration today
                </div>
                <div className="reg-opp">
                  <div className="col-lg-6">
                    <div className="registration-content">
                      <div className="sub-heading-1">Patient's Full Name</div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Full name"
                      />
                      <div className="sub-heading-2">Mobile Number</div>
                      <div className="content">
                        Notifications for appointment and reminders will be sent
                        to this provided number
                      </div>
                      <div className="in-button">
                        <input type="text" placeholder="Phone number" />
                        <button>Verify</button>
                      </div>
                      <button className="registration-button">Submit</button>
                      <div className="end-links">
                        <div className="reg-al">Already registered ? </div>
                        <div className="status">Check your status</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="reg-right">
                      <img src={regBg} alt="" />
                      <div className="reg-status">
                        <img src={regStatus} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Symptoms */}
      <div className="symptoms-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="symptoms-content">
                <div className="sub-heading">Covid-19 Prevention</div>
                <div className="heading">
                  <span>COVID-19</span> Symptoms
                </div>
                <div className="content">
                  Adipiscing nec etiam tortor elit quisque. Arcu aliquet
                  convallis aenean eu velit. Mi vestibulum, ullamcorper
                  venenatis imperdiet augue arcu donec neque.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="symptoms-bottom-img">
          <img src={syptomBottom} alt="" />
        </div>
      </div>
      {/* FeedBack */}
      <div className="feedback-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feedback-content">
                <div className="sub-heading">FEEDBACK</div>
                <div className="heading">What our Patients Think</div>
                <div className="content">
                  Adipiscing nec etiam tortor elit quisque. Arcu aliquet
                  convallis aenean eu velit. Mi vestibulum, ullamcorper
                  venenatis imperdiet augue arcu donec neque.
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feed-group-image">
                <img src={feedbackBottels} alt="" />
                <div className="feed-swipper">
                  <Swiper
                    // install Swiper modules
                    // modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: false }}
                    onSwiper={() => console.log()}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      340: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="feedback-card">
                        <div className="feed-card-1-img-text">
                          <img src={feedPerson1} alt="" />
                          <div className="feed-text">
                            <div className="name">Oyindamola Maja</div>
                            <div className="place">Badagry, Lagos</div>
                          </div>
                        </div>
                        <div className="content">
                          “Been stressing about a close centre to get the{" "}
                          <span>covid-19</span> vaccine, until i tried
                          Vaccination.ng”
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="feedback-card second">
                        <div className="feed-card-1-img-text">
                          <img src={feedPerson2} alt="" />
                          <div className="feed-text">
                            <div className="name">Okeowo Lekan</div>
                            <div className="place">Ikeja, Lagos</div>
                          </div>
                        </div>
                        <div className="content">
                          “Got my vaccine very close to my house. Was very easy
                          scheduling an appointment.”
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="feedback-card">
                        <div className="feed-card-1-img-text">
                          <img src={feedPerson3} alt="" />
                          <div className="feed-text">
                            <div className="name">Kafaru Temitope</div>
                            <div className="place">Obanikoro, Lagos</div>
                          </div>
                        </div>
                        <div className="content">
                          “Been stressing about a close centre to get the{" "}
                          <span>covid-19</span> vaccine, until i tried
                          Vaccination.ng”
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="feedback-card">
                        <div className="feed-card-1-img-text">
                          <img src={feedPerson1} alt="" />
                          <div className="feed-text">
                            <div className="name">Oyindamola Maja</div>
                            <div className="place">Badagry, Lagos</div>
                          </div>
                        </div>
                        <div className="content">
                          “Been stressing about a close centre to get the{" "}
                          <span>covid-19</span> vaccine, until i tried
                          Vaccination.ng”
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
