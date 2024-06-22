import React, { useEffect, useState, Fragment } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import ReactMarkdown from 'react-markdown';
import './Game.css';
import UnityLogo from '../../../public/TemplateData/unity-logo-light.png'
import NavItem from '../../components/NavItem';
import { Progress, Typography, Navbar, Button } from '@material-tailwind/react';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { GameProject } from '../Projects/Markdowns';

const Game = () => {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: './Build/Projects.loader.js',
    dataUrl: './Build/webgl.data',
    frameworkUrl: './Build/build.framework.js',
    codeUrl: './Build/build.wasm',
  });

  const [fullscreen, setFullscreen] = useState(false);

  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  useEffect(() => {
    function handleResize() {
      if (isLoaded) {
        setFullscreen(true);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded]);



  return (
    <>
      <Navbar shadow={false} fullWidth className="border-0">
        <div className="mx-auto flex items-center justify-center">
          <ul className="flex items-center">
             <NavItem url="/">
              <Button className="bg-green-500 leading-snug">Inicio</Button>
            </NavItem>
            <NavItem url="projects">
              <Button className="bg-green-500 leading-snug">Modelo 3D</Button>
            </NavItem>
            <NavItem url={'#'}>
              <Button onClick={openDrawerBottom} className="bg-black leading-snug">Contactar</Button>
            </NavItem>
          </ul>
        </div>
      </Navbar>
      <div className="game-container">
        {!isLoaded && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-auto shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img src={UnityLogo} alt="Unity Logo" className="w-100 h-100 mr-2" />
              </div>
              <div className="flex items-center justify-center mb-4">
                <Progress value={Math.round(loadingProgression * 100)} color="green" />
              </div>
              <Typography className="text3-center">Loading Application... {Math.round(loadingProgression * 100)}%</Typography>
            </div>
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          className={isLoaded ? "unity-game" : "unity-game hidden"}
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
        />
        {isLoaded && (<>
          <MarkdownRenderer content={GameProject} />
        </>)}
      </div>
    </>
  );
};

export default Game;