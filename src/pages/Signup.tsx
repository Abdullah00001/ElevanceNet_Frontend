import { FC } from "react";
import PageTitle from "../utils/PageTitle";
import SignupHeader from "../features/signup/components/SignupHeader";
import SignupForm from "../features/signup/components/SignupForm";
import FieldErrorProvider from "../features/signup/providers/FieldErrorProvider";
import AuthPageFooter from "../components/AuthPageFooter";

const Signup: FC = () => {
  return (
    <>
      <PageTitle key={"signup"} title="Signup" description="its signup page" />
      <section>
        <div className="flex flex-col justify-center items-center h-screen">
          <SignupHeader />
          <FieldErrorProvider>
            <SignupForm />
          </FieldErrorProvider>
          <AuthPageFooter />
        </div>
      </section>
    </>
  );
};

export default Signup;
