import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Check, Trash2 } from 'lucide-react';

const SkillZ = ({ data, setData, value: skills, handleDelete }) => {
  const updateField = (id, field, value) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };
  return (
    <form
      action=""
      className="flex flex-col bg-card w-full p-6 gap-3 border border-foreground/20 rounded-l"
    >
      <Label htmlFor="name" className="text-card-foreground">
        Category
      </Label>
      <Input
        name="name"
        type="text"
        value={skills.category}
        onChange={(e) => updateField(skills.id, 'category', e.target.value)}
      />
      <Label htmlFor="description" className="text-card-foreground">
        Skills
      </Label>
      <Textarea
        name="description"
        value={skills.skills}
        className={'border-foreground/20'}
        onChange={(e) => updateField(skills.id, 'skills', e.target.value)}
      />
      <div className="flex justify-between pt-4">
        <span>
          <Button variant={'delete'} onClick={() => handleDelete(skills.id)}>
            Delete
            <Trash2 />
          </Button>
        </span>
        <span>
          <Button>
            Save
            <Check />
          </Button>
        </span>
      </div>
    </form>
  );
};

export default SkillZ;
