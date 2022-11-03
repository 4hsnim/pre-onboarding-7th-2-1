import React from "react";
import { useParams } from "react-router-dom";
import Atoms from "../atoms";
import Organisms from "../organisms";

const Template = ({ children }) => {
  const params = useParams();
  const header = params?.id ? (
    <Organisms.DetailHeader />
  ) : (
    <Organisms.MainHeader />
  );
  return (
    <>
      <Atoms.Container>
        {header}
        {children}
      </Atoms.Container>
    </>
  );
};

export default Template;
