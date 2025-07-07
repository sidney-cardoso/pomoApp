let isRunning = false;

self.onmessage = event => {
	if (isRunning) return;

	const state = event.data;
	const { activeTask, secondsRemaining } = state;

	const endDate = activeTask.createdAt + secondsRemaining * 1000;

	const now = Date.now();
	let countdownSeconds = Math.ceil((endDate - now) / 1000);

	function timer() {
		self.postMessage(countdownSeconds);

		const now = Date.now();
		countdownSeconds = Math.floor((endDate - now) / 1000);

		setTimeout(timer, 1000);
	}

	timer();
};
