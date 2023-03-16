import { CarouselComp } from "../../components/commons"
import Layout from "../../components/layout"
import { useEffect, useState } from "react";
import { servicesMovies } from "../../services/movies";
import { SliderComp } from "../../components/commons/slider";

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {

        servicesMovies.getCarousel().then(response => setMovies(response.splice(0, 5)))
        servicesMovies.getAllPopular().then((data)=> setPopular(data.results))
        servicesMovies.getAllTopRated().then((data)=> setTopRated(data.results))

    }, []);

    return (
        <Layout>
            <CarouselComp items= {movies} /> 
            <SliderComp items= {popular}/>
            <SliderComp items = {topRated}/>
            
        </Layout> 
    )
}
export {Dashboard}