import { useMoralis } from 'react-moralis';

import TimeAgo from 'timeago-react';

import Avatar from './Avatar';

function Message({ message }) {
	const { user } = useMoralis();

	const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
	const align = isUserMessage ? 'justify-end' : 'justify-start';
	return (
		<div
			className={`flex items-end mx-6 space-x-2 relative m-2 ${
				isUserMessage && 'order-last ml-2'
			} ${align}`}>
			<div className={`h-8 w-8 relative ${isUserMessage && 'order-last'}`}>
				<Avatar username={message.get('username')} />
			</div>

			<div
				className={`flex space-x-4 p-3 rounded-lg ${
					isUserMessage
						? 'rounded-br-none bg-blue-400'
						: 'rounded-bl-none bg-pink-300'
				} `}>
				<p>{message.get('message')}</p>
			</div>

			<TimeAgo
				className={`text-[10px] italic text-gray-400 ${
					isUserMessage && 'order-last pr-1'
				}`}
				datetime={message.createdAt}
			/>

			<p
				className={`absolute -bottom-5 text-xs ${
					isUserMessage ? 'text-pink-300' : 'text-blue-400'
				} `}>
				{message.get('username')}
			</p>
		</div>
	);
}

export default Message;
