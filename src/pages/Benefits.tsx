import { SelectedPage, BenefitType } from "../shared/types";

import { ActionButton, BenefitCard, HeadingText } from "../components";
import { BenefitsPageGraphic } from "../assets/images";
import { motion } from "framer-motion";
import { benefits } from "../shared/constants";
const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section
			id="benefits"
			className="mx-auto min-h-full w-5/6 py-20 ">
			<motion.div onViewportEnter={() => (window.scrollY === 0 ? "" : setSelectedPage(SelectedPage.Benefits))}>
				{/* HEADER */}
				<motion.div
					className="md:my-5 md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<HeadingText>MORE THAN JUST GYM.</HeadingText>
					<p className="my-5 text-sm">
						We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We
						provide true care into each and every member.
					</p>
				</motion.div>

				{/* BENEFITS */}
				<motion.div
					className="mt-5 items-center justify-between gap-8 md:flex"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={container}>
					{benefits.map((benefit: BenefitType) => (
						<BenefitCard
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>

				{/* GRAPHICS AND DESCRIPTION */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					{/* GRAPHIC */}
					<img
						className="mx-auto"
						alt="benefits-page-graphic"
						src={BenefitsPageGraphic}
					/>

					{/* DESCRIPTION */}
					<div>
						{/* TITLE */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}>
									<HeadingText>
										MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
									</HeadingText>
								</motion.div>
							</div>
						</div>

						{/* DESCRIPT */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}>
							<p className="my-5">
								Fast track where do we stand on the latest client ask, nor eat our own dog food, for this is meaningless. We want to
								empower the team with the right tools and guidance to uplevel our craft and build better driving the initiative
								forward. What about scaling components to a global audience?. Paddle on both sides gain traction game-plan.
							</p>
							<p className="mb-5">
								We need a recap by eod, cob or whatever comes first we've bootstrapped the model, nor pre launch, or we don't want
								to boil the ocean, so dear hiring manager:. What about scaling components to a global audience? where do we stand on
								the latest client ask first-order
							</p>
						</motion.div>

						{/* BUTTON */}
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Benefits;
