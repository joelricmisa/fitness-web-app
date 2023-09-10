import Link from "./Link";
import { SelectedPage } from "../shared/types";
import { Logo } from "../assets/logos";
import ActionButton from "./ActionButton";
import useMediaQuery from "../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavList } from "../shared/constants";

type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
	return (
		<nav>
			<div className={`${navBackground} flex-between fixed top-0 z-30 w-full py-6 `}>
				<div className="w-5/6 mx-auto">
					<div className="w-full flex-between gap-16">
						<a href="#home">
							<img
								width={"120"}
								alt="logo"
								src={Logo}
							/>
						</a>
						{isAboveMediumScreens ? (
							<div className="flex-between w-full ">
								<div className="flex gap-8">
									{NavList.map((link, index) => (
										<Link
											key={index}
											pageName={link.name}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									))}
								</div>
								<div className="flex gap-8">
									<button type="button">Sign In</button>

									<ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
								</div>
							</div>
						) : (
							<button
								type="button"
								onClick={() => setIsMenuToggled(!isMenuToggled)}
								className="bg-secondary-500 rounded-md p-2">
								<Bars3Icon className="h-6 w-6 text-white" />
							</button>
						)}
					</div>
				</div>
			</div>

			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-primary-100 drop-shadow-xl">
					<div className="flex justify-end p-10">
						<button
							type="button"
							onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<XMarkIcon className="h-8 w-8 font-bold text-black" />
						</button>
					</div>

					<div className="ml-10 flex flex-col gap-10 text-xl">
						{NavList.map((link, index) => (
							<Link
								key={index}
								pageName={link.name}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
