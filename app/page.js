'use client';

import GeneralInformation from '../components/Forms/general-information';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import EducationalExperience from '@/components/Forms/educational-experience';
import PracticalExperience from '@/components/Forms/practical-experience';
import Projects from '@/components/Forms/projects';
import SkillZ from '@/components/Forms/skills';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React, { useState } from 'react';
import Cv from '@/components/preview/cv';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

export default function Home() {
  let [generalData, setGeneralData] = useState({
    name: 'Tamal Sarkar 💻',
    email: 'tamal.sarkar@example.com',
    phoneNumber: 9876543210,
    about: `Full-time dev learner | MCA graduate with a strong foundation in computer applications and programming. Eager to apply my skills in a
dynamic tech environment. Committed to continuous learning and excited about contributing to innovative projects
in a forward-thinking organization.`,
    linkedin: 'https://linkedin.com/in/tamal-sarkar',
    github: 'https://github.com/KARDT89',
    x: 'https://twitter.com/tamalsarkar',
  });

  let [educationData, setEducationData] = useState([
    {
      id: crypto.randomUUID(),
      school: 'RCC Institute of Information Technology​',
      title: 'Master of Computer Application (MCA)',
      from: '',
      to: '',
    },
    {
      id: crypto.randomUUID(),
      school: 'Techno Main, Salt Lake​​',
      title: 'Bachelor Of Computer Application (BCA)',
      from: '',
      to: '',
    },
  ]);

  let [projectData, setProjectData] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Binary Search Tree Visualizer 🌳',
      description:
        'Custom JavaScript BST implementation with pretty-printing, recursive methods, and full CRUD support 🛠️. Inspired by Leetcode 450 and NeetCode’s patterns.',
      live: 'https://github.com/KARDT89/Binary-Search-Trees',
      github: 'https://github.com/KARDT89/Binary-Search-Trees',
      date: '',
    },
    {
      id: crypto.randomUUID(),
      name: 'ThunderCodeX',
      description: `Built a coding platform using Next.js where users solve algorithmic problems with real-time feedback and
                  progress tracking. Integrated Firebase for authentication and data storage, designed a responsive
                  dark-themed UI with Tailwind CSS, and deployed on Vercel for global availability and fast performance.`,
      live: 'https://github.com/KARDT89/Binary-Search-Trees',
      github: 'https://github.com/KARDT89/Binary-Search-Trees',
      date: '',
    },
    {
      id: crypto.randomUUID(),
      name: 'Weather App ⛅🌍',
      description:
        'A responsive weather forecasting app built using JavaScript and OpenWeatherMap API 🌦️. Lets users search any city and get real-time weather info including temperature, humidity, and sky conditions. Clean UI, minimal CSS, and async-fetch magic ✨.',
      live: 'https://kardt89.github.io/weather-app/', // Update if hosted somewhere else
      github: 'https://github.com/KARDT89/weather-app',
      date: '',
    },
  ]);
  let [skillsData, setSkillsData] = useState([
    {
      id: crypto.randomUUID(),
      category: 'Languages',
      skills: 'JavaScript, C++, Python, HTML, CSS',
    },
    {
      id: crypto.randomUUID(),
      category: 'Frameworks & Libraries',
      skills: 'React, Node.js, Tailwind CSS, Express',
    },
    {
      id: crypto.randomUUID(),
      category: 'Tools',
      skills: 'Git, GitHub, Vite, VS Code, Postman',
    },
    {
      id: crypto.randomUUID(),
      category: 'Certifications',
      skills: 'CS50x by Harvard University',
    },
    {
      id: crypto.randomUUID(),
      category: 'Achievements',
      skills:
        'Participated in an international event, “Overwatch World Cup,” representing India.',
    },
  ]);

  let [experienceData, setExperienceData] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Personal Dev Journey 🧗',
      position: 'Full Stack Dev (Self-Taught)',
      description:
        'Building projects daily 💪, learning from The Odin Project, solving Leetcode 📈, and exploring how AI blends with frontend apps 🤖.',
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
  function handleSkillsSubmit() {
    let obj = {
      id: crypto.randomUUID(),
      category: 'Untitled',
      skills: '',
    };
    setSkillsData([...skillsData, obj]);
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
  function handleSkillsDelete(id) {
    setSkillsData(skillsData.filter((item) => item.id !== id));
  }

  return (
    <>
      <Navbar
        general={generalData}
        experience={experienceData}
        projects={projectData}
        education={educationData}
        skills={skillsData}
      />
      <div className="flex xl:h-[calc(100vh-64px)]">
        <div className="hidden xl:flex overflow-y-auto max-h-screen xl:flex-col max-w-[500px] border-r-2 px-4 py-2">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className={'flex justify-between'}>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
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
                      className={'border-1 p-2.5 px-4 bg-accent'}
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
            <TabsContent value="skills" className="flex flex-col gap-2 my-auto">
              <Button onClick={handleSkillsSubmit}>Add Skills</Button>
              {skillsData.map((skills, idx) => (
                <Accordion type="single" collapsible key={skills.id}>
                  <AccordionItem value={`${skills.id}`}>
                    <AccordionTrigger
                      className={'border-1 p-2.5 px-4 bg-accent'}
                    >
                      {skills.category}
                    </AccordionTrigger>
                    <AccordionContent className={'pt-2 pb-0'}>
                      <SkillZ
                        data={skillsData}
                        setData={setSkillsData}
                        value={skills}
                        handleDelete={handleSkillsDelete}
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
            <AccordionItem value="item-5">
              <AccordionTrigger>Skills</AccordionTrigger>
              <AccordionContent>
                <Button onClick={handleProjectSubmit}>Add Skills</Button>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 gap-2'
                  }
                >
                  {skillsData.map((skills, idx) => (
                    <Accordion type="single" collapsible key={skills.id}>
                      <AccordionItem value={`${skills.id}`}>
                        <AccordionTrigger
                          className={'border-1 p-4 bg-accent rounded-md'}
                        >
                          {skills.category}
                        </AccordionTrigger>
                        <AccordionContent className={'pt-2 pb-0'}>
                          <SkillZ
                            data={skillsData}
                            setData={setSkillsData}
                            value={skills}
                            handleDelete={handleSkillsDelete}
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
            skills={skillsData}
          />
        </div>
      </div>
    </>
  );
}
