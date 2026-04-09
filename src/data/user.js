const INFO = {
	main: {
		title: "Nicholas's Portfolio",
		name: "Nicholas Chew",
		email: "nicholascheww@gmail.com",
		logo: "../logo.png",
		initials: "NC"
	},

	socials: {
		github: "https://github.com/nicholascheww",
		linkedin: "https://www.linkedin.com/in/nicholas-chew-2ab117286/",
	},

	homepage: {
		title: "Information Technology Graduate · Nanyang Polytechnic",
		description:
			"I am a graduate from Nanyang Polytechnic with a diploma in Information Technology. I am passionate about backend development as well as cloud computing. I am always looking for opportunities to learn and grow as a developer.",
	},

	about: {
		title: "I'm Nicholas Chew, based in Singapore.",
		description:
			"I'm a graduate from Nanyang Polytechnic with a Diploma in Information Technology, with a passion for coding that started at 14.\n\nOver the years I've worked across Python, JavaScript, React, Kotlin, C# and more — building everything from web apps to automation tools. During my final year, I completed a 1-year internship that introduced me to Robotic Process Automation using Blue Prism.\n\nOutside of tech, I build mechanical keyboards, collect Pokémon Cards, watch football, and game competitively. I care about the details — whether that's in code or a Pokémon Card's Artwork.",
	},

	skills: {
		languages: [
			{ name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
			{ name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
			{ name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
			{ name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
			{ name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
			{ name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
		],
		tools: [
			{ name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
			{ name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
			{ name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
			{ name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
			{ name: "Blue Prism", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKp-03nMpIuw0t3VQ_584i0VgqyAG2I4YiA&s" },
			{ name: "UiPath", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTextz3wpDEU_w4Q_6zzG3HmTrWsx5NlunQVw&s" },
			{ name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
			{ name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
		],
	},

	projects: [
		{
			title: "Verdex",
			description:
				"Verdex pioneers a solution to create personalized, sustainable itineraries, fostering community through a collaborative platform. Users can share plans and connect, enriching their travel experiences in Singapore. In this project, I developed a comprehensive admin portal that serves as a centralized hub for platform management. This portal provides admins with tools for real-time system health monitoring, user management (including information updates and forum bans), and generating performance reports. Additionally, admins can directly respond to customer inquiries submitted through the contact form.",
			logo: "https://raw.githubusercontent.com/Verdex-Project/Verdex/refs/heads/main/assets/logos/transparentLogoColour.png",
			linkText: "View Project",
			link: "https://verdex.prakhar.app",
		},
		{
			title: "MakanMatch",
			description:
				"In June 2024, I worked on MakanMatch, a web app built with Express.js and React to promote sustainability by reducing food waste and encouraging community bonding. Designed for use by community centers in Singapore, the platform allows residents to share meals, addressing the inefficiencies of single-person cooking. I developed the real-time messaging feature using Express WebSocket, allowing hosts and guests to chat once a meal reservation is made. Each reservation generates a unique chat history ID for storing and retrieving messages in a MySQL database. This feature includes options to send, edit, and delete messages, share images, reply to specific messages, and view online status, creating a smooth, interactive chat experience for users.",
			logo: "https://avatars.githubusercontent.com/u/171593551?s=200&v=4",
			linkText: "View Project",
			link: "https://makanmatch.prakhar.app",
		},
		{
			title: "Mushroom Pocket",
			description:
				"This is a C# console-based, text game created for a school assignment. Players collect characters and, upon gathering enough of the same type, can evolve them into stronger forms. Additional features include character removal, mini-games to earn rewards and power-ups, and a battle system where players can pit their characters against computer-selected opponents. The game uses SQLite with Entity Framework for database management. Check out the source code by clicking the view project button.",
			logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAA81BMVEX///+hedwoAGg5AJEvAI17Z7Gfdtv9/P6dc9s0AI+bcNogAIlpU6fLxN6qoMwoAIuJf7ibmMEQAIXMyN+UiL4fAGQAAFfw6vmZbdoAAFsUAGAAAFKmgN76+P3RwO2phd/e0vLm3fW9o+bFr+nDvtHKxta0luLp5+7i3+nWx++5neXKtuv18fuwj+GUZNjBqedZUZ9RQJtRM5s1CH84BoqTbM2Dd7V5b5lQTH2zrsSHX8dIIJ9ZM6duSLRKKplRKaHAuNhzaayjlshtTKh7WLQ8Jn00GXJAM4BPQn4qIGhrY485HJEgC2SgmbaMhahbV4Q3LHAeIBsCAAAKCElEQVR4nMWbe1uiXBeHNW2DWNlboYig4pE0dexJzaYa32oaNTW//6d5NuABZR8WiPP8/piLuka42WvtddoWifhXpixFYULS7V2AB/iXkNegTFhKq/gXkAxNRHAmvFhiK3NkJqOk+EKyJErNY2LpzajoF8nG0m6PhlQUfTjTrhTNOAqTUZN8W24rhErh78NMw78z7Qq7VrhYej4a2HJbhRse/IYBmpBYCGsfGg0lDCIHSymHgSV0goUBmiQtfyiSfquEimRJiRaFQ5iMVgj+7RESG8FteHdQZGJJFMvBwsNdE4Vuua2UIJlHKBaOYbmtAlQPRstHAEeiJCm2JEmEry5SSn6w9BLQcghJSrtdaHSa+VusfL5caknttgKMtZLWBCPlJRASrhlajbyhe26QKZZbBRG0SSRgeCi2IAFcVMQSCWgL1iwoAK9EUoNf1GRagKXHxq0V73ivKGSaGsANRNShv5uluzLAUZFSyEM9tFhC/OWSonnGC94CwgDCWcJH4BMyJX6iQlKNZkOjwHcmJPmviXRASkdtYni4KwGcSUK3bPuTlSm1ufcWtfK+DXVITkGoE4DIFiSz74cHAxIGlMIBHYne5MctbEOXt95CwoAUMLFvXlwDhIfoxrNuAcskasWDkCJW8gLsbbSyhgFYJ1ELobQW8m0+VcHeSQICMNUOR7JkRPm70H5Unm9qpRwkEJCU4eb6p5/XOD61uPBSOSQki6rApELPidQlXlGulyvgoudQKvSSiMcSr2Ykz9sSSojrZFNR/erpVzyGlbyOlDhGFkNmwlQakerpVypmK3kR4biUVDuocSTK8EYGDVsu4TDFUjcRjcmECuEzWRlk/zFbpFgs3o+wjRc9zrSyvLu7Vs60hjplQynFozBFIu4t2Ht2LRMfSgpcqvC0dXbxZReJB4UKxzsuyDsG1F5+xmMxP1DScSa6jmpi1BUGwFBS6YhMOIZiy8UTXiYmFNL8GU8Q/EWPvMeZAFAieAyoZ4r5ZrlT6pSbtwb0TUZnBMvxoMBh0+gUNGSNW0QR/xst1PKAOsf8f9zj4AAoWIjK5LX2XuGKpHaDM7Wov11RkVhQoIUSmhqxRxHFGuuVRl2a5ThQIn+hhKJELXuQQp21XneTZAfnQgHiJqc5wa0l6VPGZYphOTaUxK02OXWtNS9qejxAv/jiITGg2rwdZADafKW0exdhdJ/kItGhEK+lAvRKUSsnuNfKOOVajgnFiweQ/tW+T2PzEfOGFQYAUIhzAqYDxgIrqlVaEC42lksktuklQco0NCh2KhYa8GG5HVqE69fU+ulfP3786K6Q7vH1PRSKk/a4XZn7/aJCxOxvI1P8DN/g2vkRty2RyP88gZQCJTGtp/s6kxQ7b1+u58bPsO+fB4FCzIXyYTx8q6fEThgIDCU2WEyGDySt92vPlQNDKcxTrw7co3rPqf3dFRyKVZvrYCb08uDd8MF9iuXneaibP+0hxW0l3y2oVMq6vrKhruzfpzhQqMWqEPjjLAfpeS9+f/Uvbb0JVqlgq3+O73fu/P7miw0lNhjZOANbJo/lEl3Tai1W3YUgbK7XV/cJNhSrL/bMJgiyZ18xLxRTPChWLdXkQ+2OKzZQ9cOgGElG6PCger+IHWbsfnTtCN+lvrq0Fs9cXb5yfIoRpvQa28/RS4xSgCeSV7a61u5zLq/eItbuc5QIDsWZJT/9ZPcEweMUKjKgyPPKFRJpXPE3oBjL9Eyz3H+2Ur13Vf3n4YhQLJ8qkKE+fqsnWP8cDcq/o/d+y/KJI/pixVOWnNyXtC7Xuc/+PS/3seKUTqjwUHeDZC0WBev17cLWCN/FdC4vrJh1vbrm5T5WRPcGz49PFxLVhgdHdNbBx/5B3MeneuIRYbEOzn0lxhTI2HWmHcuxbHjoSqEao3TRXccm6F0lItlY+zHrtX9jy3Juw7m8tOqp0aV9/cbxKfYYaOvpqzBAxdqjSiUtXTm7z7l2dp/zQ4wNxW771oeWrjBAE2kfHqdxEOzw2etmeUhE1woOxZ6YWU37+34YgNowOBQqsKD0AjEM0LHioUBFFeZkeJSDI52cyH9OXQWcM+AIBMU5KRr7WKiTdCVyfr9tlONnuuCCEuBQnMNscwJnyg4si188rB+deO33+6cOVOL9st/veoow2tSFFT6xhlmw8R6dQG6eJteuZfXDa0LcKBM6e9oglnPSNwBSyfIm452fcmb6XCiJc4IlTEFuJWcr28/ooxRkYM1YKfbYDLhW8qy68xn9EjDaZw33eSe1Ap9KnlX2P3W9Ex78QiHmMM/WnF4i2FIfSRXUqOuZo4GhooA/U6qOGYslqwPyDtZ35rL+oPgnRvj+iyzF3+XsZ5X6MfOUffbAOhmFHAbXF0tCtaBmv4fMj7HDAwMK+PUyczjJZV2Vlaym04Mq7wzMFeJ9QUWj0K9K1OfTx/FkhvW5HD/yiWwJl69BoJ5ugFDWm9erFayqyekO3BrR+lY6VK87S9N9NQQJA9nTXLCh7D5FnoT1RUqShmnsgMS+lQL18dv2XHV+PCZ94mwOgg2JUL3f66CoevJEWNpmdG9zQYBC79sNLi+P8Y08S0NX1N23oRfqY+YOhurgOExmeifaPjChPE3vcdyqPt4f1DzsQrlnA4RxhXqEuEAqEV02jPe3B0A98rhiFjqVsEgTnrMdiaTeNlMw2rhCXvqI0iDNaaX0yobJUaRoDyx69KZXnoVLNSeuk2ux4qZ9VtbrsopIeRwmFbs9w66VOMNFU0nkjSvkz/CoqLZb6yFundgYM267JC9D8nZ9AZhD2NXllN8tyZNwEg6gXcw5RasOGVhkF4eXDCZghJRdrDJbnT28XP3vwaGONZzwJ23p6ebd9UcAlfp5kAnrA06feGKNHhauCkAf0polt3ILzoCeocoEYLrl3mubU/6LnKhLdutEX6Zv7igZ94oLr4NUvwED3/S44r/EMudpftRRB0QzgGwoq1OfrqXPl/yYk15WaS+rLwCWl7HpwRtRMBc5vl9w3KI6yPFtKKfHc5DL68OBCojMad4GEipLgMfL6mQ8rzPDqaBXp0sZ4g/fgBfU5wAbWlbE6zWsEscgglkZTuUc5DbZMXBDmxAb2i+pTh6ni2G1vnVS3azMB99jGRL3sDPl5vA8UZ1CzoNsMFnNpnO5XFo++cTPsK6y/Ji0filCZGJIGE7As/Kgyo595y0BEh4OUMDsYA7SQDsEQFJ9ONPuYlXHgPAQQLAwQBUkRfgWbyTKVX0BCw9wqdl5CEUsoDrzgTQLoa62NPxD7x99KjcNbQoQVnhQoTkFJnNxuA3VzxCcaVfVP9DMQ5acnh4SBmgasg6IeEjZ8JxpV/VF0BCfnQ2PN/6uf88CYKmfIYUBmiqPflcLO9NRjy4sAQvTDZIapCnzr/oAWsVhy00Wf4HIlgmZPVgKOBX5FxzbOkRWc5MHAAAAAElFTkSuQmCC",
			linkText: "View Project",
			link: "https://github.com/nicholascheww/MushroomPocket",
		},
		{
			title: "Recyclify",
			description:
				"Recyclify is an AI-powered sustainable classroom management platform designed to boost student engagement in environmental efforts. It provides an intuitive, web-based system that encourages students to complete recycling tasks, earn rewards, and contribute to a greener future.",
			logo: "https://avatars.githubusercontent.com/u/191305739?s=200&v=4",
			linkText: "View Project",
			link: "https://github.com/RecyclifyApp?view_as=public",
		},
	],

	works: [
		{
			title: "Monetary Authority of Singapore",
			jobTitle: "Intern",
			description: "During this internship I worked under the Information Technology Department in the Enterprise Platform Division in the Robotic Process Automation team. I learned valuable skills such as Blue Prism to automate processes in MAS.",
			logo: "https://media.licdn.com/dms/image/v2/D560BAQE1brqQnxYscA/company-logo_100_100/company-logo_100_100/0/1680747615720/mas_logo?e=1776902400&v=beta&t=9om6gd26exaCWu7IYNocZ5q6vRPiLW9O1XFcnXqFoXE",
			duration: "April 2025 - Present"
		},
		{
			title: "Aftershock PC",
			jobTitle: "Part time retail sales associate",
			description: "As a Sales Associate at Aftershock PC, I assist customers in selecting high-performance custom-built gaming and productivity systems tailored to their needs. My role involves guiding clients through the wide range of PC customization options, providing product knowledge, and ensuring a seamless and personalized shopping experience. By leveraging my technical expertise, I help customers make informed decisions, from choosing the right components to understanding performance benchmarks. I'm passionate about delivering top-tier customer service and contributing to Aftershock's reputation for quality and innovation.",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd1f2OKvmtwJXojtrG447kRDydNCKUinJSg&s",
			duration: "August 2024 - Present",
		},
		{
			title: "PRISM+",
			jobTitle: "Part time retail sales associate",
			description: "I helped out in assisting customers with queries about PRISM+ products. Some products that PRISM+ sell are TVs, Monitors, Soundbars, Air Conditioners, Ceiling Fans, Air Purifiers and Refrigerators. I was required to have knowledge about PRISM+ products and be able to answer any questions that customers may ask me about. Through this job, I was able to pick up skills such as customer service and working as a team as there is sales target for different stores.",
			logo: "https://www.capitaland.com/content/dam/capitaland-sites/singapore/shop/malls/tampines-mall/tenants/Prism%2B%20Logo%20982x818px%20(1).png.transform/cap-midres/image.png",
			duration: "November 2022 - December 2023"
		},
	]
};

export default INFO;