import { html,nothing, render as renderBase } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';



const root = document.getElementById('main-element');

function render(templateResult) {
    renderBase(templateResult,root);
}



export {
    render,
    html,
    nothing,
    page,
};