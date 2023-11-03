import { render } from "@testing-library/react";
import { GrifItem } from "../src/components";

describe('Pruebas en <GifExpertApp/>', () => {
    const title = "Saitama";
    const url = "https://one-punch.com/saitama.jpg";

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GrifItem title = { title } url = { url }/>);
        expect( container ).toMatchSnapshot();
    });    
});
