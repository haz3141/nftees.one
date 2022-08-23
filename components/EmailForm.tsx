import {FormEvent} from 'react';

const SingleForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailInput = (event.target as HTMLFormElement).email.value;
    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(emailInput),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data); // Need to do something with response from server
  };

  return (
    <div className="block m-6 p-6 rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className="form-group form-check mt-3 text-center mb-5">
          <input
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            name="agreeTOS"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="agreeTOS"
          >
            I have read and agree to the terms
          </label>
        </div>
        <button
          type="submit"
          className="w-full
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
      </form>
    </div>
  );
};

export default SingleForm;
