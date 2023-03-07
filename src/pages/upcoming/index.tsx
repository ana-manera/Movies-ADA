import Layout from "../../components/layout"
import { withAuth } from "../../hoc"

const UpcomingPage = () => {

    return (

        <Layout>
            <h1>comingSoon</h1>
         
        </Layout> 
        
    )
}

export const Upcoming = withAuth( UpcomingPage )