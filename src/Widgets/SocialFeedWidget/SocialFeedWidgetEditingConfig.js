import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("SocialFeedWidget", {
  title: "Social Feed Buttons",
  attributes: {
    shareButtons: {
      title: "Share buttons",
      description: "Social feed buttons to display",
      values: [
        { value: "facebook", title: "Facebook" },
        { value: "twitter", title: "Twitter" },
        { value: "linkedin", title: "LinkedIn" },
      ],
    },
  },
  properties: ["shareButtons"],
  initialContent: {
    shareButtons: ["facebook"],
  },
});
