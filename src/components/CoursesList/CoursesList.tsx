import React, { useEffect, useState } from "react";

import { fetchCourses } from "../../api/api";
import { Course } from "../../types";
import CourseCard from "./CourseCard";

const CoursesList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function loadCourses() {
      const result = await fetchCourses();
      setCourses(result);
    }

    loadCourses();
  }, []);

  console.log(courses);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
