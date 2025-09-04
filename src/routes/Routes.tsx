import { BrowserRouter,Routes, Route } from "react-router"
import App from "../pages/Home/App"
import ProjectList from "../components/projectslist"



const Router=()=> {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projetos" element={<ProjectList />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router
