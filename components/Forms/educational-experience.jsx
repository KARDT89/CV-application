import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar22 } from '@/components/ui/date-picker';
import { Check, Trash2 } from 'lucide-react';

const EducationalExperience = ({ data, setData, value: edu, handleDelete }) => {
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
      <div className="flex justify-between items-center">
        <Label htmlFor="name-study" className="text-card-foreground">
          Organization
        </Label>
      </div>
      <Input
        name="name-study"
        type="text"
        // onChange={(e) => setData({ ...data, school: e.target.value })}
        onChange={(e) => updateField(edu.id, 'school', e.target.value)}
        value={edu.school}
      />
      <Label htmlFor="title-study" className="text-card-foreground">
        Curriculum
      </Label>
      <Input
        name="title-study"
        type="text"
        value={edu.title}
        onChange={(e) => updateField(edu.id, 'title', e.target.value)}
      />
      <div className={'flex justify-between'}>
        <Calendar22
          label={'From'}
          value={edu.from}
          // onChange={(e) => setData({ ...data, from: e.getUTCFullYear() })}
          onChange={(e) => updateField(edu.id, 'from', e)}
        />
        <Calendar22
          label={'To'}
          value={edu.to}
          // onChange={(e) => setData({ ...data, to: e.getUTCFullYear() })}
          onChange={(e) => updateField(edu.id, 'to', e)}
        />
      </div>
      <div className="flex justify-between pt-4">
        <span>
          <Button variant={'delete'} onClick={() => handleDelete(edu.id)}>
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

export default EducationalExperience;
