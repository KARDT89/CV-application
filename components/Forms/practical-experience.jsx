import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar22 } from '@/components/ui/date-picker';

const PracticalExperience = ({ data, setData }) => {
  console.log(data);

  return (
    <form
      action=""
      className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l"
    >
      <Label htmlFor="name" className="text-card-foreground">
        Company Name
      </Label>
      <Input
        name="name"
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <Label htmlFor="email" className="text-card-foreground">
        Position Title
      </Label>
      <Input
        name="email"
        type="email"
        onChange={(e) => setData({ ...data, position: e.target.value })}
      />
      <Label htmlFor="description" className="text-card-foreground">
        Description
      </Label>
      <Textarea
        className={'border-foreground/20'}
        onChange={(e) => setData({ ...data, description: e.target.value })}
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

export default PracticalExperience;

function covertDate(date) {
  let newDate = date.split(' ');
  let result = newDate[1] + newDate[3];
  return result;
}
