!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),c=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,n)=>{const s=new URL(e,o);if(self[t].moduleMap[s])return r(self[t].moduleMap[s]);const a=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){n(new Error(`Failed to import: ${e}`)),c(l)},onload(){r(self[t].moduleMap[s]),c(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/");!function(){const e=document.querySelectorAll(".slider-item"),t=document.querySelector("#left-arrow"),r=document.querySelector("#right-arrow");let o=0;function c(){for(let t=0;t<e.length;t++)e[t].style.display="none"}t.addEventListener("click",(function(){0===o&&(o=e.length),c(),e[o-1].style.display="block",o--})),r.addEventListener("click",(function(){o===e.length-1&&(o=-1),c(),e[o+1].style.display="block",o++})),c(),e[0].style.display="block"}(),function(){let e,t=[];function r(){t=document.querySelectorAll(".hidden"),t=Array.prototype.slice.call(t),e=window.innerHeight}function o(){for(let c=0;c<t.length;c++){const n=t[c];t[c].getBoundingClientRect().top-e<=0&&(n.classList.add("fade-in-element"),n.classList.remove("hidden"),t=t.filter((e=>n!==e)),t.length<=0&&(window.removeEventListener("scroll",o),window.removeEventListener("resize",r)))}}window.addEventListener("scroll",o),window.addEventListener("resize",r),r(),o()}();const e=document.getElementById("form"),t=document.querySelectorAll("#form input"),r=document.querySelectorAll("#form textarea"),o=/^[a-zA-ZÀ-ÿ\s]{1,40}$/,c=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,n=/^[^$%&|<>#]*$/,s=/^\d{7,14}$/,a={name:!1,email:!1,phone:!1,textarea:!1},l=e=>{switch(e.target.name){case"name":i(o,e.target,"name");break;case"email":i(c,e.target,"email");break;case"phone":i(s,e.target,"phone");break;case"textarea":i(n,e.target,"textarea")}},i=(e,t,r)=>{e.test(t.value)?(document.getElementById(`group__${r}`).classList.remove("form__group-incorrect"),document.getElementById(`group__${r}`).classList.add("form__group-correct"),document.querySelector(`#group__${r} i`).classList.add("fa-check-circle"),document.querySelector(`#group__${r} i`).classList.remove("fa-times-circle"),document.querySelector(`#group__${r} .form__input-error`).classList.remove("form__input-error-active"),a[r]="true"):(document.getElementById(`group__${r}`).classList.add("form__group-incorrect"),document.getElementById(`group__${r}`).classList.remove("form__group-correct"),document.querySelector(`#group__${r} i`).classList.add("fa-times-circle"),document.querySelector(`#group__${r} i`).classList.remove("fa-check-circle"),document.querySelector(`#group__${r} .form__input-error`).classList.add("form__input-error-active"),a[r]="false")};t.forEach((e=>{e.addEventListener("keyup",l),e.addEventListener("blur",l)})),r.forEach((e=>{e.addEventListener("keyup",l),e.addEventListener("blur",l)})),e.addEventListener("submit",(t=>{t.preventDefault(),a.name&&a.email&&a.phone&&a.textarea?(e.reset(),document.getElementById("form__message-correct").classList.add("form__message-correct-active"),setTimeout((()=>{document.getElementById("form__message-correct").classList.remove("formulario__message-correct-active")}),5e3)):document.getElementById("form__message").classList.add("form__message-active")}));