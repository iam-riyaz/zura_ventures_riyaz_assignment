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
} from "@chakra-ui/react";
import { Empty } from "../components/Empty";
import { useState } from "react";

import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [projectName, setProjectName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    if (projectName.length !== 0) {
      //   localStorage.setItem("projectName", projectName);
      console.log({ projectName });
    } else {
      setIsEmpty(true);
      console.log({ projectName });
    }
  };

  const titles = [
    "Sample Project",
    "Sample Project2",
    "Sample Project3",
    "Sample Project4",
    "Sample Project5",
    "Sample Project6",
  ];
  const navigate=useNavigate()

  return (
    <>
      <Navbar />
      <div className="px-40">
        {/* <Empty/> */}
        <div>
          <div className="flex justify-between pt-6  items-center">
            <p className="text-4xl font-extrabold text-purple-700">Projects</p>
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
            {titles.map((e) => {
              return (
                <div onClick={()=>{navigate("/projects")}} className=" cursor-pointer  border-2 border-gray-300 border-solid rounded-xl flex">
                  <div className=" flex-none bg-indigo-600 w-24 m-2 rounded-xl text-5xl flex justify-center items-center">
                    <p className="font-bold text-white"> SP</p>
                  </div>
                  <div className=" flex-1  m-2">
                    <div className=" mt-2 pl-1 items-center ">
                      <span className="font-bold text-lg text-purple-600 m-0 ">
                        {e}
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
      </div>
    </>
  );
};
