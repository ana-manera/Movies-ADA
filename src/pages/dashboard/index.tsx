import { Carrusel } from "../../components/commons";
import Layout from "../../components/layout"
import { useEffect, useState } from "react";
import { servicesMovies } from "../../services/movies";
import { Slider } from "../../components/commons/slider";
import { withAuth } from "../../hoc"


const DashboardPage = () => {
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
            <Carrusel items= {movies} /> 
            <Slider items= {popular} title= {"Popular Movies"}/>
            <Slider items = {topRated} title= {"Top Rated Movies"} />
            
        </Layout> 
    )
}

export const Dashboard = withAuth(DashboardPage)