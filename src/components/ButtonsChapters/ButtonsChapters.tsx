import { getButtonsChapters } from "../../utils/getButtonsChapters";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container,
  Row,
} from "react-bootstrap";
import { Book, ButtonsChaptersProps } from "../../types";

export default function ButtonsChapters({ book }: ButtonsChaptersProps) {
  return (
    <ButtonToolbar aria-label="group-buttons">
      <Container>
        <Row xs={2} md={4} lg={6}>
          {getButtonsChapters(book.chapters).map(
            (cap: number, index: number) => (
              <ButtonGroup key={index} size="lg" style={{ padding: "10px" }}>
                <Button
                  variant="outline-dark"
                  size="lg"
                  href={`/chapters/${book.abbrev.pt}/${cap}`}
                >
                  {cap}
                </Button>
              </ButtonGroup>
            )
          )}
        </Row>
      </Container>
    </ButtonToolbar>
  );
}
