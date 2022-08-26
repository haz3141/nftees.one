import {FormEvent} from 'react';

const EmailForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailInput = (event.target as HTMLFormElement).email.value;
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(emailInput),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async res => {
      if (res.status === 201) {
        await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify(emailInput),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => {
          console.log(res.status);
        });
      }
    });
  };

  return (
    <div className="block m-6 p-6 rounded-lg shadow-lg bg-white">
      <form method="POST" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="mb-2">Subscribe to our newslettergit </legend>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Email must be in a valid format: name@domain.xy"
              placeholder="Email address"
              required
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:outline-none focus:shadow-[0px_0px_0px_2px_rgba(0,170,255,1)]
              focus:[&:not(:placeholder-shown)]:invalid:shadow-[0px_0px_0px_2px_rgba(255,0,147,.7)]
              focus:valid:shadow-[0px_0px_0px_2px_rgba(96,223,137,.5)]
              "
            />
          </div>
          <button
            type="submit"
            className="w-full
            mt-3
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
          >
            Subscribe
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default EmailForm;
