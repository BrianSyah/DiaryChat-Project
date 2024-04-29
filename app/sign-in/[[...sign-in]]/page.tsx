import React from "react";
import { SignIn } from "@clerk/nextjs";

// Kompoenen SignIn Dri Clerk
const page = (): React.ReactElement => {
  return (
    <div className="flex justify-center items-center pt-16">
      {/* SignIn Dri Clerk */}
      <SignIn />
    </div>
  );
};

export default page;
