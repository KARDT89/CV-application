import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Projects = () => {
  return (
    <form
      action=""
      className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l"
    >
      <Label htmlFor="name" className="text-card-foreground">
        Name
      </Label>
      <Input name="name" type="text" />
      <Label htmlFor="description" className="text-card-foreground">
        Description
      </Label>
      <Textarea className={'border-foreground/20'} />
      <Label htmlFor="email" className="text-card-foreground">
        Live Link
      </Label>
      <Input name="live" type="text" />
      <Label htmlFor="phone" className="text-card-foreground">
        Github Link
      </Label>
      <Input name="github" type="text" />

      <span className="pt-4">
        <Button type="submit">Add</Button>
      </span>
    </form>
  );
};

export default Projects;
