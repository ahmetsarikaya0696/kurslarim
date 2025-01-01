import CourseItem from "./CourseItem";
import "../App.css";
import { useState } from "react";

function Courses({ courses }) {
  const [index, setIndex] = useState(0);
  const course = courses[index];

  const handleBeforeClick = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const handleAfterClick = () => {
    if (index === courses.length - 1) return;
    setIndex(index + 1);
  };

  const handleAssignRandomCourse = () => {
    const randomIndex = Math.floor(Math.random() * courses.length);
    setIndex(randomIndex);
  };

  return (
    <>
      <button onClick={handleAssignRandomCourse}>Rastgele Kurs Ata</button>
      <div className="courses">
        <button onClick={handleBeforeClick} disabled={index === 0}>
          &larr;
        </button>
        <CourseItem key={course.id} course={course} />
        <button
          onClick={handleAfterClick}
          disabled={index === courses.length - 1}
        >
          &rarr;
        </button>
      </div>
    </>
  );
}

export default Courses;
