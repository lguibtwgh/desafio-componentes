import { Card } from '..';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("CardName", () => {
  it("should render CardName component properly", () => {
    render(
      <Card.Name text='any_name' />
    );
    screen.getByText("any_name");
    screen.getByTestId("card-name");
  });
});