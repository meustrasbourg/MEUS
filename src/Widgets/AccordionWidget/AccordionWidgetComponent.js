import * as React from "react";
import * as Scrivito from "scrivito";

import "./AccordionWidget.scss";

Scrivito.provideComponent("AccordionWidget", ({ widget }) =>
  <div className='accordion'>
    <Scrivito.ContentTag tag='h4' content={ widget } attribute='title' />
    <Scrivito.ContentTag content={ widget } attribute='description'/>
  </div>
);
