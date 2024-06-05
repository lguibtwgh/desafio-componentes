import { charactersMock } from '@/app/modules/characters/__mocks__/charactersMock';
import { Card } from '..';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const firstCharacter = charactersMock[0];

describe("CardRoot", () => {
  it("should render CardRoot component properly", () => {
    render(
      <Card.Root>
        <Card.ImageAndName>
          <Card.Image src={firstCharacter.avatar} />
          <Card.Name text={firstCharacter.name} />
        </Card.ImageAndName>
        <Card.Series series={firstCharacter.series} />
        <Card.Events events={firstCharacter.events} />
      </Card.Root>
    );
    screen.getByTestId("card-root");
  });
});