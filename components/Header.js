import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

export default function Header() {
	const { user } = useMoralis();

	return (
		<div className=" text-pink-500 sticky top-0 p-5 z-50 shadow-sm bg-black border-b-2 border-pink-700 ">
			<div>
				<div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
					<Image
						layout="fill"
						objectFit="cover"
						className="rounded-full "
						src="https://links.papareact.com/3pi"
					/>
				</div>

				<div className="text-left md:text-center ">
					<div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
						{/* Avatar  */}
						<Avatar logoutOnPress />
					</div>
					{/* WelcomeMessage  */}
					<h1 className="text-3xl ">Welcome to Our App</h1>
					{/* Username  */}
					<h1 className="text-5xl font-bold truncate">
						username: {user.get('username')}
					</h1>
					{/* change username component  */}
					<ChangeUsername />
				</div>
			</div>
		</div>
	);
}
