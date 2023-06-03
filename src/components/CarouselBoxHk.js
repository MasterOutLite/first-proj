import { Carousel } from "react-bootstrap";
import React, { useState } from "react";

import MushroomsImg from "../assets/63a07046c83c2869466045.jpg";
import OceanImg from "../assets/63bdcbad37f2b696275849.jpg";
import FieldImg from "../assets/63e88639a4e01622003392.jpg";
import p1 from "../assets/105885811_p0.jpg";
import p2 from "../assets/105976940_p1.jpg";
import p3 from "../assets/106261853_p0.png";
import p4 from "../assets/2848637731_preview_image_2022-08-13_175632321.jpg";
import p5 from "../assets/84348811_p0.jpg";
import p6 from "../assets/85839135_p0.png";
import p7 from "../assets/105976940_p1.jpg";

const CarouselBoxHK = () => {
  const [items] = useState([
    {
      id: 1,
      src: p1,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi quis quam hendrerit, bibendum dui non, mollis lectus.",
    },
    {
      id: 2,
      src: p2,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi quis quam hendrerit, bibendum dui non, mollis lectus.",
    },
    {
      id: 3,
      src: OceanImg,
      title: "Ocean image Arr",
      description:
        "Далі, далі від душного міста! Серце прагне буять на просторі! Бачу  здалека, – хвиля іскриста грає вільно по синьому морі.",
    },

    {
      id: 4,
      src: p3,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi quis quam hendrerit, bibendum dui non, mollis lectus.",
    },
    {
      id: 5,
      src: p4,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi quis quam hendrerit, bibendum dui non, mollis lectus.",
    },
    {
      id: 6,
      src: MushroomsImg,
      title: "Ocean image Arr",
      description:
        "Далі, далі від душного міста! Серце прагне буять на просторі! Бачу  здалека, – хвиля іскриста грає вільно по синьому морі.",
    },
    {
      id: 7,
      src: p5,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi quis quam hendrerit, bibendum dui non, mollis lectus.",
    },
    {
      id: 8,
      src: p6,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi quis quam hendrerit, bibendum dui non, mollis lectus.",
    },
    {
      id: 9,
      src: FieldImg,
      title: "Ocean image Arr",
      description:
        "Далі, далі від душного міста! Серце прагне буять на просторі! Бачу  здалека, – хвиля іскриста грає вільно по синьому морі.",
    },
    {
      id: 10,
      src: p7,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies risus id velit faucibus condimentum eu quis sapien. Fusce malesuada eros et dolor egestas dictum. Suspendisse potenti. Vivamus quam leo, fermentum et rutrum et, sollicitudin finibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae augue ac dui feugiat vehicula. Morbi quis quam hendrerit, bibendum dui non, mollis lectus.",
    },
  ]);

  return (
    <Carousel variant="primary">
      {items.map((Item) => (
        <Carousel.Item key={Item.id}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img className="d-block" style={{ height: "800px" }} src={Item.src} alt="Ocean" />
          </div>
          <Carousel.Caption>
            <h3 className="text-primary fs-4 bg-warning badge">{Item.title}</h3>
            <p className="text-success fs-6 text-wrap bg-warning badge">{Item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBoxHK;
