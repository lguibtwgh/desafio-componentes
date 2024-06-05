import { charactersMock } from '@/app/modules/characters/__mocks__/charactersMock';
import { CardList } from './CardList';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("CardList", () => {
  it("should render CardList component properly", () => {
    render(<CardList cardList={charactersMock} />);
    expect(screen.getByText("Personagem"))
    expect(screen.getByText("Séries"))
    expect(screen.getByText("Eventos"))
    const cards = screen.getAllByTestId("card-root");
    expect(cards).toHaveLength(charactersMock.length);
  });
});