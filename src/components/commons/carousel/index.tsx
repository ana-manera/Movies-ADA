import Carousel from 'react-bootstrap/Carousel';
import { FC } from "react";
import { base } from '../../../constants';
import "./style.scss"

type Movies = {
    items: [] | any
  }

const Carrusel: FC< Movies > = ({items}) => {
  return (
    <Carousel fade>
    {items?.map((item: any) => (
      <Carousel.Item key={item.id}>
        <img
          className="d-block w-100 img-carousel"
          src={`${base + item.backdrop_path}`}
          alt="First movie"
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>


  );
}

export {Carrusel};
