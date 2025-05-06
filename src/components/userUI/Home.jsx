import Carousel from "../../pages/Carousel";
import EventsCarousel from "../../pages/EventsCarousel";
import YogaScheme from "../../pages/YogaScheme";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div>
      

      <Carousel />
      <EventsCarousel />
      <YogaScheme />
    </div>
  );
};

export default Home;
