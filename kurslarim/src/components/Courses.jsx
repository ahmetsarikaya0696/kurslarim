import CourseItem from "./CourseItem";
import "../App.css";

function Courses({ courses, onDelete }) {
  return (
    <div className="courses">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Courses;
