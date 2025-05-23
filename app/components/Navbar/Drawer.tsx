import React, { ReactNode, Dispatch, SetStateAction } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerProps {
    isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const Drawer = ({ isOpen, setIsOpen, children }: DrawerProps) => {

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
        className={
            "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
            (isOpen ? "translate-x-0" : "-translate-x-full")
        }
    >

                <article className="relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="p-4 flex items-center justify-between"><img
                        className="h-12 w-40"
                        src={"/assets/logo/logo.svg"}
                        alt="Courses-Logo"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    /><XMarkIcon className="block h-6 w-6" onClick={() => {
                        setIsOpen(false);
                    }} />
                    </header>
                    <div onClick={() => {
                        setIsOpen(false);
                    }}>{children}</div>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
