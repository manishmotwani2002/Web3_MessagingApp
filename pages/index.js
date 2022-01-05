import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
	const { isAuthenticated, logout } = useMoralis();

	if (!isAuthenticated) return <Login />;

	return (
		<div className=" h-screen overflow-y-scroll bg-gradient-to-b from-black  to-fuchsia-900 overflow-hidden">
			{/* Head Element wiwth Change Username  */}

			<Head>
				<title>Chat DApp!!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="max-w-screen-2xl mx-auto flex flex-col ">
				{/* header  */}

				<div className="grow-0">
					{' '}
					<Header />
				</div>

				{/* messages  */}
				<div className=" grow">
					<Messages />
				</div>
			</div>
		</div>
	);
}
