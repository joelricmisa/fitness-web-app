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
			className={`${
				selectedPage === lowerCaseName ? "font-medium bg-primary-500 text-white shadow-md shadow-black/30" : ""
			} transition duration-500 hover:font-medium p-2 rounded-md`}
			onClick={() => setSelectedPage(lowerCaseName)}>
			{pageName}
		</a>
	);
};

export default Link;
