import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar22 } from '@/components/ui/date-picker';

const PracticalExperience = () => {
  return (
    <form
      action=""
      className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l"
    >
      <Label htmlFor="name" className="text-card-foreground">
        Company Name
      </Label>
      <Input name="name" type="text" />
      <Label htmlFor="email" className="text-card-foreground">
        Position Title
      </Label>
      <Input name="email" type="email" />
      <Label htmlFor="description" className="text-card-foreground">
        Description
      </Label>
      <Textarea className={'border-foreground/20'} />
      <div className={'flex justify-between'}>
        <Calendar22 label={'From'} />
        <Calendar22 label={'To'} />
      </div>
      <span className="pt-4">
        <Button type="submit">Add</Button>
      </span>
    </form>
  );
};

export default PracticalExperience;
