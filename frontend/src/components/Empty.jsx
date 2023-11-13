import { FormControl, Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";

export const Empty = ({setProjects}) => {

    const [isEmpty, setIsEmpty]=useState(false)
    const [projectName , setProjectName]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

  

  const handleClick= ()=>{
    if(projectName.length!==0){
       
      // localStorage.setItem("projectName", projectName);
      const email = localStorage.getItem("loginEmail");
      axios
        .post("http://localhost:3000/projects/create", {
          email: email,
          projectName: projectName,
        })
        .then((res) => {setProjects(res.data.projects); onClose()})
        .catch((err) => { console.log({err})});
      console.log({projectName})
    }else{
      setIsEmpty(true)
      console.log({projectName})
    }
  }

  return (
    <>
      <div className="pt-8">
        <p className="text-4xl text-center font-bold text-purple-700">
          Create A New Project
        </p>
        <div className=" flex flex-col justify-center  pt-10 ">
          <img className="h-48" src="/cuate.svg" alt="" />
          <div className="flex justify-center p-4">
            <p className=" text-justify text-gray-400 w-1/2">
              Welcome to our latest project, the Interactive Task Management
              App! In today's fast-paced world, staying organized and managing
              tasks efficiently is more crucial than ever. Our new app aims to
              revolutionize the way you handle your daily tasks, making
              productivity seamless and enjoyable.
            </p>
          </div>
          <div className="flex justify-center pt-6 items-center">
            <button onClick={onOpen} className=" rounded-lg text-xl  px-8 text-white bg-indigo-950 font-extrabold  auto p-2 ">
              {" "}
              + New Project
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal 
      isCentered
      size={"xl"}
      marginTop="600px"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter Project Name:</FormLabel>
              <Input onChange={(e)=>{  setProjectName(e.target.value)}} placeholder="Project Name" />
              {isEmpty?<Text fontSize="sm" color="red" pl="0.5rem">Project name can't be empty</Text>:null}
            </FormControl>

            
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} color="red">Cancel</Button>
            <Button  colorScheme="purple" ml={3} onClick={handleClick}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
