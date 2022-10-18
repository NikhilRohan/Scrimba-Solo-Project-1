import "/src/components/InfoOneComponent/InfoOneComponent.css";
import PersonalInfoSection from "../PersonalInfoSection/PersonalInfoSection";
import ButtonsSection from "../ButtonsSection/ButtonsSection";
import AboutSection from "../AboutSection/AboutSection";
import InterestSection from "../InterestSection/InterestSection";
const InfoOneComponent = () => {
  return (
    <div className="InfoComponentClass">
      <PersonalInfoSection />
      <ButtonsSection type={1} />
      <AboutSection />
      <InterestSection />
    </div>
  );
};

export default InfoOneComponent;
