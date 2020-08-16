
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

let div0 = document.getElementById('movie-0');
let div1 = document.getElementById('movie-1');
let video0 = document.getElementById('video-0');
let video1 = document.getElementById('video-1');

div0.addEventListener("mouseover", function (event) {
  video0.style.display = "inline-block";
  video0.play();
}, false);

div0.addEventListener("mouseout", function (event) {
  video0.style.display = "none";
  video0.pause();
}, false);

div1.addEventListener("mouseover", function (event) {
  video1.style.display = "inline-block";
  video1.play();
}, false);

div1.addEventListener("mouseout", function (event) {
  video1.style.display = "none";
  video1.pause();
}, false);







var actOnPost = function (event) {
  var postId = event.target.dataset.postId;
  document.querySelector('#likeCount-' + postId).textContent++;
  axios.post('/' + postId + '/act');
};
