// import axios from "axios"  Закоментував, аби не було помилки;
import { Course } from "../types";
import sampleVideo from "../assets/video/testVideo.mp4";

export async function fetchCourses(): Promise<Course[]> {
  //   await axios.get("/mock/users"); Закоментував, аби не було помилки
  return [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description:
        "Learn to build modern, responsive web applications using HTML, CSS, JavaScript, and Node.js. Gain hands-on experience with databases, RESTful APIs, authentication, and deploying real-world projects. Perfect for anyone looking to launch a career as a web developer.",
      videoUrl: sampleVideo,
      price: "150$",
    },
    {
      id: 2,
      title: "Cybersecurity Fundamentals",
      description:
        "Understand security principles, network protocols, and threat prevention. Learn ethical hacking, encryption methods, risk assessment, and incident response. Build the skills needed to protect organizations against cyber attacks and secure sensitive data effectively.",
      videoUrl: sampleVideo,
      price: "250$",
    },
    {
      id: 3,
      title: "Cloud Computing with AWS",
      description:
        "Explore cloud architecture, serverless computing, and deploying scalable applications on AWS. Gain practical experience with storage, networking, virtual machines, and cloud security best practices to manage modern cloud infrastructures.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      price: "300$",
    },
    {
      id: 4,
      title: "Data Science & Machine Learning",
      description:
        "Analyze large datasets, build predictive models, and visualize insights using Python, Pandas, and TensorFlow. Learn feature engineering, supervised and unsupervised learning, and apply machine learning techniques to real-world business problems.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      price: "400$",
    },
    {
      id: 5,
      title: "DevOps & CI/CD Pipelines",
      description:
        "Master automation, continuous integration, deployment strategies, and infrastructure as code. Learn containerization, monitoring, and cloud orchestration tools to build efficient, scalable, and highly available software systems.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      price: "400$",
    },
  ];
}
