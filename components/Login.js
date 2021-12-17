import Image from 'next/image';
import { useMoralis } from 'react-moralis';

export default function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="bg-black realtive ">
			<div>This is the loginn screen</div>
			<div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
				<Image
					src="https://links.papareact.com/3pi"
					width={200}
					height={200}
					className="rounded-full object-cover"
				/>

				<button
					onClick={() => authenticate()}
					className="rounded-lg bg-yellow-500 p-5 font-bold  animate-pulse">
					Login to Metaverse
				</button>
			</div>
			<div className="w-full h-screen">
				<Image
					src="https://links.papareact.com/55n"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}
