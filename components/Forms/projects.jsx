import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Trash2 } from 'lucide-react';

const Projects = ({ data, setData, value: project, handleDelete }) => {
  const updateField = (id, field, value) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };
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
        value={project.name}
        onChange={(e) => updateField(project.id, 'name', e.target.value)}
      />
      <Label htmlFor="description" className="text-card-foreground">
        Description
      </Label>
      <Textarea
        name="description"
        value={project.description}
        className={'border-foreground/20'}
        onChange={(e) => updateField(project.id, 'description', e.target.value)}
      />
      <Label htmlFor="live" className="text-card-foreground">
        Live Link
      </Label>
      <Input
        name="live"
        type="text"
        value={project.live}
        onChange={(e) => updateField(project.id, 'live', e.target.value)}
      />
      <Label htmlFor="github" className="text-card-foreground">
        Github Link
      </Label>
      <Input
        name="github"
        type="text"
        value={project.github}
        onChange={(e) => updateField(project.id, 'github', e.target.value)}
      />
      <Button variant={'ghost'} onClick={() => handleDelete(project.id)}>
        Delete
        <Trash2 />
      </Button>
    </form>
  );
};

export default Projects;
