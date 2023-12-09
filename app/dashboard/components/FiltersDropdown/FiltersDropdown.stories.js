import { FiltersDropdown } from ".";

export default {
  title: "Components/FiltersDropdown",
  component: FiltersDropdown,
  argTypes: {
    property1: {
      options: ["dropdown"],
      control: { type: "select" },
    },
    property2: {
      options: ["label", "simple", "open"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "dropdown",
    property2: "label",
    className: {},
    text: "Dropdown",
    text1: "Label",
  },
};
