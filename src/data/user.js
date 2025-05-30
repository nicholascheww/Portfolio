const INFO = {
	main: {
		title: "Nicholas's Portfolio",
		name: "Nicholas Chew",
		email: "nicholaschew1916@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/nicholascheww",
		linkedin: "https://www.linkedin.com/in/nicholas-chew-2ab117286/",
	},

	homepage: {
		title: "Student at Nanyang Polytechnic studying Information Technology",
		description:
			"I am a student currently studying Information Technology at Nanyang Polytechnic. I am passionate about backend development as well as cloud computing. I am always looking for opportunities to learn and grow as a developer.",
	},

	about: {
		title: "I’m Nicholas Chew and I live in Singapore.",
		description:
			"I am currently pursuing a Diploma in Information Technology at Nanyang Polytechnic, driven by a deep-seated passion for coding that began at the age of 14. My journey in technology started early when I took Computing as an O-level subject, and since then, I have been dedicated to expanding my skills and knowledge in programming and software development. Throughout my studies, I have had the opportunity to explore various programming languages and tools, including Python, HTML, CSS, JavaScript, C#, Microsoft Excel, Kotlin, and React. Each language has added a unique perspective to my understanding of coding, and I enjoy the challenge of learning how different technologies contribute to creating dynamic and efficient software solutions. Beyond my studies, I have hands-on experience working with technology in professional settings, including customer support and real-time messaging systems, which have helped me develop strong problem-solving and communication skills. My commitment to continually improving my skills has also led me to pursue certifications, including the Python Certified Entry-Level Programmer and ongoing studies for the AWS Certified Cloud Practitioner certificate. Outside of academics, I have several hobbies that keep me engaged and creatively inspired. I enjoy building and customizing mechanical keyboards, which has deepened my appreciation for the craftsmanship and technical precision involved in tech hardware. I am also an avid gamer, a collector of Pokémon cards, and a football enthusiast, all of which have taught me the value of strategy, attention to detail, and perseverance. Thank you for taking the time to learn a bit about me. I am excited about the future and eager to apply my skills to new and meaningful projects!",
	},

	projects: [
		{
			title: "Verdex",
			description:
				"Verdex pioneers a solution to create personalized, sustainable itineraries, fostering community through a collaborative platform. Users can share plans and connect, enriching their travel experiences in Singapore. In this project, I developed a comprehensive admin portal that serves as a centralized hub for platform management. This portal provides admins with tools for real-time system health monitoring, user management (including information updates and forum bans), and generating performance reports. Additionally, admins can directly respond to customer inquiries submitted through the contact form. ",
			logo: "https://raw.githubusercontent.com/Verdex-Project/Verdex/refs/heads/main/assets/logos/transparentLogoColour.png",
			linkText: "View Project",
			link: "https://verdex.app",
		},

		{
			title: "MakanMatch",
			description:
				"In June 2024, I worked on MakanMatch, a web app built with Express.js and React to promote sustainability by reducing food waste and encouraging community bonding. Designed for use by community centers in Singapore, the platform allows residents to share meals, addressing the inefficiencies of single-person cooking. I developed the real-time messaging feature using Express WebSocket, allowing hosts and guests to chat once a meal reservation is made. Each reservation generates a unique chat history ID for storing and retrieving messages in a MySQL database. This feature includes options to send, edit, and delete messages, share images, reply to specific messages, and view online status, creating a smooth, interactive chat experience for users.",
			logo: "https://avatars.githubusercontent.com/u/171593551?s=200&v=4",
			linkText: "View Project",
			link: "https://makanmatch.com",
		},

		{
			title: "Mushroom Pocket",
			description:
				"This is a C# console-based, text game created for a school assignment. Players collect characters and, upon gathering enough of the same type, can evolve them into stronger forms. Additional features include character removal, mini-games to earn rewards and power-ups, and a battle system where players can pit their characters against computer-selected opponents. The game uses SQLite with Entity Framework for database management. Check out the source code by clicking the view project button.",
			logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAugMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgYBBQcEA//EAEMQAAEDAwEEBQgIAwcFAAAAAAEAAgMEBREGEiExQQcTUWFxFCImMnSBkbFCYnKhssHC0SM1cxUWJCUzU4QXNENSov/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgUGBAP/xAAxEQEAAQMDAQUGBgMBAAAAAAAAAQIDEQQFITESIkFRwRMzNHGBsTJhkaHR8BQV4ST/2gAMAwEAAhEDEQA/AO4oCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgxlBr7nerfbRiqqAH8mN3u+C+1qxcu/hgw0ztbUId5tLO5vbuC9P8ArrnnC4bC36otda8RiYwyO3Bsw2c+B4L5XNHetxnGY/Iw3OQV5UZQEBAQEBAQEBAQEBAQEBAQEGCUHnrq6moITLVytjbyzxPcBzWdFFVc4pgUq8avqKguhtzeoiP/AJD65/ZbSxoKae9c5XCsve57i57i5zjkuJ3lbCIiIxCo571RE4396K3Nm1PXWzZjJ8op/wDaed48Dy+S8l/RW7vMcSmF7tF+obsz/DybMoG+F+5w/dam9prln8UcefgmGzByvgjKAgICAgICAgICAgICAghLKyJhfI5rWt3lzjgBIiZ4gVS86xZGXQ2tnWP4dc4eaPAc1sbGgmrm5wuFOq6uesmM1VK6WQ83Hh3DsW0t26aIxTCvhnvWYjlURykDGVcCJKqsB5Y5r2OLXNOWuacEHuUmmJ4Ra7JraopsRXVpqI+Alb67fHt+a11/bqaubfE+SYXmgr6a4QCakmZKw82nh4jktTct1257NcI9IWAygICAgICAgICAgINBd9T0dvzHE7yioH0GHc3xdw93Feqxo7l3meI81wpN1vNbc35qpT1ectibuaPdz9629nT0Wo7sfVcNcTuX3EcoMEqiJKoxlVUSUESVRHKCJKo+1FW1NBUCejmfDIObDx7iOawrt0XI7NUZJhebHrqCXZhuwEEnDrmAlh8eY+S1Go22qnm1yxwuUUjJY2vjc17XDIc05BWsmJjiUTQEBAQEBAQM4QeC63WktcXWVUmCfVYPWd4L62rNd2cUijXnU9ZcdqOImnpz9Fh853iVt7Ojt2+Z5llhoc9nvXsGCUGCVRElBHKyVHKDBKogSgwSqIkoIkrIYygiSqNlZ7/cLNJmjm/h8XQyb2H3cvcvPf0tq/HejlMOi6e1ZQ3lzYT/AIer/wBp54/ZPNaPU6G5Y73WPNMLFkZwvGjKAgICAg81xq46GjlqpfVjaTgcT3LKiia6opjxHK7jWy3CrfU1Lsvdy5NHYF0Vq3Fqns0snlJX0GMqiJKYGCVYVElVESUVHKowSgjlURJVESVRElUYygiSgiSrgGvLHh7HOa9py1zTgg9quPAdd0TfDerXmfHlUB2JcfS7He/5grmdbp/Y3O7+GejGViXjQQEBAQVjX8xjtMMYOBLMAfcCV79vpibufJYc+JPNbmFRJVGMq4ESVVYJQRJVESUESVRglXAiSgiSqIkqiJKDGVYgRJVwIkqjBKC39F1S5l/mpwfMlpySO9pH7rWbrRE2Yq8pSXVFz7EQEBAQVLpF/l1H/X/SVsts95Py9VhQSVuFYymFRJVGxstlrL1KW0zA2Nvryv8AVb3d5Xw1GposR3uqZWuHQFJ1Y6+uqC/tjDWj7wVrZ3OvwphMtbdtC1NPGZbdP5SBvMbxsuPgeC+9rcqapxXGFyp7w5rnMc0tc0kFrhggjjnsW0iYmMwqBKoiTuz2Ki06V0kLzTOrKud8VPtFrBHjadjicngtdq9d7CrsUxmUmXh1Xp11gmi2JjLTzZDHOGHAjiCvto9X/kRMTGJgiWjgikqaiKnhbmWWRrGDvJwF66qoppmqfBV9/wCnMPke+4S+V447I6vPhx+9ab/bVRX+Hj90y5/UwvpqmanmAEkUjo3gciDgrd0VRXTFUeKviSshglURJQWrowPpV/xZPmxa/dPhvrHqk9HXFzbEQEBAQVHpIOLdR+0fpK2W2e8n5eqwoBK3LJAlUfSmgfV1UNNF68zwxp7CTjKxrqiimap8B2G30UNvo4qWnbsxxtwO/vPeuXuXJuVTXV1YvDc9S2q2VHk9XUETc2saXbPjjgvta0l67GaY4MNlR1UFZTMqKaRskTxlrhzXxroqons1Ryii9JFrZC+G5wgDrHdXKBzdjcfuI+C222XpmJtT4cwyhRiVt1byh0nea+nbUQ07WMeMt6x+ySPBeO5rrFFXZmTLo2k7fUWyyQ0lWGiVjnE7JyN5ytLq7tN29NdPSWMtfrqy1t6paWOhaxzo5C5227Z3EYX10Oot2KqprIlWrNou80l3oqmeOERQzse7EoJwDkrYXtwsV2qqYnrE+C5dMIHYtBPRi5he9F3qru1bVQRQmOadz2ZlAOCVvrG46ei3TTVniIZRKoV9HU2+qfS1kTopmcWu+Y7QtpbuU3Ke1ROYV5iV9BglBaui4+lf/Fk+bFr91+G+sepV0dfXNMBAQEBBT+kr+W0ftH6StntfvJ+XqsOfE7luWSJKDa6UwdSW4Hf/ABT+Erz6v4eono65hc0wcWvTy+83BziSTVS8ftldXp4iLVMR5QzW7o4ulPHTT2+eYMlMnWRB53EEAED4Zx3rV7pZqmqLlMeDGX36RrpSG1soWSskqJJGu2WnOyBvyVhtlmv2vbxiMLEOchwa5pIyAQSO1b3GVdstdzoa6jinpZ4zG5owM42e7C5O7art1zFUMcPe1zXDLSCO0FfNGHyMZjbe1ueGThOvQRE0RIAkYSeW0FcSPooPk6eFpwZWAjjlwTE+Q5R0lXKkr73Cyjc2Q08RZLK3gSTnGeePzXSbXart2pmrxn+/qyhUCVslRJVVbei4+lg9kk+bFrd1+G+seqVdHYFzTAQEBAQU7pL/AJbRe0fpK2e1+8n5eqw54St1EMkSVcDbaTPpNbv6p/CV5tZ8PUT0dfXNMHEbyf8AOK/2qX8ZXV2PdU/KPszh4Se3719RjPZ81REnO5MCJdsk78dquMjr3R8SdLUxOc7T/wARXN7j8RUxlqOlckW+gwSP4zvwr77T7yohRtNPP947YNo/91HkE/WW41Xua+PCfsyw7mVyMsHCtUk/3jujSdwqpN2eWSuu0mPYUfKGcNSTgBerCokoIkqi29Fh9Lh7JL82LW7tH/m+seqVdHY1zLAQEBAQU3pN/ltF7R+krabX7yr5erKHOiVuo6KiSqNtpE+k9t/qn8JXm1nw9X98SejsS5lg4dej/nNw7quYf/ZXWWObVHyj7Qzb/Q+moL2J6qtc8wRP6sRsONp2MnJ8CF4tfq6rGKaOspMvrrjStLaqRlfby9sW2GSxuOePAg+PzWOg1td6ubdzr4ESpYBc4NbxccDxW24jmVdStegrVHRxiubJPUFoMjtstGewAclz1zdL1VeaJxDHKzWy301rpG0lGwshaSQ0nPFeG7dru1dqueUfC8WWhvUccdwiMjY3bTQHEYPuWVnUXLMzNucLl4KXRljpamGphpntlheHsPWuOCDkc19q9ffrpmmZ4kysB3rxortZoqxVlTNU1FK50szy97hK4ZJ969lG4aiimKYniFy5lrbT7dPXZkUMjn007Osj2vWbg4IPbjdv71vtBqZ1NHPWGUK7le6FYJVFt6Kj6Xj2OX5sWt3b4X6x6pPR2VcwwEBAQEFL6UDi2UPtP6HLabV7yr5erKHOSVu46KjlUeq1Vv8AZ90pKzlDKHO+zz+7K+d637S3NHmO3RyMlja+Nwcxwy1w4EFcnMTE4lgpd90GK+4yVdJVtg65xfIx7NobR4kHI571tNPuc27cUVU5wsSsun7PBZLayjgJfvLnvdxe48/kPcvDqL9V+vt1GVX6UrgyKgpre12ZZpOscBya39yR8CthtNqZrm54RwsOabRyCCQRvyOS32Mqv9t6SBDSRxV9C+SZgwZI3ABw7cFaa7tGapmirhMLtYLqy9WyOujidE2QkBjjkjBwtVqLM2Lk25nOEl5NU6ji05BBNPBJMJXlgDCBjdnmvppdLVqapppnGCIaW3dItJXXCmo2W+oa6olbGHF7cDJxleu5tVduia5qjgwupWpnhFIufSNSW+4VNE+31D308joyQ9uHEbltbe1V3LcV9qOWWHPNUX+fUNyNVM0RxtbsRRA52R+ZPb4Ld6TS06a32I5ysNOSvWqBKC39FB9MR7HL+Ji1u7fC/WPVJ6Ozrl2AgICAgpXSkcWuh9p/Q5bXafe1fL1ZQ5vlbyOisEoIk+5UWzSes3WmIUdwa6WkH+m5u90Q7O8LW6zbovT26OKvukwvVPqmxTRh4utKzuleGH4HC09Wj1FM80SmGrvGvLVRxOFDJ5bPjzQzcwHvd+y9Fjbb1ye9xBhzC53GpulbJV1r9uaTjjcAOQHYF0Fq1TaoiimOIZPISvqIcThWR0fo91Rbqa0i23CpippYnEtdKdlr2k54ndlaLctHdquzcojMT5JLV9JGoqK6vpaS3yiZkDnPfK0+aTjAAPNejbNLctRVXXGMkQqFsrDQ3OkrNkuFPOyUtH0gCDhbO7b9pbqo84lk7INZ6fNF5WblCN2eq2v4mezY4rlv8DU9vsdn+P1YYcZutYbhc6utLdkVEz5A0/RBOQPguqs2/ZW6aPKGbxkr6iOUGCVRb+ic+mQ9il/FGtbu/wAL9Y+0lX4XaVyz5iAgICCl9KTHG0UjwCQyp3+9pC2m0zHtZj8lhzMlb6GTGVRElBElURJVGCUESUwqJKyESUEcqjBKCJKoiT4ZVGCVRHKCJKCJKounRFG5+rXyt9WOjeD3Zc3HyK1e8TjTRH5x6pV0doXLsBAQEBBq9TWz+17NUUbSBI5u1GTyeN4X30172N2mtYcSlZJFK6KVhZIw7LmO4tI4hdVTMTETHSWSBKzESUESVRElXAwSgjlVUSVRElBHKuBglMCJKyGCUESVRElBElBEu7VcDsPRJY5KC1S3KqYWTVuOra4bxEOB95yfDC5neNTFy77OnpHX5sal+WoYiAgICDBGUFU1bo2C9ONVSuEFbjefoyePf3rYaPX1WO7VzT9liXMLrbK201BguNO+F3JxHmu72ngVv7N63epzROf74snhJX3wIkoqJKqIkqqwSgiSqIkpAiSqMEqiJKDBKoiSqIkpAlTwzVUzYKaGSaZ5AbHE0ucfcFKpppjtVTiPzHStI9GrxLFW6iwA0hzaNhzk/XI+Q+JWh1u7xOaLH6/wxmXUGtDQA0YA4ALQsUkBAQEBAQEHnraKmrqd1PWQMmidxY8ZCyorqtz2qZxI51qLo7liLp7HIZGcfJpT5w+y7n4FbrTbrE929H1hlEqFURS00zoKhj45WbnMe3BC3NNUVR2qZ4ZPiSsxHKDBKoiSqMEoI5VESVRElBglWBAuHM45K4Fw010e3W8tZPWE2+kO/L25kePqt5eJ+BWr1W7WbOaaO9P7JmIdZsOnrZYIOqt1O1hIw6V3nPd4lc7qNVd1E5uT/DHOW2wvOjKAgICAgICAgIMFBqr7p+3XyLYr6cOeBhkrdz2eB/Jfexqbtic0T9Fzhy/UmhLlaC+ekBrKPjtsH8Rg+s3n4hdBpdztXuKu7P7MolUCeR4hbOFYJVEcoI5VGCUESVRHOUG607pa66hePIYC2mz51TL5rB4cye4fFeXU66zpvxzmfIzh1nTGhbVYtiZ0Yq61u/r5m+qfqjgPn3rm9VuV7UZjpT5fywmcrWF4EZQEBAQEBAQEBAQEBBhAIQVbUuhrZfNqZjfJKwj/AFohud9pvA+PFe/S7jdscTzT5LEuU6h01dLBKRXQF0BOGVEeXRuPeeR7j7srotNrLOojuTz5eLLLSZXrVglWBElB6bZbK+7VQprbSyVEx5NG5o7XHgB4rC7dt2ae1cnEff5DqOmejCkpQyovxbVzjf1Dc9U3x5u8OHcue1W73Ku7Z4jz8f8AjGavJ0CKJsTGsja1rGjAa0YAWmmZmcyxfRAQEBAQEBAQEBAQEBAQEBAQfOWJkzHRysa9jhhzXDIISJmJzAoeoejChrZHVFoqDQyu3mIt2oz4c2/LuW40+8XLcdm7Haj92USq8nRff2ybLZKN7f8A2EhH5L3xvOn8YlcttZ+ic9Y2S83AFg3mGlBG13F5/Ie9ee9vfGLVP1n+DtOjWy10VrpW01vp2QRN+iwcT2k8ytHdu13au1XOZYPYsAQEBAQEBAQEBAQEBAQEBAQEBAQEGMIMoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg/9k=",
			linkText: "View Project",
			link: "https://github.com/nicholascheww/MushroomPocket",
		},

		// {
		// 	title: "Project 4",
		// 	description:
		// 		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		// 	linkText: "View Project",
		// 	link: "https://github.com",
		// },

		// {
		// 	title: "Project 5",
		// 	description:
		// 		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		// 	linkText: "View Project",
		// 	link: "https://github.com",
		// },
	],
	works:[
		{
			title: "Aftershock PC",
			jobTitle:"Part time retail sales associate",
			description: "As a Sales Associate at Aftershock PC, I assist customers in selecting high-performance custom-built gaming and productivity systems tailored to their needs. My role involves guiding clients through the wide range of PC customization options, providing product knowledge, and ensuring a seamless and personalized shopping experience. By leveraging my technical expertise, I help customers make informed decisions, from choosing the right components to understanding performance benchmarks. I'm passionate about delivering top-tier customer service and contributing to Aftershock's reputation for quality and innovation.",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd1f2OKvmtwJXojtrG447kRDydNCKUinJSg&s",
			duration: "August 2024 - Present",
		},

		{
			title: "PRISM+",
			jobTitle:"Part time retail sales associate",
			description: "I helped out in assisting customers with queries about PRISM+ products. Some products that PRISM+ sell are TVs, Monitors, Soundbars, Air Conditioners, Ceiling Fans, Air Purifiers and Refrigerators. I was required to have knowledge about PRISM+ products and be able to answer any questions that customers may ask me about. Through this job, I was able to pick up skills such as customer service and working as a team as there is sales target for different stores.",
			logo: "https://www.capitaland.com/content/dam/capitaland-sites/singapore/shop/malls/tampines-mall/tenants/Prism%2B%20Logo%20982x818px%20(1).png.transform/cap-midres/image.png",
			duration: "November 2022 - December 2023"
		},
		{
			title: "Monetary Authority of Singapore",
			jobTitle:"Intern",
			description: "During this internship I worked under the Information Technology Department in the Enterprise Platform Divison in the Robotic Process Automation team. I learned valuable skills such as Blue Prism to automate processes in MAS.",
			logo: "https://media.licdn.com/dms/image/v2/D560BAQE1brqQnxYscA/company-logo_200_200/company-logo_200_200/0/1680747615720/mas_logo?e=1753920000&v=beta&t=F1NOwSXzrwazlWtlf4p5aW3fKcKnml7Y1OiARXpOfYA",
			duration: "April 2025 - Present"
		},
	]
};

export default INFO;
