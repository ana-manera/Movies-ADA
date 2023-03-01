import Layout from "../../components/layout"
import { LoginForm } from "../../containers"
import { withAuth } from "../../hoc"
import { Container } from "react-bootstrap"


const LoginPage = () => {
  
    return (
        <Layout>
            <Container className="p-8">
                <LoginForm/>
            </Container>
        </Layout> 
    )
}
export const Login = withAuth(LoginPage)