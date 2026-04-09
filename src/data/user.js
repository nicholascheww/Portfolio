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
			{ name: "Blue Prism", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
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
			logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAugMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgYBBQcEA//EAEMQAAEDAwEEBQgIAwcFAAAAAAEAAgMEBREGEiExQQcTUWFxFCImMnSBkbFCYnKhssHC0SM1cxUWJCUzU4QXNENSov/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgUGBAP/xAAxEQEAAQMDAQUGBgMBAAAAAAAAAQIDEQQFITESIkFRwRMzNHGBsTJhkaHR8BQV4ST/2gAMAwEAAhEDEQA/AO4oCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgxlBr7nerfbRiqqAH8mN3u+C+1qxcu/hgw0ztbUId5tLO5vbuC9P8ArrnnC4bC36otda8RiYwyO3Bsw2c+B4L5XNHetxnGY/Iw3OQV5UZQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiYVElUZJVGCVRHKCJKoiSqMEq4ECUESVRDO5BlZ1y5pzgqjBKuBElUfaiqa6kqBT1UrIZSMhr3YBXwropt1dqmMSyTMzOZZ49R3uNgY2517AOXWuIH3X3/p9iPlH0Yx7y5dX6nqLpTiCojii2XbWWNxnHvK9Wn0VFqqapnJMOWurqLlPZiMK7pXUF6dJHb6rqpwNpzHsDmjx4LSX9ronsVYjn5LoiuavCuIMrnv64eoI2OY0kDJG7KxuXZ72MNfTVFPiMoQyuAHAgEZ4ggEe9Zi5FPEphExM4QfOpqIaaF0tRKyKNo3uecBRTTNUxFMZknEREZlX7XrW01EQZVufSv8A/JGCWn8R5LX3tnvWvw8U+f8AakxVHkuFNd7fWAmkrIJQOO0CF8K7NVHejBMTHVMBpO4HvVVRqRKCJKCJVWSFZEoMtQYJ4TlJY3mAGcKiWpobxUwt2Y6mZjfBsjgFvKNTctR2apj5uFVmiqe9EFwxlcKibhKCJKCJKsJVRJVGSVVEoI5VViWMgIYfB2eSumJzh0TFUxl1qPU1woGbEVVM1g4NLsgfJZtu9ct8Uz9YVlVNXiqfusTVdde6tkr5KqVjHPBMTCdnJXqt6OzR2aYj6rWq7VU9qZVJkhJVYJVGCUVYJVGCUESVRElVGSVVElUYJVGCVRAlVGSVRGCVAiSqIkqjBKCJKuBElUZJVBbei1jn6vEjt7YInOH7+t/Mhavd6sWYjzlJ6OvobqAgICAgICDAbns3rBdosWAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQf/9k=",
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