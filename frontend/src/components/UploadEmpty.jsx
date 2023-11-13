import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const UploadEmpty = ({ setUploads,  }) => {

  const [isEmpty, setIsEmpty] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const projectId = localStorage.getItem("projectId");
  const userId = localStorage.getItem("userId");



  const handleClick = () => {
    if (name.length !== 0 && description.length !== 0) {
      axios
        .post("http://localhost:3000/login/uploads/create", {
          projectId,
          _id: userId,
          name,
          description,
        })
        .then((res) => {
          console.log(res)
          setUploads(res.data.uploads)
          onClose()
        })
        .catch((err) => {console.log(err)});
      
    } else {
      setIsEmpty(true);
      console.log({ projectName: name });
    }
  };
  return (
    <>
      <div class=" mb-4 mt-7">
        {/* upload form grid based box section */}
        <div className=" grid grid-cols-3 gap-y-6 gap-x-20 ">
          {/* sample card */}
          <div
            onClick={onOpen}
            className="cursor-pointer border-2 border-gray-300 shadow-sm shadow-gray-300 border-solid rounded-2xl"
          >
            <div className="flex items-center">
              <div className="flex-none w-24  ">
                <img className="w-16 m-2" src="/icon/Frame 1.svg" alt="" />
              </div>
              <div className="flex-1 text-gray-600 ">
                <p className="text-lg font-bold">Upload</p>
                <p className="text-lg font-bold">Youtube Video</p>
              </div>
            </div>
          </div>
          <div
            onClick={onOpen}
            className="cursor-pointer border-2 border-gray-300 shadow-sm shadow-gray-300 border-solid rounded-2xl"
          >
            <div className="flex items-center">
              <div className="flex-none w-24  ">
                <img className="w-16 m-2" src="/icon/Frame 2.svg" alt="" />
              </div>
              <div className="flex-1 text-gray-600 ">
                <p className="text-lg font-bold">Upload</p>
                <p className="text-lg font-bold">Youtube Video</p>
              </div>
            </div>
          </div>
          <div
            onClick={onOpen}
            className="cursor-pointer border-2 border-gray-300 shadow-sm shadow-gray-300 border-solid rounded-2xl"
          >
            <div className="flex items-center">
              <div className="flex-none w-24  ">
                <img className="w-16 m-2" src="/icon/image 1.svg" alt="" />
              </div>
              <div className="flex-1 text-gray-600 ">
                <p className="text-lg font-bold">Upload</p>
                <p className="text-lg font-bold">Youtube Video</p>
              </div>
            </div>
          </div>
          <div
            onClick={onOpen}
            className="cursor-pointer border-2 border-gray-300 shadow-sm shadow-gray-300 border-solid rounded-2xl"
          >
            <div className="flex items-center">
              <div className="flex-none w-24  ">
                <img className="w-16 m-2" src="/icon/Frame 1.svg" alt="" />
              </div>
              <div className="flex-1 text-gray-600 ">
                <p className="text-lg font-bold">Upload</p>
                <p className="text-lg font-bold">Youtube Video</p>
              </div>
            </div>
          </div>
          <div
            onClick={onOpen}
            className="cursor-pointer border-2 border-gray-300 shadow-sm shadow-gray-300 border-solid rounded-2xl"
          >
            <div className="flex items-center">
              <div className="flex-none w-24  ">
                <img className="w-16 m-2" src="/icon/Frame 2.svg" alt="" />
              </div>
              <div className="flex-1 text-gray-600 ">
                <p className="text-lg font-bold">Upload</p>
                <p className="text-lg font-bold">Youtube Video</p>
              </div>
            </div>
          </div>
          <div
            onClick={onOpen}
            className="cursor-pointer border-2 border-gray-300 shadow-sm shadow-gray-300 border-solid rounded-2xl"
          >
            <div className="flex items-center">
              <div className="flex-none w-24  ">
                <img className="w-16 m-2" src="/icon/image 1.svg" alt="" />
              </div>
              <div className="flex-1 text-gray-600 ">
                <p className="text-lg font-bold">Upload</p>
                <p className="text-lg font-bold">Youtube Video</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 font-bold text-gray-500 font-lg">
          or
        </div>

        <div className="border-2 border-dashed border-gray-600 rounded-3xl h-48 ">
          <div className="flex justify-center">
            <img className="w-14 pt-3" src="/icon/cloud_upload.svg" alt="" />
          </div>
          <div className="text-center ">
            <p>
              Select a file or drag and drop here (Podcast Media or
              Transcription Text)
            </p>
            <p className="text-xs text-gray-400">
              MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
            </p>
          </div>
          <div className="flex justify-center pt-6">
            <button
              onClick={onOpen}
              className=" shadow-lg shadow-gray-300 text-purple-700 border-purple-700 border-2 px-6 py-1 rounded-full"
            >
              Select File
            </button>
          </div>
        </div>
      </div>

      {/*modal  */}
      <Modal
        isCentered
        size={"lg"}
        marginTop="600px"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
              />
              {isEmpty ? (
                <Text fontSize="sm" color="red" pl="0.5rem">
                  {" "}
                  name can't be empty
                </Text>
              ) : null}
              <FormLabel pt={2}>Description</FormLabel>
              <Input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Description"
              />
              {isEmpty ? (
                <Text fontSize="sm" color="red" pl="0.5rem">
                  description name can't be empty
                </Text>
              ) : null}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button w={20} colorScheme="purple" ml={3} onClick={handleClick}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
