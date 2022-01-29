
function checkYtAd() {
	let lst = document.getElementsByClassName("video-stream")

	if (document.getElementsByClassName("ytp-ad-player-overlay")[0]) {
		lst[0].playbackRate = 16

		skipbtn = document.getElementsByClassName("ytp-ad-skip-button-text")[0]
		if (skipbtn) {
			skipbtn.click()
		}
	} else {
		lst[0].playbackRate = 1
	}
	let xbutton = document.getElementsByClassName("ytp-ad-overlay-close-button")[0]
	if (xbutton) {
		xbutton.click()
	}
}



function skip_ad() {
	let video = document.getElementsByTagName('video')[1]
	if (video) {
		video.playbackRate = 10
	}
}

setInterval(skip_ad, 200)

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowUp":
      document.getElementsByTagName('video')[1].playbackRate = 10 // code for "up arrow" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true)
