import { charactersMock } from '@/app/modules/characters/__mocks__/charactersMock';
import { Card } from '..';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const firstCharacter = charactersMock[0];

describe("CardEvents", () => {
  it('Should render CardEvents with the correct events', () => {
    render(
      <Card.Events events={firstCharacter.events} />
    );

    const events = screen.getByTestId("card-events");
    const event = screen.getAllByTestId("card-event");

    firstCharacter.events.map(event => {
      screen.getByText(event);
    })

    expect(events).toBeInTheDocument();
    expect(event).toHaveLength(firstCharacter.events.length);
  });

});