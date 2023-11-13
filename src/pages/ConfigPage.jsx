import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

export const ConfigPage = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div class="p-4 sm:ml-64 ">
          <div class="px-8 pt-4">
            <div>
              <Topbar />
            </div>
            <div class=" mb-4 mt-7">
              <div className="flex justify-between">
                <div className="pb-5 flex justify-between">
                  <p className="text-3xl font-bold text-purple-600">
                  Configuration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
