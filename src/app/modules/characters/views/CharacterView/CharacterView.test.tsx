import { CharacterView } from '@/app/modules/characters/views/CharacterView';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { charactersMock } from '../../__mocks__/charactersMock';

describe("CharacterView", () => {
  it("should render CharacterView properly", () => {
    render(<CharacterView />);
    expect(screen.getByText("Busca de personagens"))

    screen.getByTestId("header");
    screen.getByTestId("content");
    screen.getByTestId("footer");
    screen.getByTestId("pagination");
  });
});

describe("CharacterView interaction with Input component", () => {
  it("should render correct result with search term", () => {
    render(<CharacterView />);

    // Integração do input de busca com o resultado único apresentado em tela
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: 'Abner Jenkins' } })

    screen.getByText("Abner Jenkins");

    const character = screen.getAllByTestId("card-root");
    expect(character).toHaveLength(1);
  });
});


describe("CharacterView interaction with Pagination component", () => {
  it("should show the correct page when interacting with pagination (go-to-last-page)", () => {
    render(<CharacterView />);

    const goToLastPageButton = screen.getByTestId("go-to-last-page");
    fireEvent.click(goToLastPageButton);

    screen.getByText(charactersMock[charactersMock.length - 1].name);
  });

  it("should show the correct page when interacting with pagination (go-to-first-page)", () => {
    render(<CharacterView />);

    // Considering pagination starts with 1 value, we will click on next button to show the prev buttons.
    const goToNextPageButton = screen.getByTestId("go-to-next-page");
    fireEvent.click(goToNextPageButton);

    // Then the button to go to the first page will appear.
    const goToFirstPageButton = screen.getByTestId("go-to-first-page");
    fireEvent.click(goToFirstPageButton);
    screen.getByText(charactersMock[0].name);
  });

  it("considering the number per page is 4, should show the correct values when click prev and next", () => {
    render(<CharacterView />);
    const goToNextPageButton = screen.getByTestId("go-to-next-page");

    fireEvent.click(goToNextPageButton);
    screen.getByText(charactersMock[5].name);

    // After leaving page 1, the prev buttons shows up
    const goToPrevPageButton = screen.getByTestId("go-to-prev-page");

    fireEvent.click(goToPrevPageButton);
    screen.getByText(charactersMock[0].name);
  });
});