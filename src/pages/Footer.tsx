import { FooterData } from "../shared/constants";

const Footer = () => {
	return (
		<div className="bg-primary-100 py-16">
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				{FooterData.map((column, index) => (
					<div
						key={index}
						className="mt-16 first:basis-1/2 basic-1/4 md:mt-0">
						{index === 0 && (
							<a href="#home">
								<img
									width={140}
									alt="logo"
									src={column.heading}
								/>
							</a>
						)}

						{index >= 1 && <h4 className="font-bold">{column.heading}</h4>}

						{column.content.map((item, index) => (
							<p
								key={index}
								className="my-5">
								{item}
							</p>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Footer;
