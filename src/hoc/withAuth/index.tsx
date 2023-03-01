import { FC } from "react"

//const publicRoutes = ["/login","/notFound", "/dashboard", "/register"]


const withAuth = (Component: FC): FC => {

    const Authenticated = () => {
        return <Component />
    }
    return Authenticated
}

export { withAuth }