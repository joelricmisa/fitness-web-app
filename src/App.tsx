import { useEffect, useState } from "react";
import { Navbar } from "./components";
import { SelectedPage } from "./shared/types";
import { Home, Benefits, OurClasses, ContactUs, Footer } from "./pages";

function App() {
	const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
	const [isTopOfPage, setIsTopOfPage] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<header>
				<Navbar
					isTopOfPage={isTopOfPage}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			</header>
			<main>
				<Home setSelectedPage={setSelectedPage} />
				<Benefits setSelectedPage={setSelectedPage} />
				<OurClasses setSelectedPage={setSelectedPage} />
				<ContactUs setSelectedPage={setSelectedPage} />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
