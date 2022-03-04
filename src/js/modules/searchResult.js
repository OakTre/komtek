import { GraphPageFilter } from "./PageFilter";

export default () => {
    const filter = new GraphPageFilter('#search', {
        highlightClass: 'highlight',
        childClass: 'highlight-element',
        hiddenClass: 'highlight-hidden',
        onInput: (filter) => {

        }
    });
}