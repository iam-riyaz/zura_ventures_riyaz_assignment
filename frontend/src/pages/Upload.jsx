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

import { useEffect, useState } from "react";
import { UploadEmpty } from "../components/UploadEmpty";
import { UploadList } from "../components/UploadList";
import { Transcript } from "./Transcript";
import axios from "axios";

export const Upload = ({ setTitle, setNavigateTo }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isEditPage, setIsEditPage] = useState(false);
  const [uploads, setUploads] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const projectId = localStorage.getItem("projectId");
  const userId = localStorage.getItem("userId");

  const handleClick = () => {
    if (name.length !== 0 && description.length !== 0) {
      axios
        .post("https://zura-backend.onrender.com/login/uploads/create", {
          projectId,
          _id: userId,
          name,
          description,
        })
        .then((res) => {
          setUploads(res.data.projects.uploads)
          onClose()
        })
        .catch((err) => {console.log(err)});
      
    } else {
      setIsEmpty(true);
      console.log({ projectName: name });
    }
  };

  useEffect(() => {
    axios
      .post("https://zura-backend.onrender.com/login/uploads", {
        _id: userId,
        projectId: projectId,
      })
      .then((res) => {
        setUploads(res.data.uploads);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <div>
        {uploads.length == 0 ? (
          <UploadEmpty
            uploads={uploads}
            setUploads={setUploads}
            
          />
        ) : (
          <UploadList
            setTitle={setTitle}
            uploads={uploads}
            setNavigateTo={setNavigateTo}
            setUploads={setUploads}
            
          />
        )}
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
