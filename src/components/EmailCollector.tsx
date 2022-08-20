import {Button, Label, TextInput} from 'flowbite-react';
import React from 'react';

const EmailCollector = () => {
  return (
    <form>
      <div>
        <Label htmlFor="email1">
          <div className="text-white">Your email</div>
        </Label>
        <TextInput
          id="email1"
          type="email"
          placeholder="satoshin@gmx.com"
          required
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default EmailCollector;
