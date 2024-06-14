import Navbar from "../../component/Navbar/Navbar";
import Button from "../../component/Button/Button";
import "./About.css"

const About = () => {
  return (
    <>
      <Navbar />
      <br/>
      <h1>This is About Page</h1>
      <br/>
      <img src="https://cdn.acodez.in/wp-content/uploads/2022/03/Tips-for-Creating-a-Killer-About-Us-Page-on-Your-Website-banner-image-1.jpg" className="about-img"/>
      <br/>
      <Button text="Submit"/>
    </>
  );
};
export default About;
