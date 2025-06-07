var elementsToRemove = document.querySelectorAll('tp-yt-paper-dialog[style-target="host"][role="dialog"][tabindex="-1"][style*="position: fixed; top: 242.25px; left: 270px;"]');
for (var i = 0; i < elementsToRemove.length; i++) {

elementsToRemove[i].remove();

}


var playButton = document.querySelector('button.ytp-play-button');

if (playButton) {

playButton.click();

}