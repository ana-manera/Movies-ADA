import { CarouselComp } from "../../components/commons"
import Layout from "../../components/layout"
import { useEffect, useState } from "react";
import { getCarousel } from "../../services/movies";

const Dashboard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        getCarousel().then(response => setMovies(response.splice(0, 5)))

    }, []);

    return (
        <Layout>
            <CarouselComp items={movies} /> 
            
        </Layout> 
    )
}
export {Dashboard}