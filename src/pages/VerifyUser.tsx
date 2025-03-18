import { FC } from "react";
import PageTitle from "../utils/PageTitle";
import AuthPageFooter from "../components/AuthPageFooter";
import Verify from "../features/verifyUserAccount/components/Verify";

const VerifyUser: FC = () => {
  return (
    <>
      <PageTitle
        key={"verifyUserAccount"}
        title="Verify User"
        description="its user account activation or verification page"
      />
      <section>
        <div className="flex flex-col justify-center items-center h-screen px-[10px]">
          <Verify />
          <AuthPageFooter />
        </div>
      </section>
    </>
  );
};

export default VerifyUser;
