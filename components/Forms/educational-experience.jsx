import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar22 } from '@/components/ui/date-picker';

const EducationalExperience = ({ data, setData }) => {
  return (
    <form className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l">
      <Label htmlFor="name-study" className="text-card-foreground">
        School name
      </Label>
      <Input
        name="name-study"
        type="text"
        onChange={(e) => setData({ ...data, school: e.target.value })}
      />
      <Label htmlFor="title-study" className="text-card-foreground">
        Title of study
      </Label>
      <Input
        name="title-study"
        type="text"
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <div className={'flex justify-between'}>
        <Calendar22
          label={'From'}
          onChange={(e) => setData({ ...data, from: e.getUTCFullYear() })}
        />
        <Calendar22
          label={'To'}
          onChange={(e) => setData({ ...data, to: e.getUTCFullYear() })}
        />
      </div>
      <span className="pt-4">
        <Button type="submit">Add</Button>
      </span>
    </form>
  );
};

export default EducationalExperience;
