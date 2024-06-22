
import React, { useState } from "react";
import { Project1 } from './Markdowns';
import { Navbar, Button } from "@material-tailwind/react";
import './Projects.css';
import ContactDrawer from '../../components/ContactaDrawer';
import NavItem from '../../components/NavItem';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import ModelViewer from '../../components/ModelViewer';


function Projects() {
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  return (
    <>
      <ContactDrawer openBottom={openBottom} setOpenBottom={setOpenBottom} openDrawerBottom={openDrawerBottom} closeDrawerBottom={closeDrawerBottom}></ContactDrawer>

      <Navbar shadow={false} fullWidth className="border-0">
        <div className="mx-auto flex items-center justify-center">
          <ul className="flex items-center">
            <NavItem url="/">
              <Button className="bg-green-500 leading-snug">Inicio</Button>
            </NavItem>
            <NavItem url="projects">
              <Button className="bg-green-500 leading-snug">Juego Unity</Button>
            </NavItem>
              <NavItem url={'#'}>
              <Button onClick={openDrawerBottom} className="bg-black leading-snug">Contactar</Button>
            </NavItem>
          </ul>
        </div>
      </Navbar>
      <div className="grid grid-cols-2 gap-10">
        {ModelViewer && <section style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
          <ModelViewer />
        </section>}
        <MarkdownRenderer content={Project1} />
      </div>
    </>
  );
}

export default Projects;
