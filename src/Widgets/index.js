function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));

import "scrivito-accessible-accordion";

@import "~react-accessible-accordion/dist/fancy-example.css";
