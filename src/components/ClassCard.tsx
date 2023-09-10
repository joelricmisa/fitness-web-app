type Props = {
	name: string;
	description?: string;
	image: string;
};

const ClassCard = ({ name, description, image }: Props) => {
	return (
		<li className="relative inline-block h-[380px] w-[450px]">
			<div
				className="p-5 absolute z-30 flex  h-[340px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 
                transition duration-500 hover:opacity-90">
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</div>
			<img
				alt={`${image}`}
				src={image}
			/>
		</li>
	);
};

export default ClassCard;
