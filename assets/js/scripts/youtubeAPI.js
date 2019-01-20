var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('sermonVid', {
    height: '315',
    width: '560',
    videoId: '2szE8pQ9m1g',
    playerVars: {
      'rel': 0
    },
  });
}

function pauseVideo(){
  player.pauseVideo();
}

function stopVideo() {
  player.stopVideo();
}
