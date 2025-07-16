'use client';

import GeneralInformation from '../components/Forms/general-information';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import EducationalExperience from '@/components/Forms/educational-experience';
import PracticalExperience from '@/components/Forms/practical-experience';
import Projects from '@/components/Forms/projects';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React, { useState } from 'react';
import Cv from '@/components/preview/cv';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';

export default function Home() {
  let [generalData, setGeneralData] = useState({
    name: 'Tamal Sarkar',
    email: 'tamalsarkartwoooo@gmail.com',
    phoneNumber: 123456789,
    about: 'test about',
  });

  let [educationData, setEducationData] = useState([
    {
      id: crypto.randomUUID(),
      school: 'school1',
      title: 'MCA',
      from: '2021',
      to: '2023',
    },
    {
      id: crypto.randomUUID(),
      school: 'school2',
      title: 'B-tech',
      from: '2021',
      to: '2023',
    },
  ]);

  let [projectData, setProjectData] = useState([
    {
      id: crypto.randomUUID(),
      name: 'WeatherApp',
      description: 'Simple Weather App',
      live: 'https://kardt89.github.io/WeatherApp/',
      github: 'https://github.com/KARDT89/WeatherApp',
    },
  ]);

  let [experienceData, setExperienceData] = useState([
    {
      id: crypto.randomUUID(),
      name: 'testExperience',
      position: 'testExperience',
      description: 'testExperience',
      from: '',
      to: '',
    },
  ]);

  function handleEducationSubmit() {
    let obj = {
      id: crypto.randomUUID(),
      school: '',
      title: 'Untitled',
      from: '',
      to: '',
    };
    setEducationData([...educationData, obj]);
  }
  function handleProjectSubmit() {
    let obj = {
      id: crypto.randomUUID(),
      name: 'Untitled',
      description: '',
      live: '',
      github: '',
    };
    setProjectData([...projectData, obj]);
  }
  function handleExperienceSubmit() {
    let obj = {
      id: crypto.randomUUID(),
      name: 'Untitled',
      position: 'Untitled',
      description: '',
      from: '',
      to: '',
    };
    setExperienceData([...experienceData, obj]);
  }

  function handleProjectsDelete(id) {
    setProjectData(projectData.filter((item) => item.id !== id));
  }
  function handleExperienceDelete(id) {
    setExperienceData(experienceData.filter((item) => item.id !== id));
  }
  function handleEducationDelete(id) {
    setEducationData(educationData.filter((item) => item.id !== id));
  }

  return (
    <>
      <Navbar
        general={generalData}
        experience={experienceData}
        projects={projectData}
        education={educationData}
      />
      <div className="flex xl:h-[calc(100vh-64px)]">
        <div className="hidden xl:flex overflow-y-auto max-h-screen xl:flex-col min-w-[300px] border-r-2 px-4 py-2">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className={'flex justify-between'}>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <GeneralInformation data={generalData} setData={setGeneralData} />
            </TabsContent>
            <TabsContent value="education" className="flex flex-col gap-2">
              <Button onClick={handleEducationSubmit}>Add Education</Button>

              {educationData.map((edu, idx) => (
                <Accordion type="single" collapsible key={edu.id}>
                  <AccordionItem value={`${edu.id}`}>
                    <AccordionTrigger
                      className={'border-1 p-2.5 px-4 bg-accent '}
                    >
                      {edu.title}
                    </AccordionTrigger>
                    <AccordionContent className={'pt-2 pb-0'}>
                      <EducationalExperience
                        data={educationData}
                        setData={setEducationData}
                        value={edu}
                        handleDelete={handleEducationDelete}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </TabsContent>
            <TabsContent
              value="projects"
              className="flex flex-col gap-2 my-auto"
            >
              <Button onClick={handleProjectSubmit}>Add Projects</Button>
              {projectData.map((project, idx) => (
                <Accordion type="single" collapsible key={project.id}>
                  <AccordionItem value={`${project.id}`}>
                    <AccordionTrigger
                      className={'border-1 p-2.5 px-4 bg-accent'}
                    >
                      {project.name}
                    </AccordionTrigger>
                    <AccordionContent className={'pt-2 pb-0'}>
                      <Projects
                        data={projectData}
                        setData={setProjectData}
                        value={project}
                        handleDelete={handleProjectsDelete}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </TabsContent>
            <TabsContent
              value="experience"
              className="flex flex-col gap-2 my-auto"
            >
              <Button onClick={handleExperienceSubmit}>Add Experience</Button>
              {experienceData.map((exp, idx) => (
                <Accordion type="single" collapsible key={exp.id}>
                  <AccordionItem value={`${exp.id}`}>
                    <AccordionTrigger
                      className={'border-1 p-2.5 px-4 bg-accent'}
                    >
                      {exp.position}
                    </AccordionTrigger>
                    <AccordionContent className={'pt-2 pb-0'}>
                      <PracticalExperience
                        data={experienceData}
                        setData={setExperienceData}
                        value={exp}
                        handleDelete={handleExperienceDelete}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex-1 xl:hidden bg-secondary px-4 ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>General</AccordionTrigger>
              <AccordionContent className={'w-full'}>
                <GeneralInformation
                  data={generalData}
                  setData={setGeneralData}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>Education</AccordionTrigger>
              <AccordionContent>
                <Button onClick={handleEducationSubmit}>Add Education</Button>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 gap-2'
                  }
                >
                  {educationData.map((edu, idx) => (
                    <Accordion type="single" collapsible key={edu.id}>
                      <AccordionItem value={`${edu.id}`}>
                        <AccordionTrigger
                          className={'border-1 p-4 bg-accent rounded-md'}
                        >
                          {edu.title}
                        </AccordionTrigger>
                        <AccordionContent className={'pt-2 pb-0'}>
                          <EducationalExperience
                            data={educationData}
                            setData={setEducationData}
                            value={edu}
                            handleDelete={handleEducationDelete}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger>Projects</AccordionTrigger>
              <AccordionContent>
                <Button onClick={handleProjectSubmit}>Add Projects</Button>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 gap-2'
                  }
                >
                  {projectData.map((project, idx) => (
                    <Accordion type="single" collapsible key={project.id}>
                      <AccordionItem value={`${project.id}`}>
                        <AccordionTrigger
                          className={'border-1 p-4 bg-accent rounded-md'}
                        >
                          {project.name}
                        </AccordionTrigger>
                        <AccordionContent className={'pt-2 pb-0'}>
                          <Projects
                            data={projectData}
                            setData={setProjectData}
                            value={project}
                            handleDelete={handleProjectsDelete}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger>Experience</AccordionTrigger>
              <AccordionContent>
                <Button onClick={handleExperienceSubmit}>Add Experience</Button>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 gap-2'
                  }
                >
                  {experienceData.map((exp, idx) => (
                    <Accordion type="single" collapsible key={exp.id}>
                      <AccordionItem value={`${exp.id}`}>
                        <AccordionTrigger
                          className={'border-1 p-4 bg-accent rounded-md'}
                        >
                          {exp.position}
                        </AccordionTrigger>
                        <AccordionContent className={'pt-2 pb-0'}>
                          <PracticalExperience
                            data={experienceData}
                            setData={setExperienceData}
                            value={exp}
                            handleDelete={handleExperienceDelete}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div
          className={
            'hidden xl:flex xl:flex-1 items-center justify-center overflow-hidden'
          }
        >
          <Cv
            general={generalData}
            experience={experienceData}
            projects={projectData}
            education={educationData}
          />
        </div>
      </div>
    </>
  );
}
