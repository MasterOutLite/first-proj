import { Carousel } from "react-bootstrap";
import MushroomsImg from "../assets/63a07046c83c2869466045.jpg";
import OceanImg from "../assets/63bdcbad37f2b696275849.jpg";
import FieldImg from "../assets/63e88639a4e01622003392.jpg";

const CarouselBoxHK = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={OceanImg} alt="Ocean" />
        <Carousel.Caption>
          <h3>Ocean image</h3>
          <p>
            Далі, далі від душного міста! Серце прагне буять на просторі! Бачу
            здалека, – хвиля іскриста грає вільно по синьому морі.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={MushroomsImg} alt="Ocean" />
        <Carousel.Caption>
          <h3>Ocean image</h3>
          <p>
            Далі, далі від душного міста! Серце прагне буять на просторі! Бачу
            здалека, – хвиля іскриста грає вільно по синьому морі.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={FieldImg} alt="Ocean" />
        <Carousel.Caption>
          <h3>Ocean image</h3>
          <p>
            Далі, далі від душного міста! Серце прагне буять на просторі! Бачу
            здалека, – хвиля іскриста грає вільно по синьому морі.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBoxHK;
