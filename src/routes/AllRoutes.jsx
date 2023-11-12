import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Sidebar } from "../components/Sidebar"
import { Navbar } from "../components/Navbar"
import { Upload } from "../pages/Upload"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/upload" element={<Upload/>}/>
        </Routes>
    )
}