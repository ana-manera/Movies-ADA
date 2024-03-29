import Layout from "../../components/layout"
import { LoginForm } from "../../containers"
import { withAuth } from "../../hoc"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const LoginPage = () => {
  
    return (
        <Layout>
            <Container className="p-8">
                <LoginForm/>
                <Link to= "/register"> Si no estas registrado, haz click aquí</Link>
            </Container>
            
        </Layout> 
    )
}
export const Login = withAuth(LoginPage)