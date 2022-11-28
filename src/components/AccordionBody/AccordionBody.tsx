import {
  Accordion,
  Container,
  Row,
} from "react-bootstrap";
import { AccordionBodyProps, Book } from "../../types";
import ButtonsChapters from "../ButtonsChapters/ButtonsChapters";


export default function AccordionBody({ livros }: AccordionBodyProps) {
  return (
    <Container>
      <Row>
        {livros?.map((book: Book, index: number) => (
          <Accordion key={index} style={{ paddingBottom: "15px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Livro: {book.name}</Accordion.Header>
              <Accordion.Body>
                Abreviação: Portugues: {book.abbrev.pt} | Ingles:{" "}
                {book.abbrev.en}
              </Accordion.Body>
              <Accordion.Body>Autor: {book.author}</Accordion.Body>
              <Accordion.Body>Capítulos: {book.chapters}</Accordion.Body>
              <Accordion.Body>Grupo que Pertence: {book.group}</Accordion.Body>
              <Accordion.Body>
                Em qual Testamento está: {book.testament}
              </Accordion.Body>
              <Accordion.Body>
                <ButtonsChapters book={book} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Row>
    </Container>
  );
}
