// Package Imports
import { useState } from 'react'

const SoundPlayer = () => {;
	const [state, setState] = useState({
		play: true
	});
	const [note, setNote] = useState("Tremlo/Low/A3.ogg");
	const [audio, setAudio] = useState(new Audio(note));

	const togglePlay = () => {
		setState({
			play: !state.play
		});

		state.play ? audio.play() : audio.pause();
	};

	return (
		<div>
			<button
				id="audioBtn"
				onClick={togglePlay}> {state.play ? "Play" : "Pause"}
			</button>
		</div>
	)
}

export default SoundPlayer;