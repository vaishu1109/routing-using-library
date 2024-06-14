import Navbar from "../../component/Navbar/Navbar";
import Button from "../../component/Button/Button";
import "./Home.css"
const Home = () => {
  return (
    <>
      <Navbar />
      <br/>
      <h1>This is Home Page</h1>
      <br/>
      <img src="https://static.javatpoint.com/computer/images/what-is-a-home-page.jpg" className="home-img"/>
      <br/>
      <Button text="Click Me"/>
    </>
  );
};

export default Home;
