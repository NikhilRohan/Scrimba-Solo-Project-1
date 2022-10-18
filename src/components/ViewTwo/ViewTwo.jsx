import "/src/components/ViewTwo/ViewTwo.css";
import PhotoComponent from "../PhotoComponent/PhotoComponent";
import InfoTwoComponent from "/src/components/InfoTwoComponent/InfoTwoComponent";
import Footer from "../Footer/Footer";

const ViewTwo = () => {
  return (
    <div className="mainCard">
      <PhotoComponent />
      <InfoTwoComponent />
      <Footer />
    </div>
  );
};

export default ViewTwo;
