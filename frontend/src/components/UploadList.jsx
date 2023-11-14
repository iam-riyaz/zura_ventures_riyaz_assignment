import { useEffect, useState } from "react";
import { Transcript } from "../pages/Transcript";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

export const UploadList = ({
  setUploads,
  setTitle,
  uploads,
  setNavigateTo,
}) => {
  const [isEditPage, setIsEditPage] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState(
    localStorage.getItem("editDescription")
  );
  const [uploadId, setUploadId] = useState("");

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
          console.log(res);
          setUploads(res.data.uploads);
          onClose();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsEmpty(true);
      console.log({ projectName: name });
    }
  };

  const handleDelete = () => {
    const uploadId = localStorage.getItem("uploadId");
    const userId = localStorage.getItem("userId");
    const projectId = localStorage.getItem("projectId");

    axios
      .post("https://zura-backend.onrender.com/login/uploads/delete", {
        _id: userId,
        projectId,
        uploadId,
      })
      .then((res) => {
        console.log(res.data);

        setUploads(res.data.uploads);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setEditDescription(localStorage.getItem("editDescription"));
    console.log({ editDescription });
  }, []);

  return (
    <>
      {isEditPage ? (
        <div class=" mb-4 mt-7">
          <Transcript
            setIsEditPage={setIsEditPage}
            editDescription={editDescription}
            setEditDescription={setEditDescription}
            setUploads={setUploads}
            uploads={uploads}
            setTitle={setTitle}
          />
        </div>
      ) : (
        <div class=" mb-4 mt-7">
          {/* cards */}
          <div className="flex ">
            <div
              onClick={onOpen}
              className="border-2 cursor-pointer  border-gray-400 rounded-xl shadow-lg   mr-6 h-14 flex items-center px-4"
            >
              <img className="w-10 " src="/icon/Frame 1.svg" alt="" />
              <div className="pl-2 ">
                <p className="text-sm font-semibold">Upload</p>
                <p className="text-sm font-semibold">Youtube Video</p>
              </div>
            </div>
            <div
              onClick={onOpen}
              className="border-2  cursor-pointer border-gray-400 rounded-xl shadow-lg   mr-6 h-14 flex items-center px-4"
            >
              <img className="w-10 " src="/icon/Frame 2.svg" alt="" />
              <div className="pl-2 ">
                <p className="text-sm font-semibold">Upload</p>
                <p className="text-sm font-semibold">Spotify Podcast</p>
              </div>
            </div>
            <div
              onClick={onOpen}
              className="border-2 cursor-pointer  border-gray-400 rounded-xl shadow-lg   mr-6 h-14 flex items-center px-4"
            >
              <img className="w-10 " src="/icon/image 1.svg" alt="" />
              <div className="pl-2 ">
                <p className="text-sm font-semibold">Upload Media</p>
                <p className="text-sm font-semibold">or Text file</p>
              </div>
            </div>
          </div>
          {/* try it out */}
          <div className=" flex justify-between items-center mt-4 w-full h-14 rounded-lg bg-purple-700">
            <p className="pl-10 text-white">
              All files are processed! Your widget is ready to go!
            </p>
            <button className="mr-10 bg-white px-5 py-1 rounded-lg font-semibold">
              Try it out
            </button>
          </div>
          {/* list */}
          <div className=" mt-4 border-2 border-gray-300 rounded-lg">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="border-b-2 h-14">
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Upload Date & Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Status
                    </th>

                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {uploads.map((e) => (
                    <tr class=" border-b dark:border-gray-700 text-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {e.name}
                      </th>
                      <th class="px-6 py-4">12 Jun 24 | 15:67</th>
                      <th class="px-6 py-4">Done</th>

                      <th class="px-6 py-4 flex cursor-pointer">
                        <div
                          onClick={() => {
                            setIsEditPage(true),
                              setTitle("Transcript"),
                              setNavigateTo("Transcript");
                            setEditDescription(e.description);
                            localStorage.setItem("uploadId", e._id);
                          }}
                          class="font-medium   text-gray-800  border border-gray-150 px-4  py-2 rounded-l-lg "
                        >
                          Edit
                        </div>
                        <div
                          onClick={() => {
                            localStorage.setItem("uploadId", e._id);
                            handleDelete();
                          }}
                          class="font-medium text-red-600 dark:text-blue-500  border border-gray-150 px-4  py-2 rounded-r-lg "
                        >
                          Delete
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

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
