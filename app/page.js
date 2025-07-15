import GeneralInformation from "../components/Forms/GeneralInformation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import EducationalExperience from "@/components/Forms/educational-experience";
import PracticalExperience from "@/components/Forms/practical-experience";
import Projects from "@/components/Forms/projects";

export default function Home() {
    return (
        <div className="flex min-h-screen">
            <div className="flex flex-col min-w-[300px] border-r-2 px-4 py-2">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className={'flex justify-between'}>
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>

                    </TabsList>
                    <TabsContent value="general"><GeneralInformation/></TabsContent>
                    <TabsContent value="education"><EducationalExperience/></TabsContent>
                    <TabsContent value="projects"><Projects/></TabsContent>
                    <TabsContent value="experience"><PracticalExperience/></TabsContent>

                </Tabs>
            </div>

            <div className="flex-1 bg-secondary">test</div>
        </div>
    );
}
