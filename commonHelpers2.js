import{l as a,f as c,m as l,c as N,s as g,a as x}from"./assets/exercises-right-part-filter-8762340b.js";import"./assets/vendor-ac1aa0cc.js";const q=document.querySelector(".wrap-button"),L=document.querySelector(".muscles-list"),k=document.querySelector(".pagination-numbers"),H=document.querySelector(".title-exercises");q.addEventListener("click",M);document.addEventListener("DOMContentLoaded",()=>{S({filter:"Muscles",page:1,limit:12})});function C(){var t=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return t+s>=e}async function M(t){t.preventDefault(),H.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(o=>{o.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:i,page:1,limit:12};L.innerHTML="",S(n)}async function S(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{a.open();const e=await c.getByFilterName(t);a.close();const s=e.results;if(!e||s.length===0){l.error("Sorry, we didn't find anything according to your request.");return}L.insertAdjacentHTML("beforeend",f(s)),window.addEventListener("scroll",function(){C()&&(console.log("Сторінка завантажилась до кінця!"),f(s))});const{totalPages:i}=e,n=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),k.innerHTML="",h(i,t),u(1)}catch(e){console.log(e.message)}}function f(t){return t.map(({filter:s,name:i,imgURL:n})=>{let r=s.toLocaleLowerCase().replaceAll(" ","");return r==="bodyparts"&&(r="bodypart"),`
      <li class="muscles-item" data-name=${i} data-filter=${r}>
      <a href="" class="muscles-link" data-alt="${i}">
        <img loading="lazy" class="muscles-image" src="${n}" alt="${i}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${N(i)}</h3>
          <p class="muscles-text">${s}</p>
        </button>
      </a>
    </li>
    `}).join("")}const _=document.querySelector(".pagination-numbers"),A=document.querySelector(".muscles-list");let d=1;try{_.addEventListener("click",P),_.addEventListener("click",y)}catch(t){console.log(t)}let w;async function P(t){const e={...w,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==d){if(e.filter){a.open();const s=await c.getByFilterName(e);a.close();const i=s.results;A.innerHTML=f(i)}else{a.open();const s=await c.getByFilterCategory(e);a.close(),v(s)}d=e.page,y()}}const B=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),_.appendChild(e)};function h(t,e){if(w=e,t!==1)for(let s=1;s<=t;s++)B(s)}function y(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{u(e)})})}function u(t){d=t,y(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("active")})}const j=document.querySelector(".pagination-numbers"),m=document.querySelector(".filter-list-js"),F=document.querySelector(".title-exercises");m.addEventListener("click",I);async function I(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.parentNode.nodeName!=="BUTTON")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.alt);const n={[s]:i,page:1,limit:10};F.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${N(i)}</spam>`,a.open();const r=await c.getByFilterCategory(n);if(a.close(),r!=null&&r.results.length){m.classList.add("exercises_list"),m.classList.remove("muscles-list"),v(r),j.innerHTML="";const{totalPages:o}=r;h(o,n),u(1)}else l.info("Oops. please, try other category this list empty :(")}catch(n){l.error(n.message)}}function v(t){if(t.results.length){const e=t.results.map(({_id:s,target:i,rating:n,name:r,burnedCalories:o,time:b,bodyPart:T})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${i.toString().length>8?i.slice(0,8)+"...":i}</div>
          <p class="exercises_rating">${n.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${g}#icon-star" data-id=${s}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${g}#icon-arrow" data-id=${s}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
            <use xlink:href="${g}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${r.toString().length>20?r.slice(0,20)+"...":r} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${o||""} / ${b||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${x(T,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${x(i,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");m.innerHTML=e}}const $=document.querySelector(".form-js"),O=document.querySelector(".pagination-numbers");$.addEventListener("submit",R);async function R(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;let{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),i=s.toLocaleLowerCase().replaceAll(" ","");i==="bodyparts"&&(i="bodypart");const n={[i]:e,page:1,limit:10};try{a.open();const r=await c.getByFilterCategory(n);a.open(),r.results.length||l.info("Nothing was found for this query"),O.innerHTML="";const{totalPages:o}=r;h(o,n),u(1),$.reset(),v(r)}catch(r){console.log(r)}}const E=document.querySelector("#subscribe-form"),p=E.querySelector("#email");E.addEventListener("submit",D);async function D(t){t.preventDefault();const{value:e}=p;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){l.info("Enter the following sample email - 'test@gmail.com'"),p.value="";return}try{a.open();const i=await c.addSubscription({email:e});a.close(),l.success(i.message)}catch(i){console.log(i)}finally{p.value=""}}
//# sourceMappingURL=commonHelpers2.js.map
