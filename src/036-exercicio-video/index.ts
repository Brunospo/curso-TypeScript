interface VideoPlayerElements {
  video: HTMLVideoElement
  playButton: HTMLButtonElement
  stopButton: HTMLButtonElement
}

interface VideoPlayerProtocol {
  iniciarEventos(): void
  playToggle(): void
  stop(): void
}

export class VideoPlayer implements VideoPlayerProtocol {
	private video: HTMLVideoElement;
	private playButton: HTMLButtonElement;
	private stopButton: HTMLButtonElement;

	constructor(videoPlayerElement: VideoPlayerElements) {
		this.video = videoPlayerElement.video;
		this.playButton = videoPlayerElement.playButton;
		this.stopButton = videoPlayerElement.stopButton;
	}

	iniciarEventos(): void {
		this.playButton.addEventListener('click', () => {
			this.playToggle();
		});

		this.stopButton.addEventListener('click', () => {
			this.stop();
		});
	}
	playToggle(): void {
		if (this.video.paused) {
			this.video.play();
			this.playButton.innerText = 'Pause';
		} else {
			this.video.pause();
			this.playButton.innerText = 'Play';
		}
	}
	stop(): void {
		this.video.pause();
		this.video.currentTime = 0;
		this.playButton.innerHTML = 'Play';
	}
}

const videoPlayer = new VideoPlayer({
	video: document.querySelector('.video') as HTMLVideoElement,
	playButton: document.querySelector('.play') as HTMLButtonElement,
	stopButton: document.querySelector('.stop') as HTMLButtonElement
});

videoPlayer.iniciarEventos();