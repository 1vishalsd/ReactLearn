import React, { Children } from "react";

import UserContext from "./userContext";

const UserContextProvider = (Children) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider valure={{ user, setUser }}>
      {Children}
    </UserContext.Provider>
  );
};
