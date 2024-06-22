import React from "react";
import {
    Typography,
    Drawer,
    Button,
} from "@material-tailwind/react";

function ContactDrawer({ openBottom, setOpenBottom, openDrawerBottom, closeDrawerBottom }) {
    return (
        <>
            <Drawer
                placement="bottom"
                open={openBottom}
                onClose={closeDrawerBottom}
                className="p-4"
            >
                <section className="px-8 py-8 lg:py-5">
                    <div className="mx-auto text-center">
                        <div className="grid grid-cols-1 gap-x-12 gap-y-6 items-start">
                            <div className="flex flex-col gap-4 ">
                                <div className="mx-auto px-4 text-center">
                                    <Typography
                                        variant="h1"
                                        color="blue-gray"
                                        className="mx-auto  w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                                    >
                                        
                                        Contacta
                                        <span className="text-green-500 leading-snug ">
                                            {" "}conmigo
                                        </span>{" "}
                                        {""}
                                        
                                    </Typography>
                                </div>
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mb-3 " width="40" height="30">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                    </svg>
                                    <Typography
                                        variant="h5"
                                        className="mb-2 ml-3 text-center font-medium !text-gray-900"
                                    >
                                        jorditrabajos1@hotmail.com
                                    </Typography>

                                </div>
                                <div className="flex justify-center">
                                    <Typography
                                        variant="h3"
                                        className="mb-2 text-left font-medium !text-gray-900"
                                    >
                                        <a href="https://www.linkedin.com/in/jordi-serrano-caballero/" target="_blank"><Button className="text-2xl"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" className="inline-block mr-2">
                                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                        </svg> VER PERFIL</Button></a>
                                    </Typography>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Drawer>
        </>
    )
}
export default ContactDrawer;