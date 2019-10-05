import * as Scrivito from 'scrivito';

const AccordionItemWidget = Scrivito.provideWidgetClass('AccordionItemWidget', {
    onlyInside: 'AccordionWidget',
    attributes: {
        title: 'string',
        text: 'html',

    },
});

export default AccordionItemWidget;

