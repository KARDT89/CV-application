'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const GeneralInformation = () => {
  let [generalData, setGeneralData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  let [data, setData] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      method="post"
      className="flex flex-col bg-card max-w-sm p-6 gap-3 border border-foreground/20 rounded-l"
      onSubmit={handleSubmit}
    >
      <Label htmlFor="name" className="text-card-foreground">
        Name
      </Label>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={(e) =>
          setGeneralData({ ...generalData, name: e.target.value })
        }
      />
      <Label htmlFor="email" className="text-card-foreground">
        Email
      </Label>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={(e) =>
          setGeneralData({ ...generalData, email: e.target.value })
        }
      />
      <Label htmlFor="phone" className="text-card-foreground">
        Phone Number
      </Label>
      <Input
        id="phone"
        name="phone"
        type="number"
        onChange={(e) =>
          setGeneralData({
            ...generalData,
            phoneNumber: e.target.value,
          })
        }
      />
      <span className="pt-4">
        <Button type="submit">Submit</Button>
      </span>
    </form>
  );
};

export default GeneralInformation;
