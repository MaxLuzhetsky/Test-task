// import axios from "axios";
import { Course } from "../types";
import sampleVideo from "../assets/media/testVideo.mp4";

export async function fetchCourses(): Promise<Course[]> {
  //   await axios.get("/mock/users");
  return [
    {
      id: 1,
      title: "Course 1",
      description:
        "Learn the fundamentals of programming, including variables, loops, and functions. This course is perfect for beginners who want to start their coding journey.",
      videoUrl: sampleVideo,
      price: "150$",
    },
    {
      id: 2,
      title: "Course 2",
      description:
        "Explore the world of web development with hands-on projects. Build responsive websites using HTML, CSS, and JavaScript from scratch.",
      videoUrl: sampleVideo,
      price: "250$",
    },
    {
      id: 3,
      title: "Course 3",
      description:
        "Understand how to analyze and interpret data effectively. Learn essential tools and techniques to make data-driven decisions.",
      videoUrl: sampleVideo,
      price: "300$",
    },
    {
      id: 4,
      title: "Course 4",
      description:
        "Discover the basics of digital marketing, including social media, SEO, and content strategy. Ideal for anyone looking to boost online presence.",
      videoUrl: sampleVideo,
      price: "400$",
    },
  ];
}
