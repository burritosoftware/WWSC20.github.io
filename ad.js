document.querySelector(".ad").innerHTML =
  location.host == "wwsc20.github.io"
    ? `<ins class="adsbycontextcue" data-cc-site="b27b9ca4-206c-4100-952b-372c5d5b44ef" data-cc-slot="51Lvt7VpB"></ins>`
    : `<ins class="adsbycontextcue" data-cc-site="886fd17c-b3bd-43ad-8d1b-5078d78dac01" data-cc-slot="V7VQIFsj"></ins>`;

var script = document.createElement("script");
script.src = "https://cdn.contextcue.com/adsbycontextcue.js";
script.async = true;
document.head.appendChild(script);
