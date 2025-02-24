import { FC } from "react";

const SignupHeader: FC = () => {
  return (
    <>
      <section>
        <div className="flex justify-center flex-col items-center gap-3">
          <h1 className="text-5xl font-extrabold">Welcome to ElevanceNet</h1>
          <h3 className="text-2xl font-bold font-righteous">
            Connect, Collaborate, and Stay Focused
          </h3>
        </div>
      </section>
    </>
  );
};

export default SignupHeader;
