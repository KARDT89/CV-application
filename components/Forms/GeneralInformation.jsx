import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Label } from "@/components/ui/label"

const GeneralInformation = () => {
    return (
        <form action="" className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l">
            <Label htmlFor="name" className="text-card-foreground">Name</Label>
            <Input name="name" type="text"/>
            <Label htmlFor="email" className="text-card-foreground">Email</Label>
            <Input name="email" type="email"/>
            <Label htmlFor="phone" className="text-card-foreground">Phone Number</Label>
            <Input name="phone" type="number"/>
            <span className="pt-4">
            <Button type="submit">Submit</Button>
            </span>
        </form>
    );
};

export default GeneralInformation;
