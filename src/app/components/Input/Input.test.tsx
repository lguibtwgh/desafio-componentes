import { charactersMock } from '@/app/modules/characters/__mocks__/charactersMock';
import { Input } from './Input';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { CharacterView } from '@/app/modules/characters/views/CharacterView';

const renderInput = (): void => {
  render(<Input onChange={() => { }} placeholder="any_placeholder" title="any_title" value="any_value" />);
}

describe("CardList", () => {
  it("should render Input component properly", () => {
    renderInput();
    expect(screen.getByDisplayValue('any_value')).toBeInTheDocument();
  });

  it("should render correct result when input changes (help with the view)", () => {
    render(<CharacterView />);

    // Integração do input de busca com o resultado único apresentado em tela
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: charactersMock[0].name } })

    screen.getByText("Abner Jenkins");

    const character = screen.getAllByTestId("card-root");
    expect(character).toHaveLength(1);

    expect(screen.getByDisplayValue(charactersMock[0].name.toLowerCase())).toBeInTheDocument();
  });
});