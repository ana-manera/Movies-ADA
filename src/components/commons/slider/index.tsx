import { FC } from "react";
import { base } from '../../../constants';
import "./style.scss"

type SliderMovies = {
  items: [] | any
  title: string
}

const Slider: FC< SliderMovies >  = ({items, title}) => {
  return (
    <div className="scroll">
      <h2>{title}</h2>
      <div  className="row pb-2">
      {items?.map((item:any) => <img className="col img-scroll" key= {item.id} src={`${base + item.poster_path}`} alt="First slide"/>)
      }
      </div>
    </div>
  );
}

export {Slider};
