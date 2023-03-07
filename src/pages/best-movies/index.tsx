import Layout from "../../components/layout"
import { withAuth } from "../../hoc"

const PopularPage = () => {

    return (
        <Layout>
            <h1>bestMovies</h1>
        </Layout>
            
    )
}
export const Popular = withAuth(PopularPage)