import React from "react";

export const Hello = (name: string) => {
  const greeting = `Hello ${name}`;

  return (<h1>{greeting}</h1>);
};