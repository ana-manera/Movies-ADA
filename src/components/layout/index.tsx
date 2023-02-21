import { Header } from "../commons/header"
import { Main } from "../commons/main"
import { FooterComp } from "../commons/footer"
import { ReactNode, FC } from "react"

type Props = {
    children: ReactNode
}

const Layout: FC <Props> = ({ children }) => {

    return (

        <>
            <Header/>
            <div className="d-flex flex-grow-1">
                <Main>
                    { children }
                </Main>
            </div>
            <FooterComp />
        </>

    )

}

export default Layout 