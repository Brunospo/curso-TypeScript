/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************************************!*\
  !*** ./src/036-exercicio-video/index.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoPlayer = void 0;
class VideoPlayer {
    constructor(videoPlayerElement) {
        this.video = videoPlayerElement.video;
        this.playButton = videoPlayerElement.playButton;
        this.stopButton = videoPlayerElement.stopButton;
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.stop();
        });
    }
    playToggle() {
        if (this.video.paused) {
            this.video.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.video.pause();
            this.playButton.innerText = 'Play';
        }
    }
    stop() {
        this.video.pause();
        this.video.currentTime = 0;
        this.playButton.innerHTML = 'Play';
    }
}
exports.VideoPlayer = VideoPlayer;
const videoPlayer = new VideoPlayer({
    video: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop')
});
videoPlayer.iniciarEventos();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map