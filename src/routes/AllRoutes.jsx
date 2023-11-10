import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Sidebar } from "../components/Sidebar"
import { Navbar } from "../components/Navbar"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Navbar/>} />
        </Routes>
    )
}