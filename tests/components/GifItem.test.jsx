import { render, screen } from "@testing-library/react";
import { GrifItem } from "../../src/components/GrifItem";

describe("Pruebas en <GifItem />", () => {
    const title = "Saitama";
    const url = "https://one-punch.com/saitama.jpg";

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GrifItem title = { title } url = { url }/>);
        expect( container ).toMatchSnapshot();
    });

    test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
        
        render(<GrifItem title = { title } url = { url }/>);
        // screen.debug();

        // expect( screen.getByRole( 'img' ).src ).toBe( url );
        // expect( screen.getByRole( 'img' ).alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test("debe de mostrar el título en el componente", () => {
        render(<GrifItem title = { title } url = { url }/>);
        expect(screen.getByAltText(title).toBeTruthy());
    });
});