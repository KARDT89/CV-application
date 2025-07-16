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
import Cv from "@/components/preview/cv";

export default function Home() {

  let [generalData, setGeneralData] = useState({
        name: "Tamal Sarkar",
        email: "tamalsarkartwoooo@gmail.com",
        phoneNumber: 123456789,
        about: "test about",
    });

  let [educationData, setEducationData] = useState({
    school: '',
    title: '',
    from: '',
    to: '',
  });

  let [projectData, setProjectData] = useState({
    name: '',
    description: '',
    live: '',
    github: '',
  });

  let [experienceData, setExperienceData] = useState({
    name: '',
    position: '',
    description: '',
    from: '',
    to: '',
  });

  return (
    <div className="flex min-h-screen">
      <div className="hidden xl:flex xl:flex-col min-w-[300px] border-r-2 px-4 py-2">
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
          <TabsContent value="education">
            <EducationalExperience
              data={educationData}
              setData={setEducationData}
            />
          </TabsContent>
          <TabsContent value="projects">
            <Projects data={projectData} setData={setProjectData} />
          </TabsContent>
          <TabsContent value="experience">
            <PracticalExperience
              data={experienceData}
              setData={setExperienceData}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex-1 xl:hidden bg-secondary px-4 ">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>General</AccordionTrigger>
            <AccordionContent className={'w-full'}>
              <GeneralInformation data={generalData} setData={setGeneralData}/>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Education</AccordionTrigger>
            <AccordionContent>
              <EducationalExperience
                data={educationData}
                setData={setEducationData}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>Projects</AccordionTrigger>
            <AccordionContent>
              <Projects data={projectData} setData={setProjectData} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>Experience</AccordionTrigger>
            <AccordionContent>
              <PracticalExperience
                data={experienceData}
                setData={setExperienceData}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={'hidden xl:flex xl:flex-1 xl:items-center xl:justify-center'}>
        <Cv generalData={generalData}/>
      </div>
    </div>

  );
}
