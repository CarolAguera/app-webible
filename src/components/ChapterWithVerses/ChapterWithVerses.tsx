import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { searchChapters } from "../../api/searchChapters";
import { Chapters, Verses } from "../../types";

export default function ChapterWithVerses() {
  const [capitulos, setCapitulos] = useState<Chapters>();

  let { bookName, cap } = useParams();

  const searchChapter = async (bookName: string, cap: string) => {
    const data = await searchChapters(bookName, parseInt(cap));

    return setCapitulos(data);
  };

  useEffect(() => {
    searchChapter(bookName!, cap!);
  }, []);

  return (
    <Container>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col
          style={{ display: "flex", justifyContent: "flex-start", padding: 0 }}
        >
          <Form.Label style={{ fontWeight: 600, fontSize: "30px" }}>
            {capitulos?.book.name}
          </Form.Label>
        </Col>
        <Col
          style={{ display: "flex", justifyContent: "flex-end", padding: 0 }}
        >
          <Button variant="outline-primary" size="sm" href="/">
            Retornar a Página Inicial
          </Button>
        </Col>
      </Row>
      {capitulos?.verses.map((versiculo: Verses) => (
        <Row style={{ marginBottom: "10px" }}>
          <Card style={{ width: "100%" }} border="dark">
            <ListGroup variant="flush">
              <ListGroup.Item>
                {versiculo.number} - {versiculo.text}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
      ))}
    </Container>
  );
}
