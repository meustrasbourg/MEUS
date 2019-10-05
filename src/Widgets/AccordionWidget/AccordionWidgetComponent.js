import * as React from 'react';
import * as Scrivito from 'scrivito';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

Scrivito.provideComponent("AccordionWidget", ({ widget }) => {
  const items = widget.get('items');

  if (!items.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Create Accordion Items in widget properties.
        </h4>
    );
  }


  const list = items.map((item, index) =>
    <AccordionItem key={index}>
      <AccordionItemHeading>
        <AccordionItemButton>
          {item.get('title')}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>{item.get('text')}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );



  return (
    <Accordion>
      {list}
    </Accordion>
  );
}
)
