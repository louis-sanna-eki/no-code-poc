import { DashmacroRow } from ".";

export default {
  title: "Components/DashmacroRow",
  component: DashmacroRow,
  argTypes: {
    property1: {
      options: ["im-pair", "pair"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "im-pair",
    divClassName: {},
    elementClassName: {},
    text: "Janvier",
    divClassNameOverride: {},
    elementClassNameOverride: {},
    spanClassName: {},
    text1: " (+12%)",
    elementKClassName: {},
    spanClassNameOverride: {},
    text2: "(+12%)",
    elementKClassNameOverride: {},
    spanClassName1: {},
    className: {},
  },
};
