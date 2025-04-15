var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
function linkimiz(){
  document.location='https://linktr.ee/karabukdkke'
  target="_blank"
}


window.addEventListener('scroll', function() {
  const page1 = document.querySelector('.logo');
  const logo = document.querySelector('.logo');
  const scrollPosition = window.scrollY;
  
  // When scrolling reaches the height of page1, make it sticky
  if (scrollPosition > page1.offsetHeight) {
      page1.classList.add('sticky');
      
  } else {
      page1.classList.remove('sticky');
      
      // Optional: Smooth scaling as you scroll
      const scale = Math.max(0.5, 1 - scrollPosition / 500);
      logo.style.transform = `translate(50%, -100%) scale(${scale})`;
  }
});
