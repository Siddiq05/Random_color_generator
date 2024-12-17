const randomColor = () =>{
  const hex="0123456789ABCDEF";
  let color ="#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() *16)]
  }
  return color;
};
console.log(randomColor());
let IntervalId;
document.getElementById("Start").addEventListener('click',()=>{
  if (!IntervalId) {
    IntervalId = setInterval(() => {
      document.body.style.backgroundColor= randomColor()
      console.log(randomColor());
    }, 1000);
  }
})

document.getElementById("Stop").addEventListener('click',()=>{
  clearInterval(IntervalId);
  IntervalId = null;
})



