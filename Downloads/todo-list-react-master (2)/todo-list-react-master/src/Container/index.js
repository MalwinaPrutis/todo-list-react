import React from "react";
import "./styled.js";

const Container = ({ children }) => (
  <main className="todoContainer">{children}</main>
);

export default Container;