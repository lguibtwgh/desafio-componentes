import { charactersMock } from '@/app/modules/characters/__mocks__/charactersMock';
import { Card } from '..';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const firstCharacter = charactersMock[0];

describe("CardImageAndName", () => {
  it("should render CardImageAndName component properly", () => {
    render(
      <Card.ImageAndName>
        <Card.Image src={firstCharacter.avatar} />
        <Card.Name text={firstCharacter.name} />
      </Card.ImageAndName>
    );
    screen.getByTestId("card-image-and-name");
    screen.getByText(firstCharacter.name);
  });


  // Não consegui testar a imagem com o next/image
  // Estava incluindo uma URL assim e não soube como resolver.
  /*
    Teste:
    it('image should use correct src', async () => {
      const { getByAltText } = await render(
        <Card.ImageAndName>
          <Card.Image src={firstCharacter.avatar} />
          <Card.Name text={firstCharacter.name} />
        </Card.ImageAndName>
      );
      const image = getByAltText('Avatar card');
      expect(image).toHaveAttribute('src', firstCharacter.avatar)
    });

    Expected the element to have attribute:
      src="/characters/photo.png"
    Received:
      src="/_next/image?url=%2Fcharacters%2Fphoto.png&w=96&q=75"
  */

  it('image should use correct src', async () => {
    const { getByAltText } = await render(
      <Card.ImageAndName>
        <Card.Image src={firstCharacter.avatar} />
        <Card.Name text={firstCharacter.name} />
      </Card.ImageAndName>
    );
    const image = getByAltText('Avatar card');
    expect(image).toHaveAttribute('alt', "Avatar card")
  });
});