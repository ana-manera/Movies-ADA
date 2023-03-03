import { SignUp } from "../../containers"
import Layout from "../../components/layout"
import { Container } from "react-bootstrap"
import { withAuth } from "../../hoc"

const RegisterPage = () => {

    return (
        <Layout>
            <Container fluid className="p-8">
                    <SignUp/>
            </Container>
        </Layout> 
    )
}
export const Register = withAuth( RegisterPage )