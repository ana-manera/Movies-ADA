import { FC } from "react";
import { Container } from "react-bootstrap";
import { base } from '../../../constants';

type SliderMovies = {
  items: [] | any
}

const SliderComp: FC< SliderMovies >  = ({items}) => {
  return (
    <Container>
      <div className="row pb-4">
      {items?.map((item:any) => <img key= {item.id} src={`${base + item.poster_path}`} alt="First slide"/>)
      }
      </div>
    </Container>
  );
}

export {SliderComp};
