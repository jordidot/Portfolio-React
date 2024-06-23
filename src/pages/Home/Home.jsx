import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import LenguageSwitcher from '../../components/LenguageSwitcher';
import { contents, tecnologies } from '../../constants/constants';
import NavItem from '../../components/NavItem';
import ContentCard from '../../components/ContentCard';
import ContactDrawer from '../../components/ContactaDrawer';
import TeamCard from '../../components/TeamCard';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile.png';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import {
  Navbar,
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Avatar,
  Button,
  Stepper,
  Step
} from "@material-tailwind/react";

function Home() {
  const [openBottom, setOpenBottom] = React.useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const { t, i18n } = useTranslation();
  const [idioma, setIdioma] = useState(i18n.language);
  const [ismobile, setMobileVersion] = useState(null);

  const isMobileVersion = () => {
    setMobileVersion(window.screen.width >= 1024);
  }

  useEffect(() => {
    isMobileVersion();
    window.addEventListener('resize', isMobileVersion);
    return () => {
      window.removeEventListener('resize', isMobileVersion);
    }
  }, []);

  useEffect(()=>{
    document.getElementById('df-messengerid').classList.add('hidden');
    setTimeout( document.getElementById('df-messengerid').classList.remove('hidden'),100)
  }, [setIdioma])
  

  return (
    <>
      <section className="flex justify-end p-3">
        <LenguageSwitcher idioma={idioma} setIdioma={setIdioma}/>
      </section>
      {idioma && (
        <df-messenger
          key={idioma}
          chat-title="Asistente de Jordi"
          agent-id="f164a325-014d-4123-a3d0-6c40ba5b3739"
          language-code={idioma}
          chat-icon="https://cdn-icons-png.flaticon.com/512/8943/8943377.png"
          intent="Bienvenida"
          id="df-messengerid"
        ></df-messenger>
      )}
      <ContactDrawer openBottom={openBottom} setOpenBottom={setOpenBottom} openDrawerBottom={openDrawerBottom} closeDrawerBottom={closeDrawerBottom} ></ContactDrawer>

      <Navbar shadow={false} fullWidth className="border-0">
        <div className="mx-auto flex items-center justify-center">
          <ul className="flex items-center">
            <NavItem url="projects">
              <Button className="bg-green-500 leading-snug">{t('mod3d')}</Button>
            </NavItem>
            {ismobile && <NavItem url="game">
              <Button className="bg-green-500 leading-snug">{t('juegUnity')}</Button>
            </NavItem>}
            <NavItem url={'#'}>
              <Button onClick={openDrawerBottom} className="bg-black leading-snug">{t('contactar')}</Button>
            </NavItem>
          </ul>
        </div>
      </Navbar>

      <header className="bg-white p-8 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="mx-auto px-4 text-center flex items-center">
            <ReactTypingEffect
              text={[
                "Jordi Serrano",
                t('29años'),
              ]}
              speed={90}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={100}
              className="text-4xl lg:text-6xl font-mono"
            />
          </div>

          <div className="mx-auto px-4 text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-4xl lg:!text-6xl"
            >
              {t('desarrollador')}
              <br />{" "}
              <span className="text-green-500 leading-snug">{t('webJunior')}</span>{" "}<br />
              Fullstack
              {" </>"}
            </Typography>
          </div>
          <div className="mx-auto px-4 text-center flex items-center">
            <img
              src={profileImage}
              alt="Jordi Serrano"
              className="rounded-full w-32 h-32 lg:w-48 lg:h-48 mx-auto"
            />
          </div>
        </div>
      </header>
      <section className="mx-auto px-8 py-5 lg:py-10 flex justify-center">
        <div className="w-[60rem]">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-cat-logo.jpg" alt="user 1" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  {t("titCFGS")}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-600">
                  <MarkdownRenderer content={t("descCFGS")} />
                  Montilivi, Girona 2022 - 2024
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-cat-logo.jpg" alt="user 1" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  {t("titBoot")}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="">
                <Typography color="gray" className="font-normal text-gray-600">
                  <MarkdownRenderer content={t("descBoot")} />
                  Salt, Girona 2022
                </Typography>
              </TimelineBody>
            </TimelineItem>

          </Timeline>
        </div>
      </section>
      <section className="container mx-auto px-8 lg:px-40 py-5 lg:py-10">
        <Typography
          variant="h2"
          color="blue-gray"
          className="!text-2xl !leading-snug lg:!text-3xl mb-5"
        >
          {t("expLab")}
        </Typography>

        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className="cursor-pointer"
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
        </Stepper>

        {activeStep == 0 && (
          <>
            <MarkdownRenderer content={t("Project2")} />
          </>
        )}
        {activeStep == 1 && (
          <MarkdownRenderer content={t("Project3")} />
        )}
        {activeStep == 2 && (
          <MarkdownRenderer content={t("Project4")} />
        )}
        <div className="flex justify-between mt-5">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            {t('ant')}
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            {t('sig')}
          </Button>
        </div>
      </section>
      <section className="container mx-auto px-8 lg:px-40 py-5 lg:py-10">
        <Typography
          variant="h2"
          color="blue-gray"
          className="!text-2xl !leading-snug lg:!text-3xl"
        >
          {t('sobremi')}
        </Typography>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {contents.map(({ img, title, desc }) => (
            <ContentCard key={t(title)} img={img} title={t(title)} desc={t(desc)} />
          ))}
        </div>
      </section>
      <section className="container mx-auto px-8 lg:px-40 pt-5  lg:pt-5 lg:pb-40">

        <Typography
          variant="h1"
          color="blue-gray"
          className=" !text-2xl lg:!text-3xl text-left"
        >
          {t('titleEsfuerzo')}
        </Typography>
        <Typography
          variant="lead"
          className="!text-sm lg:!text-lg py-3 text-left text-gray-700"
        >
          {t('descEsfuerzo')}
        </Typography>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {tecnologies.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>

      </section>
    </>
  );
}

export default Home;
