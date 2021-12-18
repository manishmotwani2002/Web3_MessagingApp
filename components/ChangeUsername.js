import { useMoralis } from 'react-moralis';

function ChangeUsername() {
	const { user, setUserData, userError, isUserUpdating } = useMoralis();

	const setUsername = () => {
		const username = prompt(
			`Enter your new username. Your Current Username is : ${user.get(
				'username'
			)}}`
		);

		if (!username) return;

		setUserData({
			username,
		});
	};

	return (
		<div className="text-lg absolute top-5 right-5 font-semibold">
			<button
				className="hover:text-pink-700"
				onClick={() => {
					setUsername();
				}}>
				Change Username
			</button>
		</div>
	);
}

export default ChangeUsername;
