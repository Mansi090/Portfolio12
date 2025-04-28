/** @format */

import React, { useState, useEffect } from "react";
import {
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	FileText,
	Palette,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

interface HeaderProps {
	name: string;
	title: string;
	location: string;
	email: string;
	phone: string;
	github?: string;
	linkedin?: string;
	profileImage?: string;
}

const Header: React.FC<HeaderProps> = ({
	name,
	title,
	location,
	email,
	phone,
	github,
	linkedin,
	profileImage,
}) => {
	const titles = [
		"Frontend Developer",
		"Backend Developer",
		"Software Engineer",
		"Full Stack Developer",
	];

	const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
		}, 3000); // Change every 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<header className='relative overflow-hidden py-20'>
			{/* Floating shapes */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full blur-3xl opacity-20 animate-float'></div>
				<div
					className='absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-float'
					style={{ animationDelay: "2s" }}></div>
				<div
					className='absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-full blur-3xl opacity-20 animate-float'
					style={{ animationDelay: "4s" }}></div>
			</div>

			{/* Content */}
			<div className='relative z-10 container mx-auto px-4 sm:px-6'>
				<div className='flex flex-col md:flex-row items-center gap-12'>
					{/* Profile Image */}
					{profileImage && (
						<div className='flex-shrink-0 animate-fade-in'>
							<div className='relative group'>
								<div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity'></div>
								<div className='relative'>
									<div className='absolute inset-2 bg-gradient-to-br from-white/20 to-white/0 rounded-3xl'></div>
									<img
										src={profileImage}
										alt={`${name}'s profile`}
										className='relative w-48 h-48 object-cover rounded-3xl border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300'
									/>
								</div>
							</div>
						</div>
					)}

					{/* Text Content */}
					<div className='flex-grow text-center md:text-left space-y-6'>
						<div className='space-y-4'>
							<h1 className='text-6xl md:text-7xl font-bold tracking-tight text-white'>
								{name}
							</h1>
							<div className='flex items-center justify-center md:justify-start gap-4'>
								<Palette className='w-8 h-8 text-white opacity-80' />
								<h2 className='text-3xl md:text-4xl font-light text-white/90'>
									<Typewriter
										words={titles}
										loop={0}
										cursor
										cursorStyle='_'
										typeSpeed={80}
										deleteSpeed={50}
										delaySpeed={1000}
									/>
								</h2>
							</div>
						</div>

						{/* Contact Info */}
						<div className='flex flex-wrap justify-center md:justify-start gap-4 text-sm mt-6'>
							<div className='nav-pill flex items-center gap-2 bg-purple-700 text-white px-3 py-2 rounded-full'>
								<MapPin size={16} />
								<span>{location}</span>
							</div>

							<a
								href={`mailto:${email}`}
								className='nav-pill flex items-center gap-2 bg-purple-700 text-white px-3 py-2 rounded-full hover:underline'>
								<Mail size={16} />
								<span>{email}</span>
							</a>

							<a
								href={`tel:${phone}`}
								className='nav-pill flex items-center gap-2 bg-purple-700 text-white px-3 py-2 rounded-full hover:underline'>
								<Phone size={16} />
								<span>{phone}</span>
							</a>

							{github && (
								<a
									href={github}
									target='_blank'
									rel='noopener noreferrer'
									className='nav-pill flex items-center gap-2 bg-purple-700 text-white px-3 py-2 rounded-full hover:underline'>
									<Github size={16} />
									<span>GitHub</span>
								</a>
							)}

							{linkedin && (
								<a
									href={linkedin}
									target='_blank'
									rel='noopener noreferrer'
									className='nav-pill flex items-center gap-2 bg-purple-700 text-white px-3 py-2 rounded-full hover:underline'>
									<Linkedin size={16} />
									<span>LinkedIn</span>
								</a>
							)}
						</div>
					</div>

					
					<div className='flex-shrink-0'>
						<a
							href='/resume.pdf' // <-- Your PDF file path here
							download // <-- Forces download instead of opening
							className='group relative inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full font-medium shadow-2xl transition-all hover:shadow-3xl hover:scale-105 active:scale-100'>
							<div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity'></div>
							<FileText size={20} className='text-gradient' />
							<span className='text-gradient'>Download Resume</span>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
