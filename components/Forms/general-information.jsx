import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '../ui/textarea';
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const GeneralInformation = ({ data, setData }) => {
  return (
    <form
      method="post"
      className="flex flex-col bg-card w-full p-6 gap-3 border border-foreground/20 rounded-l"
    >
      <Label htmlFor="name" className="text-card-foreground">
        Name
      </Label>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
        value={data.name}
      />
      <Label htmlFor="email" className="text-card-foreground">
        Email
      </Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Label htmlFor="phone" className="text-card-foreground">
        Phone Number
      </Label>
      <Input
        id="phone"
        name="phone"
        type="number"
        value={data.phoneNumber}
        onChange={(e) =>
          setData({
            ...data,
            phoneNumber: e.target.value,
          })
        }
      />
      
      <Label htmlFor="name" className="text-card-foreground flex gap-2 items-center">
        LinkedIn <FaLinkedin />
      </Label>
      <Input
        id="linkedin"
        name="linkedin"
        type="text"
        onChange={(e) => setData({ ...data, linkedin: e.target.value })}
        value={data.linkedin}
      />
      <Label
        htmlFor="name"
        className="text-card-foreground flex gap-2 items-center"
      >
        Github <FaGithub />
      </Label>
      <Input
        id="github"
        name="github"
        type="text"
        onChange={(e) => setData({ ...data, github: e.target.value })}
        value={data.github}
      />
      <Label
        htmlFor="name"
        className="text-card-foreground flex gap-2 items-center"
      >
        Twitter <FaXTwitter/>
      </Label>
      <Input
        id="x"
        name="x"
        type="text"
        onChange={(e) => setData({ ...data, x: e.target.value })}
        value={data.x}
      />
      <Label htmlFor="description" className="text-card-foreground">
        About
      </Label>
      <Textarea
        className={'border-foreground/20'}
        value={data.about}
        onChange={(e) => setData({ ...data, about: e.target.value })}
      />
    </form>
  );
};

export default GeneralInformation;
