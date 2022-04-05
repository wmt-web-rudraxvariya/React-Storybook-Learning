import Accordion from "./Accordion";

export default {
  title: "Example/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Test = Template.bind({});
Test.args = {
  title: "Test",
  description: "Test content",
};
export const SampleAcc = Template.bind({});
SampleAcc.args = {
  title: "This is a sample accrodion input",
  description: "This is a sample description",
};
