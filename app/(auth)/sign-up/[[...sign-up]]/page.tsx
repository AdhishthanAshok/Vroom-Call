import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex my-5 h-full w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
