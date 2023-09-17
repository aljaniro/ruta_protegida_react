import React, { createContext, useState } from "react";
export const DataContext = createContext();


export const LoginData = ({ children }) => {
  const [user, setuser] = useState(
   

  );
    console.log(user)
  return (
    <DataContext.Provider value={{ user, setuser }}>
      {children}
    </DataContext.Provider>
  );
};
