import { BenefitType, ClassType, FooterType, SponsorType } from "./types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { image1, image2, image3, image4, image5, image6 } from "../assets/images";
import { Logo, SponsorForbes, SponsorFortune, SponsorRedBull } from "../assets/logos";

export const NavList = [
	{
		name: "Home",
	},
	{
		name: "Benefits",
	},
	{
		name: "Our Classes",
	},
	{
		name: "Contact Us",
	},
];

export const Sponsors: Array<SponsorType> = [
	{
		alt: "redbull-sponsor",
		src: SponsorRedBull,
	},
	{
		alt: "forbes-sponsor",
		src: SponsorForbes,
	},
	{
		alt: "fortune-sponsor",
		src: SponsorFortune,
	},
];

export const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta corrupti consectetur. Sit, adipisci vitae.",
	},

	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Classes",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta corrupti consectetur. Sit, adipisci vitae.",
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta corrupti consectetur. Sit, adipisci vitae.",
	},
];

export const classes: Array<ClassType> = [
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: image1,
	},
	{
		name: "Yoga Classes",
		image: image2,
	},
	{
		name: "Ab Core Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: image3,
	},
	{
		name: "Adventure Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: image4,
	},
	{
		name: "Fitness Classes",
		image: image5,
	},
	{
		name: "Training Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: image6,
	},
];

export const FooterData: Array<FooterType> = [
	{
		heading: Logo,
		content: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis in, asperiores animi similique consectetur temporibus incidunt? Laborum, accusantium quaerat..",

			"© JoeGym All Rights Reserved.",
		],
	},
	{
		heading: "Links",
		content: ["Auctor faucibus ", "Elementum purus et ", "Ullamcorper vivamus"],
	},
	{
		heading: "Contact Us",
		content: [" Augue scelerisque iaculis orci ut habitan.", "(63+)9765-6825"],
	},
];
