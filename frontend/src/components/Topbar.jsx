import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Topbar = ({navigateTo}) => {
  const projectName= localStorage.getItem('projectName');
  const projectId= localStorage.getItem("projectId")
  const userId= localStorage.getItem('userId')
  const [uploads,setUploads]=useState([])
  const navigate= useNavigate()


  useEffect(()=>{
         axios.get("https://zura-backend.onrender.com/login",{}).then((res)=>{}).catch((err)=>{})
  },[])
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex items-center ">
            <svg
              className="cursor-pointer"
              onClick={(e)=>
                window.location.href("http://localhost:5173/")
              }
              width="18"
              height="18"
              viewBox="0 0 44 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0002 6.41159L32.8335 16.1616V33.0833H28.5002V20.0833H15.5002V33.0833H11.1668V16.1616L22.0002 6.41159ZM22.0002 0.583252L0.333496 20.0833H6.8335V37.4166H19.8335V24.4166H24.1668V37.4166H37.1668V20.0833H43.6668L22.0002 0.583252Z"
                fill="#7E22CE"
              />
            </svg>{" "}
            <div className=" px-1 text-center font-bold text-gray-500 tracking-wide ">
              /{projectName}
            </div>{" "}
            <div className="px-1 text-center font-bold text-purple-600 tracking-wide">
              /{navigateTo}
            </div>
          </div>
          <div className="flex">
          <svg width="20" height="20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6667 25.3333L32.0001 38.6666L45.3334 25.3333H18.6667Z" fill="#1E1E1E"/>
</svg>
<span className="font-bold">EN</span>
<div className="flex items-center px-2">
  <img src="/icon/flagUs.svg" alt="" />
</div>
<div className="flex items-center px-2">
<svg width="25" height="25" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.9998 58C34.9332 58 37.3332 55.6 37.3332 52.6667H26.6665C26.6665 55.6 29.0665 58 31.9998 58ZM47.9998 42V28.6667C47.9998 20.48 43.6532 13.6267 35.9998 11.8133V10C35.9998 7.78667 34.2132 6 31.9998 6C29.7865 6 27.9998 7.78667 27.9998 10V11.8133C20.3732 13.6267 15.9998 20.4533 15.9998 28.6667V42L10.6665 47.3333V50H53.3332V47.3333L47.9998 42ZM42.6665 44.6667H21.3332V28.6667C21.3332 22.0533 25.3598 16.6667 31.9998 16.6667C38.6398 16.6667 42.6665 22.0533 42.6665 28.6667V44.6667Z" fill="#3C3C3C"/>
</svg>
</div>

          </div>
        </div>
      </div>
    </>
  );
};
