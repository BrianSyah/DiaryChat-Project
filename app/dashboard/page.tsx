import CreateDiaryForm from "@/components/auth/CreateDiaryForm";
import Wrapper from "@/components/global/Wrapper";
import React from "react";

const page = (): React.ReactElement => {
  return (
    // Page utama Dashboard
    <Wrapper title="DASHBOARD">
      {/* Komponen CreateDiaryForm */}
      <CreateDiaryForm />
    </Wrapper>
  );
};

export default page;
