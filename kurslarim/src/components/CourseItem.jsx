import axios from "axios";

function CourseItem({ course, onDelete }) {
  const { id, content, title, price } = course;

  return (
    <>
      <div className="course-item">
        <h2>{title}</h2>
        <p className="price">{price} ₺</p>
        <p>{content}</p>
      </div>
    </>
  );
}

export default CourseItem;
