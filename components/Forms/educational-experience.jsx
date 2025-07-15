import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Calendar22} from "@/components/ui/date-picker";

const EducationalExperience = () => {
    return (
        <form className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l">
            <Label htmlFor="name-study" className="text-card-foreground">School name</Label>
            <Input name="name-study" type="text"/>
            <Label htmlFor="title-study" className="text-card-foreground">Title of study</Label>
            <Input name="title-study" type="text"/>
            <div className={'flex justify-between'}>
                <Calendar22 label={'From'}/>
                <Calendar22 label={'To'}/>
            </div>

            <span className="pt-4">
            <Button type="submit">Add</Button>
            </span>
        </form>
    );
};

export default EducationalExperience;