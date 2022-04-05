import React from "react";

import { Button } from "./Button";
import { withKnobs, object } from "@storybook/addon-knobs";
import { CustomDocumentationComponent } from "./CustomDocumentationComponent";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    // backgroundColor: { control: "color" },
    borderRadius: { control: "select", options: ["Small", "Large"] },
    primary: {
      options: [true, false],
      control: { type: "radio" },
    },
    parameters: { actions: { handles: ["mouseover", "click .btn"] } },
  },

  parameters: {
    docs: {
      page: CustomDocumentationComponent,
    },
  },

  decorators: [withKnobs],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Primary",
  borderRadius: "10px",
  onclick: () => {
    console.log("clicked");
  },
};
//decorators: [withKnobs]
Primary.decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <Story />
    </div>
  ),
];
Primary.parameters = {
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
      { name: "blue", value: "#00f" },
    ],
  },
};

export const Knobs = Template.bind({});

Knobs.args = {
  label: object("label", "Clickhere"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
};

// export const Knobs = () => (
//   <Button disabled={boolean("Disabled", false)}>
//     {text("Label", "Button Label")}
//   </Button>
// );
