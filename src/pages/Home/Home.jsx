import Promotion from "./components/Promotion";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Vendors from "./components/Vendors";

const Home = () => {
  return (
    <div>
      <Hero />
      <Promotion />
      <Vendors />
      <Cta />
    </div>
  );
};

export default Home;
