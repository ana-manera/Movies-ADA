import { Route,BrowserRouter,Routes } from "react-router-dom";
import { NotFound,Login, Dashboard, Details, Search, Popular, Upcoming } from "./pages";



const App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
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
