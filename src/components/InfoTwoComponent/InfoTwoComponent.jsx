import "/src/components/InfoTwoComponent/InfoTwoComponent.css";
import PersonalInfoSection from "../PersonalInfoSection/PersonalInfoSection";
import ButtonsSection from "../ButtonsSection/ButtonsSection";
import AboutSection from "../AboutSection/AboutSection";
import InterestSection from "../InterestSection/InterestSection";
const InfoTwoComponent = () => {
  return (
    <div className="InfoComponentClass">
      <PersonalInfoSection />
      <ButtonsSection type={2} />
      <AboutSection />
      <InterestSection />
    </div>
  );
};

export default InfoTwoComponent;
