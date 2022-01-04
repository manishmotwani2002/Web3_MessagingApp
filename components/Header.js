import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

export default function Header() {
	const { user } = useMoralis();

	return (
		<div className="">
			<div className=" text-pink-500 sticky z-50 top-0 px-5 py-3  shadow-sm bg-black border-b-2 border-pink-700 lg:flex justify-between items-center">
				<div className="relative h-20 w-20 hidden lg:inline-flex">
					<Image
						layout="fill"
						objectFit="cover"
						className="rounded-full "
						src="https://links.papareact.com/3pi"
					/>
				</div>

				{/* WelcomeMessage  */}
				<h1 className="text-3xl italic">Welcome to Our App</h1>

				{/* change username component  */}
				<div className="border-2 px-2 py-3 rounded-3xl border-blue-400">
					<ChangeUsername />
				</div>
			</div>
			<div className="flex lg:flex-col justify-around items-center text-left md:text-center text-pink-500 bg-gray-900 py-3 border-b-2 border-pink-500 ">
				<div className="h-28 w-28 overflow-hidden relative lg:mx-auto border-pink-500 border-8 rounded-full">
					{/* Avatar  */}
					<Avatar logoutOnPress />
				</div>

				{/* Username  */}
				<h1 className="text-4xl font-semibold truncate">
					username: {user.get('username')}
				</h1>
			</div>
		</div>
	);
}
