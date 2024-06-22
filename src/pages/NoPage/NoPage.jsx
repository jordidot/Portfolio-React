import React from "react";
import { Typography, Button, Link } from "@material-tailwind/react";
import { FlagIcon } from "@heroicons/react/24/solid";

export function NoPage() {
  return (
      <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
          <FlagIcon className="w-20 h-20 mx-auto" />
          <Typography
            variant="h1"
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            404 <br /> Vaya esta ruta no existe!
          </Typography>
          <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
            Te has perdido, haz clic en el botón de abajo para volver al inicio.
          </Typography>
          <a href="/">
          <Button color="gray" className="w-full px-4 md:w-[8rem]">
            Volver inicio
          </Button></a>
        </div>
      </div>
  );
}

export default NoPage;