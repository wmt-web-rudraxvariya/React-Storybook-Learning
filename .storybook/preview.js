import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withKnobs);
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>{storyFn()}</Box>
  </ThemeProvider>
));
