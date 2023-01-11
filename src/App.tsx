import "./App.css";
import Avatar from "./assets/image-avatar.png";
import MainImage from "./assets/image-equilibrium.jpg";
import View from "./assets/icon-view.svg";
import Ether from "./assets/icon-ethereum.svg";
import Clock from "./assets/icon-clock.svg";
import { useState } from "react";

function App() {
	const [hover, setHover] = useState(false);

	console.log(hover);

	return (
		<div className="bg-VeryDarkBlueMain min-h-screen max-h-fit flex justify-center items-center p-6 font-Outfit ">
			<main className="bg-VeryDarkBlueCardBG p-8 rounded-2xl max-w-sm">
				<div className="relative">
					<img
						className="rounded-2xl hover:cursor-pointer z-0"
						src={MainImage}
						onMouseEnter={() => setHover(true)}
						alt="Equilibrium cube NFT"
					/>
					{hover && (
						<div
							className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0  bg-Cyan z-10 rounded-2xl opacity-70 hover:cursor-pointer"
							onMouseLeave={() => setHover(false)}>
							<img src={View} alt="View Logo" />
						</div>
					)}
				</div>

				<h1 className="text-white my-4 font-[600] text-2xl hover:cursor-pointer hover:text-Cyan">
					Equilibrium #3429
				</h1>
				<p className="text-SoftBlue font-[300] text-lg">
					Our Equilibrium collection promotes balance and calm.
				</p>
				<div className="flex justify-between my-4">
					<div className="flex gap-2">
						<img src={Ether} alt="Ethereum logo" />
						<p className="text-Cyan w-20 ">0.041 ETH</p>
					</div>
					<div className="flex gap-2">
						<img className="py-1" src={Clock} alt="Clock logo" />
						<p className="text-SoftBlue text-md"> 3 days left</p>
					</div>
				</div>

				<footer className="flex items-center justify-start gap-4 border-t-2 border-VeryDarkBlueLine pt-4">
					<img className="border rounded-full w-12" src={Avatar} alt="Photo of Producer" />
					<p className="text-SoftBlue ">
						Creation of{" "}
						<span className="text-white hover:cursor-pointer hover:text-Cyan">Jules Wyvern</span>
					</p>
				</footer>
			</main>
		</div>
	);
}

export default App;
