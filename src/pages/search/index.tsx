import Layout from "../../components/layout"
import { withAuth } from "../../hoc"

const SearchPage = () => {

    return (
        <Layout>
           <h1>Search</h1>
            
        </Layout> 
        
    )
}
export const Search = withAuth( SearchPage )