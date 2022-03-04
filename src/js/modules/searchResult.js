import { GraphPageFilter } from "./PageFilter";

export default () => {
    const inpt = document.querySelector("#search");
    if (!inpt) return;

    const filter = new GraphPageFilter('#search', {
        highlightClass: 'highlight',
        childClass: 'highlight-element',
        hiddenClass: 'highlight-hidden',
        onInput: (filter) => {

        }
    });
}