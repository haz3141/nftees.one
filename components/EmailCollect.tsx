import {Button, Label, TextInput} from 'flowbite-react';
import React from 'react';

const EmailCollect = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="text-white mb-2 block">
          <Label htmlFor="email1">
            <div className="text-white">Your email</div>
          </Label>
        </div>
        <TextInput
          disabled
          id="email1"
          type="email"
          placeholder="satoshi@bitcoin.com"
          required
        />
      </div>
      <Button disabled type="submit">
        Submit
      </Button>
    </form>
  );
};

export default EmailCollect;
