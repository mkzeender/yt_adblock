
function checkYtAd() {
	let lst = document.getElementsByClassName("video-stream")

	if (document.getElementsByClassName("ytp-ad-player-overlay")[0]) {
		lst[0].playbackRate = 10

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

setInterval(checkYtAd, 500)
