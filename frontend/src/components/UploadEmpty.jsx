export const UploadEmpty=({onOpen})=>{
    return(
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
                      <img
                        className="w-16 m-2"
                        src="/icon/Frame 1.svg"
                        alt=""
                      />
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
                      <img
                        className="w-16 m-2"
                        src="/icon/Frame 2.svg"
                        alt=""
                      />
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
                      <img
                        className="w-16 m-2"
                        src="/icon/image 1.svg"
                        alt=""
                      />
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
                      <img
                        className="w-16 m-2"
                        src="/icon/Frame 1.svg"
                        alt=""
                      />
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
                      <img
                        className="w-16 m-2"
                        src="/icon/Frame 2.svg"
                        alt=""
                      />
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
                      <img
                        className="w-16 m-2"
                        src="/icon/image 1.svg"
                        alt=""
                      />
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
                  <img
                    className="w-14 pt-3"
                    src="/icon/cloud_upload.svg"
                    alt=""
                  />
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
                  <button onClick={onOpen} className=" shadow-lg shadow-gray-300 text-purple-700 border-purple-700 border-2 px-6 py-1 rounded-full">
                    Select File
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}