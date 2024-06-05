import { charactersMock } from '@/app/modules/characters/__mocks__/charactersMock';
import { Card } from '..';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const firstCharacter = charactersMock[0];

describe("CardSeries", () => {
  it('Should render CardSeries with the correct events', () => {
    render(
      <Card.Series series={firstCharacter.series} />
    );

    const series = screen.getByTestId("card-series");
    const serie = screen.getAllByTestId("card-serie");

    firstCharacter.series.map(serie => {
      screen.getByText(serie);
    })

    expect(series).toBeInTheDocument();
    expect(serie).toHaveLength(firstCharacter.series.length);
  });

});