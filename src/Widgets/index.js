function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));
import "scrivito-collapsible-card";
import "scrivito-collapsible-card/index.css";
