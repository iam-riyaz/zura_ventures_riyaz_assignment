import { FormControl, Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

export const Empty = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <div className="pt-8">
        <p className="text-4xl text-center font-bold text-purple-700">
          Create A New Project
        </p>
        <div className=" flex flex-col justify-center  pt-10 ">
          <img className="h-48" src="/cuate.svg" alt="" />
          <div className="flex justify-center p-4">
            <p className=" text-gray-400 w-1/2">
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
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
