import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ContactUsPageGraphic } from "../assets/images";
import { SelectedPage } from "../shared/types";
import { HeadingText } from "../components";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const inputStyles = `mb-5 w-full rounded-lg bg-primary-100
  px-5 py-3 placeholder-gray-700`;

	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section
			id="contactus"
			className="mx-auto w-5/6 pt-24 pb-32">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
				{/* HEADER */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<HeadingText>
						<span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
					</HeadingText>
					<p className="my-5">
						Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque.
						Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
					</p>
				</motion.div>

				{/* FORM AND IMAGE */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}>
						<form
							target="_blank"
							onSubmit={onSubmit}
							action="https://formsubmit.co/00a8d1f511d7275a63fc30103a80ac07"
							method="POST">
							<input
								className={inputStyles}
								type="text"
								placeholder="NAME"
								{...register("name", {
									required: true,
									maxLength: 100,
								})}
							/>
							{errors.name && (
								<p className="text-red-400 font-medium -mt-3 mb-3 flex gap-2">
									<InformationCircleIcon className="h-6 w-6" />
									{errors.name.type === "required" && "This field is required, please input your name."}
									{errors.name.type === "maxLength" && "Max length is 100 char."}
								</p>
							)}

							<input
								className={inputStyles}
								type="text"
								placeholder="EMAIL"
								{...register("email", {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className="text-red-400 font-medium -mt-3 mb-3 flex gap-2">
									<InformationCircleIcon className="h-6 w-6" />
									{errors.email.type === "required" && "This field is required, please input your email."}
									{errors.email.type === "pattern" && "Invalid email address, please input an appropriate email."}
								</p>
							)}

							<textarea
								className={inputStyles}
								placeholder="MESSAGE"
								rows={4}
								cols={50}
								{...register("message", {
									required: true,
									maxLength: 2000,
								})}
							/>
							{errors.message && (
								<p className="text-red-400 font-medium -mt-3 mb-3 flex gap-2">
									<InformationCircleIcon className="h-6 w-6" />
									{errors.message.type === "required" && "This field is required, please input anything that you want to say."}
									{errors.message.type === "maxLength" && "Max length is 2000 char."}
								</p>
							)}

							<button
								type="submit"
								className="mt-5 mx-auto block md:inline rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 text-white">
								SUBMIT
							</button>
						</form>
					</motion.div>

					<motion.div
						className="relative mt-16 basis-2/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}>
						<div className="flex justify-end before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
							<img
								className="w-[400px] h-[500px] rounded-md"
								alt="contact-us-page-graphic"
								src={ContactUsPageGraphic}
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};
export default ContactUs;
