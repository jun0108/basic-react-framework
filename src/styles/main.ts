import { createGlobalStyle } from "styled-components";
import {Buttons} from "./components/Buttons";
import {Wrapper} from "./layout/Wrapper";

const GlobalStyles = createGlobalStyle`
${Wrapper}
${Buttons}
`;

export { GlobalStyles }; 