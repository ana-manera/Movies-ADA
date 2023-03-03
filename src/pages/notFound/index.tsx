import Layout from "../../components/layout"
import { withAuth } from "../../hoc"

const NotFoundPage = () => {

    return (
        <Layout>
           <h1>NotFound</h1>
            
        </Layout> 
        
    )
}
export const NotFound = withAuth(NotFoundPage)