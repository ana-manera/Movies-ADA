import { SignUp } from "../../containers"
import Layout from "../../components/layout"
import { Container } from "react-bootstrap"

const Register = () => {

    return (
        <Layout>
            <Container fluid className="p-8">
                    <SignUp/>
            </Container>
        </Layout> 
    )
}
export {Register} 