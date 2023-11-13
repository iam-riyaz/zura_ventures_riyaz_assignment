import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

import { useState } from "react";
import { UploadEmpty } from "../components/UploadEmpty";
import { UploadList } from "../components/UploadList";
import { Transcript } from "./Transcript";

export const Upload = ({setTitle}) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isEditPage, setIsEditPage] = useState(false)
  const [isProjectNull,setIsProjectNull]=useState(true)

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    if (name.length !== 0 && description.length !== 0) {
      localStorage.setItem("projectName", name);
      console.log({ name, description });
    } else {
      setIsEmpty(true);
      console.log({ projectName: name });
    }
  };



  return (
    <>
      <div>
            {isProjectNull?<UploadEmpty onOpen={onOpen}/>:
            <UploadList setTitle={setTitle} onOpen={onOpen}/>}
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
