import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessages({ endOfMessagesRef }) {
	const { user, Moralis } = useMoralis();

	const [message, setMessage] = useState();

	const sendMessage = (e) => {
		e.preventDefault();

		if (!message) return;

		const Messages = Moralis.Object.extend('Messages');
		const messages = new Messages();

		messages
			.save({
				message: message,
				username: user.getUsername(),
				ethAddress: user.get('ethAddress'),
			})
			.then(
				(message) => {
					//saved successfully
				},
				(error) => {
					console.log(error.message);
				}
			);
		// endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });

		TODO: setMessage('');
	};

	return (
		<form
			action=""
			className="flex fixed-bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 text-white ">
			<input
				type="text"
				className="flex-grow outline-none bg-transparent"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder={`Enter a Message ${user.getUsername()}`}
			/>
			<button
				type="submit"
				className="font-bold text-pink-500"
				onClick={sendMessage}>
				Send
			</button>
		</form>
	);
}

export default SendMessages;
