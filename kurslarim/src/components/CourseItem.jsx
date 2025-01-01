import axios from "axios";

function CourseItem({ course, onDelete }) {
  const { id, content, title, price } = course;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="course-item">
      <h2>{title}</h2>
      <p className="price">{price} ₺</p>
      <p>{content}</p>
      <button onClick={handleDelete}>Sil</button>
    </div>
  );
}

export default CourseItem;
