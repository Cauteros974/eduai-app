import { useNavigate } from "react-router-dom";
import { CourseCard } from "../features/Course/CourseCard";
import styles from './HomePage.module.css';

const mockCourses = [
  { id: 1, title: "Introduction to React", description: "Basics of modern web development.", imageUrl: "/images/react.png" },
  { id: 2, title: "TypeScript for professionals", description: "Learn static typing.", imageUrl: "/images/Typescript.png" },
  { id: 3, title: "Node.js and Express", description: "Creation of powerful backend services.", imageUrl: "/images/Node.js.png" },
  { id: 4, title: "Angular", description: "Build modern apps.", imageUrl: "/images/Angular_gradient.png" },
];


export const HomePage = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId: number) => {
    console.log("Click! I am trying to switch to a course with ID:", courseId);
    navigate(`/course/${courseId}`);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Available courses</h1>

      <div className={styles.grid}>
        {mockCourses.map((course) => (
          <div key={course.id} onClick={() => handleCourseClick(course.id)}>
            <CourseCard
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              onClick={() => handleCourseClick(course.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};