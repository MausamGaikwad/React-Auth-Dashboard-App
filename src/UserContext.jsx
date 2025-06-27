import { createContext, useState } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function logIn() {
    const name = prompt("Enter Your Name:- ");
    if (name) {
      setUser(name);
    }
  }
  function logOut() {
    setUser(null);
  }
  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
