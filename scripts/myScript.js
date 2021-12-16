let sliderImg = document.getElementById("slideImg");
let points = document.querySelectorAll(".points .point");
let Imgs = ["/assets/newRestaurant/MEH598321-avril-2017.jpg","/assets/newRestaurant/MEH599021-avril-2017-e1497362098264.jpg","/assets/newRestaurant/terasse_ok_rognage-960x693.png"];
let i = 1;
points[1].style.backgroundColor =  "#ff6360";

let time = setInterval(() => {
  sliderImg.src = Imgs[i];
  i++;
  
  whiteColor();
  if(i == 3){
    i=0;
  }
  points[i].style.backgroundColor =  "#ff6360";

}, 4000);

// points.forEach(p => {
//   p.addEventListener("click",(e)=>{
//     whiteColor();
//     for (let j = 0; j < 3; j++) {
//       if(e.target === points[j]){
//         sliderImg.src = Imgs[j];
//         points[j].style.backgroundColor =  "#ff6360";
//         i = j;
        
//       }
//     }
//   });
// });









function whiteColor() {
  points.forEach(e => {
    e.style.backgroundColor =  "white";
  });
}