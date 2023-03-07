import { SignUp } from "../../containers"
import Layout from "../../components/layout"
import { Container } from "react-bootstrap"
import { withAuth } from "../../hoc"
import { Link } from "react-router-dom"

const RegisterPage = () => {

    return (
        <Layout>
            <Container fluid className="p-8">
                    <SignUp/>
                    <Link to= "/signup"> Si ya estas registrado, haz click aquí</Link>
            </Container>
        </Layout> 
    )
}
export const Register = withAuth( RegisterPage )