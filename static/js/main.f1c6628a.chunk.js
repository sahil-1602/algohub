(this.webpackJsonpalgohub=this.webpackJsonpalgohub||[]).push([[0],{23:function(t,n,e){},247:function(t,n,e){"use strict";e.r(n);var r=e(1),i=e(13),a=e.n(i),o=(e(23),e(2)),c=e.n(o),s=e(4),u=e(8);function l(t){for(var n=[],e=t.slice(),r=e.length;r>0;r--){var i=!0,a=void 0;for(a=0;a<r-1;a++)if(n.push([e[a],e[a+1]]),e[a]>e[a+1]){i=!1;var o=e[a+1];e[a+1]=e[a],e[a]=o}if(i){n.push(["sorted"]);break}n.push([e[a]])}return n}var h=[];function d(t){return h=[],f(t,0,t.length-1),h.push(["completed"]),h}function f(t,n,e){if(n<e){var r=Math.floor((n+e)/2);f(t,n,r),f(t,r+1,e),function(t,n,e,r){var i=e+1;if(console.log("Merging left : ".concat(t.slice(n,e+1)," right : ").concat(t.slice(i,r+1))),h.push(["merge",t.slice(n,e+1),t.slice(i,r+1)]),t[e]<=t[i])return;for(;n<=e&&i<=r;)if(t[n]<=t[i])h.push(["compare",t[n],t[i]]),n++;else{for(var a=t[i],o=i;o!==n;)console.log("Moving ".concat(o-1," to ").concat(o)),h.push([o,t[o-1]]),t[o]=t[o-1],o--;t[n]=a,n++,e++,i++}}(t,n,r,e)}}function g(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length-1,r=arguments.length>3?arguments[3]:void 0,i=function(t,n,e){var r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]},a=t[n],o=n,c=n+1;c<=e;c++)r.push(["compare",a,t[c]]),a>t[c]&&(i(t,++o,c),r.push([t[o],t[c]]));return r.push([t[n],t[o]]),i(t,n,o),r.push(["placed",t[o]]),o}function p(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length-1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(n<e){var i=g(t,n,e,r);p(t,n,i-1,r),p(t,i+1,e,r)}return r}var m=e(18);function v(t,n){return Math.floor(Math.abs(t)/Math.pow(10,n))%10}function b(t){for(var n=[],e=function(t){for(var n,e=0,r=0;r<t.length;r++)e=Math.max(e,0===(n=t[r])?1:Math.floor(Math.log10(Math.abs(n)))+1);return e}(t),r=0;r<e;r++){for(var i,a=Array.from({length:10},(function(){return[]})),o=0;o<t.length;o++){a[v(t[o],r)].push(t[o])}n.push(["digitBucket",a]),t=(i=[]).concat.apply(i,Object(m.a)(a)),n.push(["nums",t])}return n}e(25),e(26);var x=e(0),j=Object(r.createContext)();function y(t){var n=Object(r.useState)("bubble"),e=Object(u.a)(n,2),i=e[0],a=e[1];return Object(x.jsx)(j.Provider,{value:{algorithm:i,updateAlgorithm:function(t){a((function(n){return t}))}},children:t.children})}var k=function(t){var n=t.setArray,e=t.resetArray,i=t.array,a=t.bubbleSort,o=t.mergeSort,c=t.quickSort,s=t.radixSort,u=Object(r.useContext)(j),l=u.algorithm,h=u.updateAlgorithm;return Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)("div",{className:"nav__brand",children:Object(x.jsx)("p",{children:"ALGOHUB"})}),Object(x.jsxs)("div",{className:"nav__algo",children:[Object(x.jsx)("div",{onClick:function(){return h("bubble")},className:"bubble"===l?"active":null,children:"Bubble Sort"}),Object(x.jsx)("div",{onClick:function(){return h("merge")},className:"merge"===l?"active":null,children:"Merge Sort"}),Object(x.jsx)("div",{onClick:function(){return h("quick")},className:"quick"===l?"active":null,children:"Quick Sort"}),Object(x.jsx)("div",{onClick:function(){return h("radix")},className:"radix"===l?"active":null,children:"Radix Sort"}),Object(x.jsx)("div",{onClick:function(){return e()},className:"nav__algo--arr",children:"Random Array"}),Object(x.jsx)("div",{onClick:function(){"bubble"===l?a(i,n):"merge"===l?o(i,n):"quick"===l?c(i,n):"radix"===l?s(i,n):alert("please select a choice")},className:"nav__algo--sort",children:"Sort"})]})]})},O=e(251),S=e(250);function C(){var t=Object(r.useContext)(j).algorithm;return Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{language:"javascript",style:S.a,children:"bubble"===t?"\nlet bubbleSort = (inputArr) => {\n    let len = inputArr.length;\n    for (let i = 0; i < len; i++) {\n        for (let j = 0; j < len; j++) {\n            if (inputArr[j] > inputArr[j + 1]) {\n                let tmp = inputArr[j];\n                inputArr[j] = inputArr[j + 1];\n                inputArr[j + 1] = tmp;\n            }\n        }\n    }\n    return inputArr;\n};\n":"quick"===t?"\nfunction pivot(arr, start = 0, end = arr.length - 1) {\n  const swap = (arr, idx1, idx2) => {\n    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];\n  };\n\n  // We are assuming the pivot is always the first element\n  let pivot = arr[start];\n  let swapIdx = start;\n\n  for (let i = start + 1; i <= end; i++) {\n    if (pivot > arr[i]) {\n      swapIdx++;\n      swap(arr, swapIdx, i);\n    }\n  }\n\n  // Swap the pivot from the start the swapPoint\n  swap(arr, start, swapIdx);\n  return swapIdx;\n}\n\n\nfunction quickSort(arr, left = 0, right = arr.length -1){\n    if(left < right){\n        let pivotIndex = pivot(arr, left, right)\n        //left\n        quickSort(arr,left,pivotIndex-1);\n        //right\n        quickSort(arr,pivotIndex+1,right);\n      }\n     return arr;\n}\n":"radix"===t?"\nfunction getDigit(num, i) {\n  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;\n}\n\nfunction digitCount(num) {\n  if (num === 0) return 1;\n  return Math.floor(Math.log10(Math.abs(num))) + 1;\n}\n\nfunction mostDigits(nums) {\n  let maxDigits = 0;\n  for (let i = 0; i < nums.length; i++) {\n    maxDigits = Math.max(maxDigits, digitCount(nums[i]));\n  }\n  return maxDigits;\n}\n\nfunction radixSort(nums){\n    let maxDigitCount = mostDigits(nums);\n    for(let k = 0; k < maxDigitCount; k++){\n        let digitBuckets = Array.from({length: 10}, () => []);\n        for(let i = 0; i < nums.length; i++){\n            let digit = getDigit(nums[i],k);\n            digitBuckets[digit].push(nums[i]);\n        }\n        nums = [].concat(...digitBuckets);\n        console.log(nums);\n    }\n    return nums;\n}\n":"merge"===t?"\n// Merge function\nfunction merge(arr1, arr2){\n    let results = [];\n    let i = 0;\n    let j = 0;\n    while(i < arr1.length && j < arr2.length){\n        if(arr2[j] > arr1[i]){\n            results.push(arr1[i]);\n            i++;\n        } else {\n            results.push(arr2[j])\n            j++;\n        }\n    }\n    while(i < arr1.length) {\n        results.push(arr1[i])\n        i++;\n    }\n    while(j < arr2.length) {\n        results.push(arr2[j])\n        j++;\n    }\n    return results;\n}\n\n// Recrusive Merge Sort\nfunction mergeSort(arr){\n    if(arr.length <= 1) return arr;\n    let mid = Math.floor(arr.length/2);\n    let left = mergeSort(arr.slice(0,mid));\n    let right = mergeSort(arr.slice(mid));\n    return merge(left, sright);\n}\n":""})})}var w=800,q=600;function M(t){for(var n=t.toString().split(""),e=[],r=0;r<n.length;r++)"0"===n[r]?e.push("zero"):"1"===n[r]?e.push("one"):"2"===n[r]?e.push("two"):"3"===n[r]?e.push("three"):"4"===n[r]?e.push("four"):"5"===n[r]?e.push("five"):"6"===n[r]?e.push("six"):"7"===n[r]?e.push("seven"):"8"===n[r]?e.push("eight"):"9"===n[r]&&e.push("nine");return e.join("")}function A(t,n){var e=M(t),r=M(n),i=document.querySelector(".".concat(e)),a=document.querySelector(".".concat(r));i.classList.add("compare"),a.classList.add("compare"),setTimeout((function(){i.classList.remove("compare"),a.classList.remove("compare"),i.style.background="turquoise",a.style.background="turquoise"}),q)}function B(t){var n=M(t);document.querySelector(".".concat(n)).classList.add("placed")}function L(t,n){var e=M(t),r=M(n),i=document.querySelector(".".concat(e)),a=document.querySelector(".".concat(r)),o={x:null,y:null},c={x:null,y:null};i.classList.add("transition"),a.classList.add("transition"),o.x=a.getBoundingClientRect().left-i.getBoundingClientRect().left,o.y=i.getBoundingClientRect().top-a.getBoundingClientRect().top,c.x=i.getBoundingClientRect().left-a.getBoundingClientRect().left,c.y=a.getBoundingClientRect().top-i.getBoundingClientRect().top,i.style.transform="translate(".concat(o.x,"px, ").concat(o.y,"px)"),a.style.transform="translate(".concat(c.x,"px, ").concat(c.y,"px)"),setTimeout((function(){i.classList.remove("transition"),a.classList.remove("transition"),i.classList.remove(e),a.classList.remove(r),i.removeAttribute("style"),a.removeAttribute("style"),i.style.height="".concat(n,"px"),a.style.height="".concat(t,"px"),i.classList.add(r),a.classList.add(e),i.style.background="turquoise",a.style.background="turquoise",i.textContent=n,a.textContent=t}),q)}function R(t,n){return Math.floor(Math.random()*(n-t+1)+t)}function N(t,n){var e=M(n),r=document.querySelectorAll(".array-bars")[t],i=document.querySelector(".".concat(e)),a=r.style.height,o=i.style.height,c=r.classList.value.split(" ")[1],s=r.textContent,u=i.textContent,l={x:null,y:null},h={x:null,y:null};r.classList.add("transition"),i.classList.add("transition"),l.x=i.getBoundingClientRect().left-r.getBoundingClientRect().left,l.y=r.getBoundingClientRect().top-i.getBoundingClientRect().top,h.x=r.getBoundingClientRect().left-i.getBoundingClientRect().left,h.y=i.getBoundingClientRect().top-r.getBoundingClientRect().top,r.style.transform="translate(".concat(l.x,"px, ").concat(l.y,"px)"),i.style.transform="translate(".concat(h.x,"px, ").concat(h.y,"px)"),setTimeout((function(){r.classList.remove("transition"),i.classList.remove("transition"),r.classList.remove(c),i.classList.remove(e),r.removeAttribute("style"),i.removeAttribute("style"),r.style.height=o,i.style.height=a,r.classList.add(e),i.classList.add(c),r.style.background="turquoise",i.style.background="turquoise",r.textContent=u,i.textContent=s}),q)}function D(t,n){for(var e=function(n){var e=M(t[n]),r=document.querySelector(".".concat(e));r.style.background="#da00f7",setTimeout((function(){r.style.background="turquoise"}),q)},r=0;r<t.length;r++)e(r);for(var i=function(t){var e=M(n[t]),r=document.querySelector(".".concat(e));r.style.background="#750485",setTimeout((function(){r.style.background="turquoise"}),q)},a=0;a<n.length;a++)i(a)}function I(){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"}function T(t){for(var n=document.querySelectorAll(".array-bars"),e=0;e<n.length;e++)n[e].style.background=t}function _(t){for(var n=[],e=I(),r=0;r<t.length;r++){var i=M(t[r]),a=document.querySelector(".".concat(i));n.push(a)}for(var o=0;o<n.length;o++)n[o].style.background=e}function z(t,n){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(c.a.mark((function t(n,e){var r,i,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=function(){setTimeout((function(){1===r[i].length?"sorted"===r[i][0]?T("blue"):B(r[i][0]):r[i][0]>r[i][1]?L(r[i][0],r[i][1]):A(r[i][0],r[i][1]),++i<r.length&&a()}),w)},r=l(n),i=0,a(),e(n.sort());case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(t,n){return P.apply(this,arguments)}function P(){return(P=Object(s.a)(c.a.mark((function t(n,e){var r,i,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(){return(o=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout(Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i<r.length-1&&"merge"===r[i][0]?D(r[i][1],r[i][2]):"completed"===r[i][0]?T("green"):"compare"===r[i][0]?A(r[i][1],r[i][2]):N(r[i][0],r[i][1]),!(++i<r.length)){t.next=5;break}return t.next=5,a();case 5:case"end":return t.stop()}}),t)}))),w);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)},a=function(){return o.apply(this,arguments)},r=d(n),i=0,t.next=6,a();case 6:e(n.sort());case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(t,n){return H.apply(this,arguments)}function H(){return(H=Object(s.a)(c.a.mark((function t(n,e){var r,i,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(){return(o=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout(Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1===r[i].length?T("blue"):"compare"===r[i][0]?A(r[i][1],r[i][2]):"placed"===r[i][0]?B(r[i][1]):L(r[i][0],r[i][1]),!(++i<r.length)){t.next=5;break}return t.next=5,a();case 5:case"end":return t.stop()}}),t)}))),w);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)},a=function(){return o.apply(this,arguments)},(r=p(n)).push(["completed"]),i=0,t.next=7,a();case 7:e(n.sort());case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(t,n){var e=b(t);e.push(["completed"]);var r=0;!function t(){setTimeout((function(){if(1===e[r].length&&"completed"===e[r][0])T("blue");else if("digitBucket"===e[r][0])for(var i=e[r][1],a=0;a<i.length;a++)0!==i[a].length&&_(i[a]);else"nums"===e[r][0]&&n(e[r][1]);++r<e.length&&t()}),1300)}()}var U=function(){var t=Object(r.useState)([]),n=Object(u.a)(t,2),e=n[0],i=n[1];function a(){for(var t=[],n=0;n<10;n++)t.push(R(20,550));i(t),T("turquoise")}return Object(r.useEffect)((function(){a()}),[]),Object(x.jsx)("div",{className:"visualize",children:Object(x.jsxs)(y,{children:[Object(x.jsx)(k,{setArray:i,mergeSort:J,bubbleSort:z,quickSort:G,radixSort:Q,array:e,resetArray:a}),Object(x.jsx)("div",{className:"bars",children:e.map((function(t,n){var e=M(t);return Object(x.jsx)("div",{className:"array-bars ".concat(e),style:{background:"turquoise",height:"".concat(t,"px")},children:t},n)}))}),Object(x.jsx)("div",{className:"code",children:Object(x.jsx)(C,{})})]})})};var W=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(U,{})})};a.a.render(Object(x.jsx)(W,{}),document.getElementById("root"))},25:function(t,n,e){},26:function(t,n,e){}},[[247,1,2]]]);
//# sourceMappingURL=main.f1c6628a.chunk.js.map