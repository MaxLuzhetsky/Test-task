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

  return (
    <div className="courses-list">
      <div className="courses-list__container">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
