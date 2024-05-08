import { Accordion } from "../components/Accordion";
import { FiArrowUpRight } from "react-icons/fi";
import union from "../assets/Union.svg";
export const QuestionSection = () => {
  const accordionItems = [
    {
      title: "Do you offer freelancers?",
      content:
        "Yes, our platform connects you with a diverse pool of skilled freelancers across various industries and specialties. You can browse profiles, view portfolios, and select freelancers who best fit your project needs.",
    },
    {
      title:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      content:
        "We ensure satisfaction by offering a vetting process for all freelancers, client reviews, and a clear communication channel. If expectations are not met, our platform supports revisions and, in extreme cases, offers mediation to resolve disputes.",
    },
    {
      title: "Can I hire multiple talents at once?",
      content:
        "Absolutely, you can hire as many freelancers as you need simultaneously. Our platform is designed to handle multiple contracts and offers tools for managing several freelancers and projects efficiently.",
    },
    {
      title: "Why should I not go to an agency directly?",
      content:
        "Working with our platform instead of going directly to an agency offers you more control over selecting individual talents, usually at a lower cost. Additionally, our platform provides flexibility, scalability, and access to a global talent pool.",
    },
    {
      title: "Who can help me pick the right skillset and duration for me?",
      content:
        "Our dedicated customer service team and sophisticated matching algorithms can assist you in selecting the right skillset and project duration. We also offer consultation services to discuss your project needs and recommend the best solutions.",
    },
  ];

  return (
    <div className="container question-container">
      <div className="row">
        <div className="col-lg-6 left-container">
          <div className="sub-heading">What's on your mind</div>
          <div className="main-heading">Ask Questions</div>
          <div className="arrow-right-up-image">
            <img src={union} alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};
