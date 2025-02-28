import { FC } from "react";

const SignupHeader: FC = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
        Welcome to ElevanceNet
      </h1>
      <h3 className="text-base sm:text-lg md:text-2xl font-bold font-righteous">
        Connect, Collaborate, and Stay Focused
      </h3>
    </div>
  );
};

export default SignupHeader;
