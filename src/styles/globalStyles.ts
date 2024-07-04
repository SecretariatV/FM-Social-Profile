import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --green: hsl(75, 94%, 57%);
    --white: hsl(0, 0%, 100%);
    --grey: hsl(0, 0%, 20%);
    --dark-grey: hsl(0, 0%, 12%);
    --off-black: hsl(0, 0%, 8%);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Inter;
}

body {
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    background-color: var(--off-black);
}

p {
    font-size: 14px;
}

.green {
    color: var(--green);
}

.white {
    color: var(--white);
}
`;

export default GlobalStyles;
