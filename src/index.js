import React from "react";
import { render } from "react-dom";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";
import "./index.css";

function App() {
  return (
    <>
      <Container className="ui-container">
        <Link className="ui-link" href="https://moscoding.ru">
          Наделай шуму в индустрии!
        </Link>
        <Input className="ui-input" placeholder="text" name="email" />
        <Button onclassName={true} disabled={true}>
          Подписаться
        </Button>
      </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));
