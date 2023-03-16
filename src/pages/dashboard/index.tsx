import { CarouselComp } from "../../components/commons"
import Layout from "../../components/layout"
import { useEffect, useState } from "react";
import { getCarousel } from "../../services/movies";
import { SliderComp } from "../../components/commons/slider";

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);

    useEffect(() => {

        getCarousel().then(response => setMovies(response.splice(0, 5)))

    }, []);

    return (
        <Layout>
            <CarouselComp items= {movies} /> 
            <SliderComp items= {popular}/>
            
        </Layout> 
    )
}
export {Dashboard}