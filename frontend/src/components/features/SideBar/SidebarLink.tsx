import { NavLink } from "react-router-dom"
import { cn } from "../../../utils/utils"
import React from "react"

interface SidebarLinkProps {
      to: string,
      name:string,
      icon?: React.ReactNode,
      className?: string,
      dropdownIcon?: React.ReactNode,
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}
export const SidebarLink = ({ to, icon,name, className, onClick, dropdownIcon }: SidebarLinkProps) => {

      return (<>
            <NavLink
                  to={`/${to}`}
                  className={({ isActive }: { isActive: boolean }) =>
                        cn(
                              "group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 capitalize ",
                              isActive && '!text-white'
                              , className)}
                  onClick={onClick}
            >
                  {icon}
                  {name}
                  {dropdownIcon}
            </NavLink>
      </>)
}