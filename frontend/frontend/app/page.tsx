"use client";

import Body from "./Body";
import NavBar from "./NavBar";
import useAuth from "./useAuth";

export default function Home() {

  const isAuthenticated = useAuth();

  return (
    <>
      <NavBar display={!isAuthenticated} />
      <Body />
    </>
  );
}
