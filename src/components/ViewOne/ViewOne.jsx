import "/src/components/ViewOne/ViewOne.css";
import PhotoComponent from "/src/components/PhotoComponent/PhotoComponent";
import InfoOneComponent from "/src/components/InfoOneComponent/InfoOneComponent";
import Footer from "../Footer/Footer";

const ViewOne = () => {
  return (
    <div className="mainCard">
      <PhotoComponent />
      <InfoOneComponent />
      <Footer />
    </div>
  );
};

export default ViewOne;
