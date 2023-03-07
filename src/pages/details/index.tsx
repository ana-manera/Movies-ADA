import Layout from "../../components/layout"
import { withAuth } from "../../hoc"

const DetailsPage = () => {

    return (
        <Layout>
            <h1>Details</h1>
            
        </Layout> 
    )
}
export const Details = withAuth(DetailsPage)