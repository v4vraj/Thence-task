import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boxes from "../assets/boxes.png";
import wow from "../assets/wow.png";
import ray from "../assets/ray.png";
import { DataCard } from "./DataCard";
import { Button } from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

export const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-section-container">
              <div className="tagline-container">
                <div className="heading-1">Success stories</div>
                <div className="heading-2">
                  Every success journey we’ve encountered.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12">
                  <div className="img-container">
                    <img src={wow} alt="" />
                    <DataCard
                      additionalStyles={{
                        position: "absolute",
                        top: "20%",
                        left: "2%",
                      }}
                      figure={ray}
                      title={"40%"}
                      description={
                        "Achieved reduction in project execution time by optimizing team availability"
                      }
                    />
                    <DataCard
                      additionalStyles={{
                        backgroundColor: "#002E18",
                        position: "absolute",
                        bottom: "-15%",
                        right: "3%",
                      }}
                      additionalHeadingStyles={{ color: "#fff" }}
                      additionalSubHeadingStyles={{
                        color: "#828282",
                        marginLeft: "3%",
                        marginBottom: "6%",
                      }}
                      subTitle={"Million"}
                      title={"$0.5"}
                      description={
                        "Reduced client expenses by saving on hiring and employee costs."
                      }
                    />
                    <Button
                      additionalStyles={{
                        position: "absolute",
                        bottom: "5%",
                        left: "2%",
                      }}
                      label={"10 days"}
                      sublabel={"Staff Deployment"}
                      iconBefore={<IoIosRocket className="rocket-icon" />}
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <div className="explore-container">
                    <img src={boxes} className="box-bg" />
                    <Slider {...settings}>
                      <div>
                        <div className="heading">
                          Enhance Fortune 50 company’s insights teams research
                          capabilities
                        </div>
                      </div>
                      <div>
                        <div className="heading">
                          Enhance Fortune 50 company’s insights teams research
                          capabilities
                        </div>
                      </div>
                      <div>
                        <div className="heading">
                          Enhance Fortune 50 company’s insights teams research
                          capabilities
                        </div>
                      </div>
                    </Slider>
                    <Button
                      label={"Explore More"}
                      iconAfter={<FaArrowRight />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
