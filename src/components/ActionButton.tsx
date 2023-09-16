import React from "react";
import { SelectedPage } from "../shared/types";

type Props = {
	children: React.ReactNode;
	setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
	return (
		<a
			type="button"
			href={`#${SelectedPage.ContactUs}`}
			onClick={() => setSelectedPage(SelectedPage.ContactUs)}
			className="py-2 px-10 bg-secondary-500 text-white rounded-md shadow-md hover:bg-primary-500 ">
			{children}
		</a>
	);
};

export default ActionButton;
