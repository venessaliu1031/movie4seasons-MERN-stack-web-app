


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);









var actOnPost = function (event) {
  var postId = event.target.dataset.postId;
  document.querySelector('#likeCount-' + postId).textContent++;
  axios.post('/' + postId + '/act');
};
