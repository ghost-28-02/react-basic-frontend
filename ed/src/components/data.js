const data = [
  {
    "id":1,
    "title": "Web Development Fundamentals",
    "category": "Development",
    "description": "Learn the essential concepts and tools for creating modern, responsive websites using HTML, CSS, and JavaScript. This course walks you through website structure, layout techniques with Flexbox and Grid, and adding interactivity with DOM manipulation and events. By the end, you'll be confident in building static and dynamic websites from scratch.",
    "image":"/images/Web_Development_Fundamentals.png"
  },
  {
    "id":2,
    "title": "Data Science Essentials",
    "category": "Development",
    "description": "Gain a strong foundation in data science by learning how to collect, clean, analyze, and visualize data. Explore Python libraries like Pandas, Matplotlib, and Scikit-learn while working on real-world datasets. Understand key concepts such as regression, classification, and clustering to draw meaningful insights from data.",
    "image":"/images/Data_Science_Essentials.png"
  },
  {
    "id":3,
    "title": "Software Testing Fundamentals",
    "category": "Development",
    "description": "Understand the core principles of software quality assurance and testing methodologies. Learn how to design effective test cases, automate testing workflows, and detect bugs early in the development cycle. This course covers manual testing, test-driven development (TDD), and common automation tools like Selenium and JUnit.",
    "image":"/images/Software_Testing_Fundamentals.png"
  },
  {
    "id":4,
    "title": "Mobile App Development with React Native",
    "category": "Development",
    "description": "Build cross-platform mobile applications using React Native and JavaScript. Learn to structure mobile UIs, handle user input, and integrate APIs for dynamic content. This course helps you deploy your apps to Android and iOS devices, while understanding performance optimization and debugging techniques.",
    "image":"/images/Mobile_App_Development_with_React_Native.png"
  },
  {
    "id":5,
    "title": "DevOps for Agile Teams",
    "category": "Development",
    "description": "Explore how DevOps practices bridge the gap between development and operations for faster, more reliable delivery. Learn about continuous integration (CI), continuous deployment (CD), containerization using Docker, and infrastructure automation. Perfect for teams adopting Agile methodologies and modern release cycles.",
    "image":"/images/DevOps_for_Agile_Teams.png"
  },
  {
    "id":6,
    "title": "Full Stack Web Development",
    "category": "Development",
    "description": "Master the complete process of web development, from designing beautiful frontends with React to building robust backends using Node.js, Express, and MongoDB. Understand authentication, APIs, database integration, and deployment workflows to become a full-stack engineer capable of creating complete web apps.",
    "image":"/images/Full_Stack_Web_Development.png"
  },
  {
    "id":7,
    "title": "Cloud Computing with AWS",
    "category": "Development",
    "description": "Learn how to design, deploy, and manage scalable applications on Amazon Web Services (AWS). This course covers EC2, S3, Lambda, and IAM, while introducing cloud architecture best practices, automation, and security management for real-world projects.",
    "image":"/images/Cloud_Computing_with_AWS.png"
  },
  {
    "id":8,
    "title": "Python Programming Masterclass",
    "category": "Development",
    "description": "A comprehensive Python course that covers syntax, data structures, OOP, file handling, and error management. You'll build small projects and scripts to automate tasks and analyze data using powerful libraries like NumPy and Pandas.",
    "image":"/images/Python_Programming_Masterclass.png"
  },
  {
    "id":9,
    "title": "Cybersecurity Fundamentals",
    "category": "Development",
    "description": "Dive into the world of cybersecurity and learn how to protect systems from digital threats. Understand encryption, firewalls, authentication, and ethical hacking principles. This course helps you build a mindset for secure coding and network defense.",
    "image":"/images/Cybersecurity_Fundamentals.png"
  },
  {
    "id":10,
    "title": "AI & Machine Learning Basics",
    "category": "Development",
    "description": "An introduction to artificial intelligence and machine learning concepts. Learn about supervised and unsupervised learning, neural networks, and data preprocessing. Get hands-on experience with basic ML models using Python and Scikit-learn.",
    "image":"/images/AI_and_Machine_Learning_Basics.png"
  },
  {
    "id":11,
    "title": "Introduction to Marketing",
    "category": "Business",
    "description": "Explore the key principles of marketing, from understanding consumer behavior to building effective branding strategies. Learn digital marketing tools, campaign planning, and performance analytics to attract and retain customers in competitive markets.",
    "image":"/images/Introduction_to_Marketing.png"
  },
  {
    "id":12,
    "title": "Leadership Development",
    "category": "Business",
    "description": "Enhance your ability to lead and inspire teams through effective communication, emotional intelligence, and decision-making. This course focuses on practical leadership models, conflict resolution, and creating a collaborative work culture.",
    "image":"/images/Leadership_Development.png"
  },
  {
    "id":13,
    "title": "Finance for Non-Financial Managers",
    "category": "Business",
    "description": "Designed for professionals without a finance background, this course teaches how to read balance sheets, manage budgets, and analyze financial performance. Gain confidence in making informed financial decisions and resource allocations.",
    "image":"/images/Finance_for_Non-Financial_Managers.png"
  },
  {
    "id":14,
    "title": "Entrepreneurship and Innovation",
    "category": "Business",
    "description": "Learn how to transform ideas into successful startups. This course covers business model development, funding strategies, market validation, and innovation techniques used by top entrepreneurs around the world.",
    "image":"/images/Entrepreneurship_and_Innovation.png"
  },
  {
    "id":15,
    "title": "Project Management Essentials",
    "category": "Business",
    "description": "Understand how to plan, execute, and monitor projects using Agile, Scrum, and traditional methodologies. Learn to manage teams, timelines, and budgets while maintaining quality and stakeholder satisfaction.",
    "image":"/images/Project_Management_Essentials.png"
  },
  {
    "id":16,
    "title": "Operations Management Fundamentals",
    "category": "Business",
    "description": "Gain a deep understanding of process design, supply chain management, and quality control. Learn how to optimize business operations for efficiency and customer satisfaction across industries.",
    "image":"/images/Operations_Management_Fundamentals.png"
  },
  {
    "id":17,
    "title": "Human Resource Management Basics",
    "category": "Business",
    "description": "Learn modern HR principles including recruitment, onboarding, training, and employee engagement. Discover how to create productive workplaces and manage talent effectively in fast-changing organizations.",
    "image":"/images/Human_Resource_Management_Basics.png"
  },
  {
    "id":18,
    "title": "Digital Marketing Strategy",
    "category": "Business",
    "description": "Master SEO, PPC, social media, and email marketing to drive traffic and conversions. Build brand awareness and measure results using Google Analytics and other digital marketing tools.",
    "image":"/images/Digital_Marketing_Strategy.png"
  },
  {
    "id":19,
    "title": "UI/UX Design Fundamentals",
    "category": "Design",
    "description": "Develop the skills to design user-centered digital experiences. Learn wireframing, prototyping, and usability testing using tools like Figma and Adobe XD to create intuitive and accessible interfaces.",
    "image":"/images/UI_UX_Design_Fundamentals.png"
  },
  {
    "id":20,
    "title": "Graphic Design with Canva",
    "category": "Design",
    "description": "Learn graphic design basics like color theory, typography, and layout while using Canva to create social media posts, presentations, and marketing materials quickly and effectively.",
    "image":"/images/Graphic_Design_with_Canva.png"
  },
  {
    "id":21,
    "title": "Motion Graphics for Beginners",
    "category": "Design",
    "description": "Understand key animation principles and create engaging motion graphics using Adobe After Effects. Learn how to animate text, shapes, and objects for dynamic video content.",
    "image":"/images/Motion_Graphics_for_Beginners.png"
  },
  {
    "id":22,
    "title": "Web Design Principles",
    "category": "Design",
    "description": "Study modern web design techniques focusing on usability, accessibility, and responsive design. Learn how to balance aesthetics with functionality for better user engagement.",
    "image":"/images/Web_Design_Principles.png"
  },
  {
    "id":23,
    "title": "3D Modeling and Animation Basics",
    "category": "Design",
    "description": "Get started with 3D design using Blender or Maya. Learn how to model, texture, and animate 3D assets for games, films, or digital art projects.",
    "image":"/images/3D_Modeling_and_Animation_Basics.png"
  },
  {
    "id":24,
    "title": "Design Thinking for Creatives",
    "category": "Design",
    "description": "Learn to solve complex problems creatively using empathy, ideation, prototyping, and testing. This course applies design thinking frameworks to real-world innovation challenges.",
    "image":"/images/Design_Thinking_for_Creatives.png"
  },
  {
    "id":25,
    "title": "Personal Productivity Mastery",
    "category": "Lifestyle",
    "description": "Boost your focus, time management, and goal-setting abilities through proven productivity systems. Learn to overcome procrastination, manage tasks efficiently, and maintain long-term motivation.",
    "image":"/images/Personal_Productivity_Mastery.png"
  },
  {
    "id":26,
    "title": "Health & Wellness Fundamentals",
    "category": "Lifestyle",
    "description": "Build a healthier life through physical fitness, balanced nutrition, and mindfulness. This course covers daily routines and science-backed habits for lasting wellness and energy.",
    "image":"/images/Health_and_Wellness_Fundamentals.png"
  },
  {
    "id":27,
    "title": "Mindfulness and Meditation",
    "category": "Lifestyle",
    "description": "Learn practical meditation techniques to reduce stress, improve concentration, and cultivate a calm, mindful mindset. Perfect for beginners seeking balance and emotional clarity.",
    "image":"/images/Mindfulness_and_Meditation.png"
  },
  {
    "id":28,
    "title": "Financial Wellness for Individuals",
    "category": "Lifestyle",
    "description": "Understand how to manage money effectively, from budgeting and saving to investing and debt reduction. Gain control over your financial future with simple, actionable strategies.",
    "image":"/images/Financial_Wellness_for_Individuals.png"
  },
  {
    "id":29,
    "title": "Career Growth and Communication Skills",
    "category": "Lifestyle",
    "description": "Improve your interpersonal communication, public speaking, and negotiation skills to accelerate your career. Learn how to build confidence and present yourself professionally.",
    "image":"/images/Career_Growth_and_Communication_Skills.png"
  },
  {
    "id":30,
    "title": "Creative Writing and Storytelling",
    "category": "Lifestyle",
    "description": "Unleash your creativity by mastering storytelling structures, character development, and narrative voice. Ideal for aspiring authors, content creators, and scriptwriters.",
    "image":"/images/Creative_Writing_and_Storytelling.png"
  }
];

export default data;