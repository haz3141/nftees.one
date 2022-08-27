import {FormEvent, useState} from 'react';

const Header = ({subscriptionStatus}: {subscriptionStatus: boolean}) => {
  return (
    <h2
      className="text-center tracking-wider
        text-black font-semibold text-lg md:text-2xl pb-3"
    >
      {subscriptionStatus ? `Thank you for` : `Subscribe to get the latest`}{' '}
      <span className="text-orange-400">
        {subscriptionStatus ? `joining our journey` : `news & updates`}
      </span>
      .
    </h2>
  );
};

const Button = ({
  loadingStatus,
  subscriptionStatus,
}: {
  loadingStatus: boolean;
  subscriptionStatus: boolean;
}) => {
  return (
    <button
      type="submit"
      disabled={loadingStatus && subscriptionStatus}
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
      {loadingStatus
        ? `Loading`
        : subscriptionStatus
        ? `Welcome Email Sent`
        : `Subscribe`}
    </button>
  );
};

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email: (event.target as HTMLFormElement).email.value,
    };
    const payload = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setIsLoading(true);

    await fetch('/api/users', payload).then(async res => {
      res.json();
      if (res.status === 201) {
        await fetch('/api/mail', payload).then(async res => {
          if (res.status === 202) {
            setIsSubscribed(true);
            (event.target as HTMLFormElement).email.value = '';
            setIsLoading(false);
          }
        });
      }
    });
  };

  return (
    <div
      className="relative box-border m-6 mt-3 pt-4 p-5
      rounded-lg shadow-lg
      bg-white"
    >
      <label htmlFor="email">
        <Header subscriptionStatus={isSubscribed} />
      </label>
      <form method="POST" onSubmit={handleSubmit}>
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
        <Button loadingStatus={isLoading} subscriptionStatus={isSubscribed} />
      </form>
    </div>
  );
};

export default EmailForm;
