import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar22 } from '@/components/ui/date-picker';
import { Check, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const PracticalExperience = ({
  data,
  setData,
  value: exp,
  handleDelete,
  handleSave,
}) => {
  const updateField = (id, field, value) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast('Successfully Saved');
        // handleSave();
      }}
      action=""
      className="flex flex-col bg-card w-full p-6 gap-3 border border-foreground/20 rounded-l"
    >
      <Label htmlFor="name" className="text-card-foreground">
        Company Name
      </Label>
      <Input
        name="name"
        type="text"
        value={exp.name}
        onChange={(e) => updateField(exp.id, 'name', e.target.value)}
      />
      <Label htmlFor="email" className="text-card-foreground">
        Position Title
      </Label>
      <Input
        name="position"
        type="text"
        value={exp.position}
        onChange={(e) => updateField(exp.id, 'position', e.target.value)}
      />
      <Label htmlFor="description" className="text-card-foreground">
        Description
      </Label>
      <Textarea
        className={'border-foreground/20'}
        value={exp.description}
        onChange={(e) => updateField(exp.id, 'description', e.target.value)}
      />
      <div className={'flex justify-between'}>
        <Calendar22
          label={'From'}
          value={exp.from}
          onChange={(e) => updateField(exp.id, 'from', e.toJSON())}
        />
        <Calendar22
          label={'To'}
          value={exp.to}
          onChange={(e) => updateField(exp.id, 'to', e.toJSON())}
        />
      </div>
      <div className="flex justify-between pt-4">
        <span>
          <Button variant={'delete'} onClick={() => handleDelete(exp.id)}>
            Delete
            <Trash2 />
          </Button>
        </span>
        <span>
          <Button onClick={handleSave}>
            Save
            <Check />
          </Button>
        </span>
      </div>
    </form>
  );
};

export default PracticalExperience;
