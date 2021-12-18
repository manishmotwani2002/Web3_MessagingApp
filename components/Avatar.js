import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ username, logoutOnPress }) {
	const { logout, user } = useMoralis();

	return (
		<div>
			<Image
				src={`https://avatars.dicebear.com/api/pixel-art/${
					username || user.get('username')
				}.svg`}
				layout="fill"
				onClick={() => logoutOnPress && logout()}
			/>
		</div>
	);
}

export default Avatar;
