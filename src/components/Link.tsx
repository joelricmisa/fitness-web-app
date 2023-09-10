import { SelectedPage } from "../shared/types";

type Props = {
	pageName: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ pageName, selectedPage, setSelectedPage }: Props) => {
	const lowerCaseName = pageName.toLowerCase().replace(/ /g, "") as SelectedPage;

	return (
		<a
			href={`#${lowerCaseName}`}
			className={`${selectedPage === lowerCaseName ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
			onClick={() => setSelectedPage(lowerCaseName)}>
			{pageName}
		</a>
	);
};

export default Link;
