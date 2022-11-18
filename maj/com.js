"use strict"
import { nav,logo,impLinks,exploreCat,solu,legal,workwithus,intouch,about,contact,newsletter,endfooter } from './essentials.js';



function header() {return `<header class="var1">${logo()}${nav()}</header>`;}
function footer() {return `<footer><section class="a">${about()}${impLinks()}${exploreCat()}${solu()}${legal()}${workwithus()}${contact()}${newsletter()}</section><hr><section class="b">${intouch()}</section><hr><section class="c">${endfooter()}</section></footer>`;}



function execution()
{
document.getElementById("header").outerHTML = header();
document.getElementById("footer").outerHTML = footer();
}

window.addEventListener('load', (event) =>{execution();});
//window.addEventListener('DOMContentLoaded', (event) =>{execution();});
