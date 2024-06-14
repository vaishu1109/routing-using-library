import Navbar from "../../component/Navbar/Navbar";
import Button from "../../component/Button/Button";
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <Navbar />
      <br/>
      <h1>This is Contact Page</h1>
      <br/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSi-oYEGu_4eQnbMq0Ds3cTNlvua59FxU_qw&s" className="contact-img"/>

      <br/>
      <Button text="Read More"/>
    </>
  );
};
export default Contact;
