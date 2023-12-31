type Props = {
	name: string;
	description?: string;
	image: string;
};

const ClassCard = ({ name, description, image }: Props) => {
	return (
		<li className="relative inline-block h-[380px] xs:w-[450px] w-full">
			<div
				className="p-5 absolute z-30 flex  h-[340px] xs:w-[450px] w-full flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 
                transition duration-500 hover:opacity-90">
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</div>
			<img
				alt={`${image}`}
				src={image}
				className="h-full"
			/>
		</li>
	);
};

export default ClassCard;
