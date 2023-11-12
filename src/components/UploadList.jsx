export const UploadList=({onOpen})=>{
    return(
        <>
        <div class=" mb-4 mt-7">
              <div className="pb-10">
                <span className="text-3xl font-bold text-purple-600">
                  Sample Project
                </span>
              </div>
              {/* cards */}
              <div className="flex ">
                <div onClick={onOpen} className="border-2 cursor-pointer  border-gray-400 rounded-xl shadow-lg   mr-6 h-14 flex items-center px-4">
                    <img className="w-10 " src="/icon/Frame 1.svg" alt="" />
                    <div className="pl-2 ">
                    <p className="text-sm font-semibold">Upload</p>
                    <p className="text-sm font-semibold">Youtube Video</p>
                    </div>
                </div>
                <div  onClick={onOpen}className="border-2  cursor-pointer border-gray-400 rounded-xl shadow-lg   mr-6 h-14 flex items-center px-4">
                    <img className="w-10 " src="/icon/Frame 2.svg" alt="" />
                    <div className="pl-2 ">
                    <p className="text-sm font-semibold">Upload</p>
                    <p className="text-sm font-semibold">Spotify Podcast</p>
                    </div>
                </div>
                <div onClick={onOpen} className="border-2 cursor-pointer  border-gray-400 rounded-xl shadow-lg   mr-6 h-14 flex items-center px-4">
                    <img className="w-10 " src="/icon/image 1.svg" alt="" />
                    <div className="pl-2 ">
                    <p className="text-sm font-semibold">Upload Media</p>
                    <p className="text-sm font-semibold">or Text file</p>
                    </div>
                </div>
              </div>
              {/* try it out */}
              <div className=" flex justify-between items-center mt-4 w-full h-14 rounded-lg bg-purple-700">
                <p className="pl-10 text-white">All files are processed! Your widget is ready to go!</p>
                <button className="mr-10 bg-white px-5 py-1 rounded-lg font-semibold">Try it out</button>
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
                
                <th  scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b dark:border-gray-700 text-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sample project 1
                </th>
                <th class="px-6 py-4">
                12 Jun 24 | 15:67
                </th>
                <th class="px-6 py-4">
                    Done
                </th>
                
                <th class="px-6 py-4">
                    <a href="#" class="font-medium   text-gray-800  border border-gray-150 px-4  py-2 rounded-l-lg ">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-blue-500  border border-gray-150 px-4  py-2 rounded-r-lg ">delete</a>
                </th>
            </tr>
            <tr class=" border-b dark:border-gray-700 text-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sample project 1
                </th>
                <th class="px-6 py-4">
                12 Jun 24 | 15:67
                </th>
                <th class="px-6 py-4">
                    Done
                </th>
                
                <th class="px-6 py-4">
                    <a href="#" class="font-medium   text-gray-800  border border-gray-150 px-4  py-2 rounded-l-lg ">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-blue-500  border border-gray-150 px-4  py-2 rounded-r-lg ">delete</a>
                </th>
            </tr>
            <tr class=" border-b dark:border-gray-700 text-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sample project 1
                </th>
                <th class="px-6 py-4">
                12 Jun 24 | 15:67
                </th>
                <th class="px-6 py-4">
                    Done
                </th>
                
                <th class="px-6 py-4">
                    <a href="/transcript" class="font-medium   text-gray-800  border border-gray-150 px-4  py-2 rounded-l-lg ">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-blue-500  border border-gray-150 px-4  py-2 rounded-r-lg ">delete</a>
                </th>
            </tr>
            
            
            
            
        </tbody>
    </table>
</div>

              </div>
          </div>    
        </>
    )
}