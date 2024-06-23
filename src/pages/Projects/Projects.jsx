
import React, { useState } from "react";
import { Navbar, Button } from "@material-tailwind/react";
import './Projects.css';
import ContactDrawer from '../../components/ContactaDrawer';
import NavItem from '../../components/NavItem';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import ModelViewer from '../../components/ModelViewer';
import { useTranslation } from "react-i18next";
import LenguageSwitcher from "../../components/LenguageSwitcher";


function Projects() {
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  const {t,i18n} = useTranslation();
  const [idioma, setIdioma] = useState(i18n.language)
  return (
    <>
      <section className="flex justify-end p-3">
        <LenguageSwitcher idioma={idioma} setIdioma={setIdioma}/>
      </section>
      <ContactDrawer openBottom={openBottom} setOpenBottom={setOpenBottom} openDrawerBottom={openDrawerBottom} closeDrawerBottom={closeDrawerBottom}></ContactDrawer>

      <Navbar shadow={false} fullWidth className="border-0">
        <div className="mx-auto flex items-center justify-center">
          <ul className="flex items-center">
            <NavItem url="/">
              <Button className="bg-green-500 leading-snug">Inicio</Button>
            </NavItem>
            <NavItem url="game">
              <Button className="bg-green-500 leading-snug">Juego Unity</Button>
            </NavItem>
              <NavItem url={'#'}>
              <Button onClick={openDrawerBottom} className="bg-black leading-snug">Contactar</Button>
            </NavItem>
          </ul>
        </div>
      </Navbar>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 m-5 sm:h-[50vh">
        {ModelViewer && <section style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
          <ModelViewer />
        </section>}
        <MarkdownRenderer content={t('Project1')} />
      </div>
    </>
  );
}

export default Projects;
