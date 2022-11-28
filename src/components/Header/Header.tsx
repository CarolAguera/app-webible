import { useEffect } from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import { searchBook } from "../../api/searchBook";
import { Book } from "../../types";

export type HeaderProps = {
  setLivros?: React.Dispatch<React.SetStateAction<Book[]>>;
};

export const Header = ({ setLivros }: HeaderProps) => {
  const searchBooks = async () => {
    const books = await searchBook();
    if (setLivros) {
      return setLivros(books);
    }
  };

  useEffect(() => {
    searchBooks();
  }, []);
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" variant="dark" style={{ marginBottom: "15px" }}>
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="ícone da biblia"
                src="/images/bible.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              WeBible
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};
