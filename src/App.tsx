import { Route,BrowserRouter,Routes } from "react-router-dom";
import { NotFound,Register, Dashboard, Details, Search, Popular, Upcoming, Login } from "./pages";



const App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="search" element={<Search />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="popular" element={<Popular />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
