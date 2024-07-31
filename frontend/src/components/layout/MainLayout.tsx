import { ReactNode, useState } from "react"
import { Sidebar } from "../features/SideBar/SideBar"

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
      const [sidebarOpen, setSidebarOpen] = useState(false)
      return (<>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
                  <div className="flex h-screen overflow-hidden">
                        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <main>
                              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                    {children}
                              </div>
                        </main>
                  </div>
            </div>
      </>)
}