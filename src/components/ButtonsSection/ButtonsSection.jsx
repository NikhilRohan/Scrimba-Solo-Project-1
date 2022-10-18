import "/src/components/ButtonsSection/ButtonsSection.css";

const ButtonsSection = (props) => {
  if (props.type == 1) {
    return (
      <div className="buttonSectionClass">
        <button>
          <i class="fa-solid fa-envelope"></i>Email
        </button>
        <button>
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    );
  } else {
    if (props.type == 2) {
      return (
        <div className="buttonSection2Class">
          <button class="longEmail">
            <i class="fa-solid fa-envelope"></i>Email
          </button>
        </div>
      );
    }
  }
};

export default ButtonsSection;
