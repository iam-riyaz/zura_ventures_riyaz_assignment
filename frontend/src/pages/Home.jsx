import {
  FormControl,
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { Empty } from "../components/Empty";
import { useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [projectName, setProjectName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projects, setProjects] = useState([]);
  const [isLoading,setIsloading] =useState(false)

  const handleClick = () => {
    if (projectName.length !== 0) {
      
      const email = localStorage.getItem("loginEmail");
      axios
        .post("https://zura-backend.onrender.com/projects/create", {
          email: email,
          projectName: projectName,
        })
        .then((res) => {setProjects(res.data.projects); onClose()})
        .catch((err) => { console.log({err})});
      console.log({ projectName });
    } else {
      setIsEmpty(true);
      console.log({ projectName });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {


    let loginEmail = localStorage.getItem("loginEmail");

    if (loginEmail) {
      setIsloading(true)
      
      axios
        .post("https://zura-backend.onrender.com/login", { email: loginEmail })
        .then((res) => {
          setProjects(res.data.projects);
          localStorage.setItem("userId",res.data._id)
          setIsloading(false)
        })
        .catch((err) => {
          console.log({ err });
        });
    } else {
      const userInput = window.prompt("Enter Your Email:");
      if (userInput !== null) {

        setIsloading(true)
        axios
          .post("https://zura-backend.onrender.com/login", { email: userInput })
          .then((res) => {
            const email = res.data.email;
            setProjects(res.data.projects);
            console.log(res.data);
            localStorage.setItem("loginEmail", email);
            localStorage.setItem("userId",res.data._id)
            setIsloading(false)
          })
          .catch((err) => {
            console.log({ error: err });
          });
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      {isLoading?
      <div className="flex justify-center flex-col items-center"> <Spinner zIndex="23" size="xl" thickness="4px" color='purple.700' /> <h3>please wait while backend is starting</h3> </div>
      :<div className="px-40">
        {projects.length != 0 ? (
          <div>
            <div>
              <div className="flex justify-between pt-6  items-center">
                <p className="text-4xl font-extrabold text-purple-700">
                  Projects
                </p>
                <button
                  onClick={onOpen}
                  className=" rounded-lg text-xl  px-8 text-white bg-indigo-950 font-extrabold  auto p-2 "
                >
                  {" "}
                  + New Project
                </button>
              </div>
            </div>
            {/* main cards  */}
            <div className="pt-10">
              {/* simple card */}
              <div className="grid grid-cols-3 gap-x-16 gap-y-10 h-54 auto-cols-max  ">
                {projects.map((e) => {
                  return (
                    <div
                      onClick={() => {
                        navigate("/projects");
                        localStorage.setItem("projectId",e._id)
                        localStorage.setItem("projectName",e.projectName)
                      }}
                      className=" cursor-pointer  border-2 border-gray-300 border-solid rounded-xl flex"
                    >
                      <div className=" flex-none bg-indigo-600 w-24 m-2 rounded-xl text-5xl flex justify-center items-center">
                        <p className="font-bold text-white"> {(e.projectName).split(" ")[0][0]} </p>
                        <p className="font-bold text-white"> {(e.projectName).split(" ")[1]? (e.projectName).split(" ")[1][0] : ""} </p>
                      </div>
                      <div className=" flex-1  m-2">
                        <div className=" mt-2 pl-1 items-center ">
                          <span className="font-bold text-lg text-purple-600 m-0 ">
                            {e.projectName}
                          </span>
                          <p className=" text-xs text-gray-800 tracking-tighter">
                            {" "}
                            4 Episodes
                          </p>
                        </div>
                        <div className="mt-4 pl-1 pb-2">
                          <p className="text-xs text-gray-400">
                            last edited a week ago
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <Empty setProjects={setProjects} />
        )}
        {/* modal */}
        <Modal
          isCentered
          size={"xl"}
          marginTop="600px"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter Project Name:</FormLabel>
                <Input
                  onChange={(e) => {
                    setProjectName(e.target.value);
                  }}
                  placeholder="Project Name"
                />
                {isEmpty ? (
                  <Text fontSize="sm" color="red" pl="0.5rem">
                    Project name can't be empty
                  </Text>
                ) : null}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} color="red">
                Cancel
              </Button>
              <Button colorScheme="purple" ml={3} onClick={handleClick}>
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </div>}
    </>
  );
};
