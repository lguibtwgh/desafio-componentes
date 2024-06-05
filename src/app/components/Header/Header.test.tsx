import { Header } from './Header';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render page header", () => {
    render(<Header />);
    expect(screen.getByText("Luiz Guilherme Pessoa da Silva"))
    expect(screen.getByText("Teste de Front-end"))
  });
});