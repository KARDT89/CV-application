import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Projects = ({ data, setData }) => {
  return (
    <form
      action=""
      className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l"
    >
      <Label htmlFor="name" className="text-card-foreground">
        Name
      </Label>
      <Input
        name="name"
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <Label htmlFor="description" className="text-card-foreground">
        Description
      </Label>
      <Textarea
        name="description"
        className={'border-foreground/20'}
        onChange={(e) =>
          setProjectData({ ...projectData, description: e.target.value })
        }
      />
      <Label htmlFor="live" className="text-card-foreground">
        Live Link
      </Label>
      <Input
        name="live"
        type="text"
        onChange={(e) => setData({ ...data, live: e.target.value })}
      />
      <Label htmlFor="github" className="text-card-foreground">
        Github Link
      </Label>
      <Input
        name="github"
        type="text"
        onChange={(e) => setData({ ...data, github: e.target.value })}
      />

      <span className="pt-4">
        <Button type="submit">Add</Button>
      </span>
    </form>
  );
};

export default Projects;
