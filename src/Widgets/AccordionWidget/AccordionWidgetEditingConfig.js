import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("AccordionWidget", {
  title: "Text",
  thumbnail: textWidgetIcon,
  attributes: {
    text: {
      title: "Text",
      description: "The actual source code of this text",
    },
  },
  properties: ["text"],
  initialContent: {
    text: "Body text",
  },
});