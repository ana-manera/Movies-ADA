import Layout from "../../components/layout"
import { withAuth } from "../../hoc"

const DashboardPage = () => {

    return (
        <Layout>
            <h1>Carousell</h1>
            
        </Layout> 
    )
}

export const Dashboard = withAuth(DashboardPage)