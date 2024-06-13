import Navbar from "../../component/Navbar/Navbar";
import Button from "../../component/Button/Button";

const About = () => {
  return (
    <>
      <Navbar />
      <br/>
      <h1>This is About Page</h1>
      <br/>
      <p>
        Wild animals are animals that live in forests. These animals are not
        normally domesticated. The major wild animals of India are elephant,
        tiger, lion, deer, bear etc. Wild animals are very important in
        balancing the environment. They provide stability to different natural
        processes of nature. It can be found in all ecosystems, desert, rain
        forests, plains and other areas. In India, we can see various wild
        animals in the forest. Wild animals help to maintain the ecological
        balance of nature and maintain the food chain. We get useful substances
        and wild animal products like ivory, leather, honey, tusk etc from these
        animals. We should protect wild animals.
      </p>
      <br/>
      <Button text="Submit"/>
    </>
  );
};
export default About;
