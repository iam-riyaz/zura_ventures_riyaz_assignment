import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import axios from "axios";

export const Transcript = ({
  setIsEditPage,
  setTitle,
  setUploads,
  uploads,
  editDescription,
  setEditDescription,
}) => {
  const data =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur iste voluptatem quidem vitae veritatis at quo unde? Nesciunt animi sequi quisquam delectus omnis dolore aspernatur. Maxime illum maiores deleniti quod quibusdam dolore! Obcaecati repellendus aut illum doloremque quae, enim ipsam ab voluptas, voluptate rerum iure, perferendis dolore. Omnis eius reprehenderit facere voluptatem reiciendis beatae aliquid quae aperiam dolore ratione? Eius enim, facere distinctio quia eum eveniet deserunt quis sequi nobis corporis earum, nesciunt libero fugiat, neque tenetur debitis aperiam asperiores ad! Officiis expedita alias hic facere perferendis provident adipisci accusamus, sed, ex, necessitatibus quos quo et ipsam. Nam harum nulla voluptatem exercitationem architecto hic? Aliquam aspernatur, amet molestiae nam, quaerat nobis maiores repudiandae veritatis eos corrupti sed soluta reprehenderit enim quas eveniet omnis. Ducimus quasi possimus nam nesciunt corporis provident quis aperiam molestiae laudantium? Ut tempora, animi odit molestias accusamus quos quis deleniti error. Ab ullam quasi cumque sapiente magnam iusto dicta quidem fuga enim quaerat, sint vero adipisci, vitae cupiditate consequatur nihil placeat nostrum officia fugit molestias pariatur! Voluptate, tenetur? Suscipit maxime dolor eligendi, quo voluptate omnis excepturi officiis quasi quas quae debitis provident aperiam nostrum amet, eius voluptatum error eum? Maxime cum nihil nulla aperiam dolore rem.";
  const [isEditable, setIsEditable] = useState(false);
  const [description, setDescription] = useState("");
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("editDescription")
  );
  const [oldInputValue, setOldInputValue] = useState(inputValue);

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
    setInputValue(oldInputValue);
  };

  const handleEditSave = () => {
    const uploadId = localStorage.getItem("uploadId");
    const userId = localStorage.getItem("userId");
    const projectId = localStorage.getItem("projectId");

    localStorage.setItem("editDescription", inputValue);

    axios
      .post("http://localhost:3000/login/uploads/update", {
        _id: userId,
        uploadId,
        projectId,
        newDescription: inputValue,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log({ inputValue });
    setOldInputValue(inputValue);
    setEditDescription(inputValue);
    console.log({ editDescription });
    setIsEditPage((e) => !e);
    setTitle("Upload");
    setIsEditable((e) => !e);
  };

  const handleDiscard = () => {
    setInputValue(oldInputValue);
    setIsEditPage((e) => !e);
    setTitle("Upload");
    setIsEditable((e) => !e);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // useEffect(()=>{

  //   const uploadId= localStorage.getItem("uploadId")
  //   let diss= uploads.filter((e)=>e._id==uploadId)
  //   setDescription(diss[0].description)
  // },[])

  return (
    <>
      {
        <div>
          <div className="flex justify-end pb-1 ">
            {isEditable ? (
              <div>
                <button
                  onClick={handleDiscard}
                  className=" font-semibold border-2 border-red-500 mr-2 py-1 px-6  text-red-500 rounded-lg"
                >
                  Discard
                </button>
                <button
                  onClick={handleEditSave}
                  className=" font-semibold border-2 border-indigo-950 py-1 px-6 bg-indigo-950 text-white rounded-lg"
                >
                  Save & Exit
                </button>
              </div>
            ) : null}
          </div>
          <div
            className={
              isEditable
                ? " border-4 border-purple-800 rounded-lg  "
                : " border-2 border-purple-600 rounded-lg  "
            }
          >
            <div
              onClick={handleEditToggle}
              className={
                isEditable
                  ? "flex justify-center items-center w-24 ml-2 mt-1 text-xs bg-gray-600 cursor-pointer invisible  rounded-xl"
                  : "flex justify-center items-center w-24 ml-2 mt-1 text-xs bg-gray-600 cursor-pointer   rounded-xl"
              }
            >
              <img className="h-5" src="/icon/mode.svg" alt="" />
              <button className=" text-xs  font-semibold tracking-wide text-white  ">
                Edit Mode
              </button>
            </div>

            {isEditable ? (
              <textarea
                id="message"
                rows="14"
                value={inputValue}
                onChange={handleInputChange}
                class="p-4 w-full leading-6 tracking-wide resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border-none focus:outline-none "
                placeholder="Write your thoughts here..."
              ></textarea>
            ) : (
              <textarea
                id="message"
                rows="14"
                value={inputValue}
                class=" p-4 w-full leading-6 tracking-wide resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border-none focus:outline-none "
              ></textarea>
            )}
          </div>
        </div>
      }
    </>
  );
};
