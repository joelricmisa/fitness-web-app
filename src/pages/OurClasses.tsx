import { SelectedPage, ClassType } from "../shared/types";
import { classes } from "../shared/constants";
import { motion } from "framer-motion";
import { ClassCard, HeadingText } from "../components";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};
const OurClasses = ({ setSelectedPage }: Props) => {
	return (
		<section
			id="ourclasses"
			className="w-full bg-primary-100 py-40">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
				<motion.div
					className="mx-auto w-5/6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<div className="md:w-3/5 ">
						<HeadingText>OUR CLASSES</HeadingText>
						<p className="py-5">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum officiis perferendis at. Cumque laboriosam aliquam
							libero veniam consectetur laborum eveniet odio hic eaque unde maxime praesentium asperiores magnam maiores autem
							adipisci blanditiis,
						</p>
					</div>
				</motion.div>
				<div className="mt-10 h-[353px] w-5/6 mx-auto overflow-x-auto overflow-y-hidden">
					<ul className="whitespace-nowrap">
						{classes.map((item: ClassType, index) => (
							<ClassCard
								key={`${item.name}-${index}`}
								name={item.name}
								description={item.description}
								image={item.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
};

export default OurClasses;
