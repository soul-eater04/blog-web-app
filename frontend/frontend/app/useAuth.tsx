import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("from ls");
    setIsAuthenticated(!!accessToken);
  }, []);

  return isAuthenticated;
};

export default useAuth;
