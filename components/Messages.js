import { useRef } from 'react';
import { ByMorails, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessages from './SendMessages';

function Messages() {
	const { user } = useMoralis();

	const MINS_DURATION = 15;

	const { data, loading, error } = useMoralisQuery(
		'Messages',
		(query) =>
			query
				.ascending('createdAt')
				.greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
		[],
		{
			live: true, //real time listener for fetching data
		}
	);

	console.log('data is ', data);

	const endOfMessagesRef = useRef(null);

	return (
		<div className="pb-56">
			<div className="my-5">
				{/* <ByMorails
					variant="dark"
					style={{ marginLeft: 'auto', marginRight: 'auto' }}
				/> */}
			</div>

			<div>
				{data.map((message) => {
					return <Message message={message} key={message.id} />;
				})}
			</div>
			<div>{/* Each Message  */}</div>
			<div className="flex justify-center">
				<SendMessages endOfMessagesRef />
			</div>
			<div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
				<p>You are Up to Date {user.getUsername()}</p>
			</div>
		</div>
	);
}

export default Messages;
