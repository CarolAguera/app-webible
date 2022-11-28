export type Book = {
  abbrev: {
    pt: string;
    en: string;
  };
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: string;
};

export type AccordionBodyProps = {
  livros: Book[];
};

export type ButtonsChaptersProps = {
  book: Book;
};

export type Chapters = {
  book: Book;
  chapter: {
    number: number;
    verses: number;
  };
  verses: Verses[];
};

export type Verses = {
  number: number;
  text: string;
};
