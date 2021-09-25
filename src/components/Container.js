import React from "react";

import Container from "@material-ui/core/Container";

const MainContainer = (props) => {
  return (
    <Container component="main" maxWidth="xs" {...props}>
      {props.children}
    </Container>
  );
};

export default MainContainer;
