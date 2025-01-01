import Courses from "./components/Courses";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      var response = await axios.get("http://localhost:3001/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  if (loading) return <Loading />;

  if (!courses || courses.length === 0)
    return (
      <div className="refreshDiv">
        <h1>Kursların hepsini sildin!</h1>
        <button onClick={() => fetchCourses()}>Yenile</button>
      </div>
    );

  return (
    <div className="App">
      <h1>Kurslarım</h1>
      <Courses courses={courses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
