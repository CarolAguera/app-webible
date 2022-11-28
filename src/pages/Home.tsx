import React, { useState } from "react";
import AccordionBody from "../components/AccordionBody/AccordionBody";
import { Header } from "../components/Header/Header";
import { Book } from "../types";

export const Home = () => {
  const [livros, setLivros] = useState<Book[]>([]);

  return (
    <React.Fragment>
      <Header setLivros={setLivros} />
      <AccordionBody livros={livros} />
    </React.Fragment>
  );
};
