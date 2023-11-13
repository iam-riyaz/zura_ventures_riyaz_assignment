import { useRef, useState } from "react"
import { Topbar } from "./Topbar"
import { Upload } from "../pages/Upload"
import { UploadEmpty } from "./UploadEmpty"
import { UploadList } from "./UploadList"
import { ConfigPage } from "../pages/ConfigPage"

export const Sidebar =()=>{

   const [activeTab,setActiveTab] = useState("tab1")
   const [navigateTo,setNavigateTo] = useState("Upload")
   const [title,setTitle]=useState("Upload")

   //  const [activeTab,setactiveTab]= useState(1)
    return(
        <>
        
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-violet-100">
      <a  class="flex items-center ps-2.5 mb-5 pb-6 ">
         <img src="/directright.png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
         <span class="self-center text-2xl  font-bold  whitespace-nowrap text-purple-700 dark:text-white">LAMA</span>
      </a>
      <ul class="space-y-2 font-medium ">
         <li onClick={()=>{
             setNavigateTo("Upload")
             setTitle("Upload")
            setActiveTab("tab1")
         }} className={activeTab=="tab1"?"bg-purple-700 rounded-full ":null}>
            <div  class="cursor-pointer flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-purple-300  dark:hover:bg-gray-700 group">
               <span class=" inline-block bg-gray-300 border-2 border text-black p-1 px-3 rounded-full ">1</span>
               <span class={activeTab==1?"ms-3 text-white":"ms-3"}>Projects</span>
            </div>
         </li>
         <li onClick={()=>{
            setNavigateTo("Widget Configuration")
            setTitle("Configuration")
            setActiveTab("tab2")
         }} className={activeTab=="tab2"?"bg-purple-700 rounded-full":null}>
            <div  class="cursor-pointer flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-purple-300 dark:hover:bg-gray-700 group">
               <span class=" inline-block bg-gray-300 border-2 border text-black p-1 px-3 rounded-full ">2</span>
               <span class={activeTab=="tab2"?"ms-3 text-white":"ms-3"}>Widget Configration</span>
            </div>
         </li>
         <li onClick={()=>{
            setActiveTab(3)
         }} className={activeTab==3?"bg-purple-700 rounded-full":null}>
            <a href="deploy" class="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-purple-300 dark:hover:bg-gray-700 group">
               <span class=" inline-block bg-gray-300 border-2 border text-black p-1 px-3 rounded-full ">3</span>
               <span class={activeTab==3?"ms-3 text-white":"ms-3"}>Deployment</span>
            </a>
         </li>
         <li onClick={()=>{
            setActiveTab(4)
         }} className={activeTab==4?"bg-purple-700 rounded-full text-white!important":null}>
            <a href="price" class="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-purple-300 dark:hover:bg-gray-700 group">
               <span class=" inline-block bg-gray-300 border-2 border text-black p-1 px-3 rounded-full ">4</span>
               <span class={activeTab==4?"ms-3 text-white":"ms-3"}>Pricing</span>
            </a>
         </li>
         
         
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64 ">
          <div class="px-8 pt-4">
            <div>
              <Topbar navigateTo={navigateTo} />
            </div>
            <div class=" mb-4 mt-7">
              <div className="flex justify-between ">
                <p className="text-3xl font-bold text-purple-600">
                  {title}
                </p>
              </div>
              {activeTab=="tab1"?(<>
              <Upload setTitle={setTitle} />
              </>):activeTab=="tab2"?(<>
              <ConfigPage/>
              </>):null}
              
            </div>
          </div>
        </div>




        </>
    )
}