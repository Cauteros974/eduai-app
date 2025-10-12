import { useNavigate } from "react-router-dom";
import { CourseCard } from "../features/Course/CourseCard";
import styles from './HomePage.module.css';

const mockCourses = [
    { id: 1, title: 'Introduction to React', description: 'Basics of modern web development.', imageUrl: "/images/react.png"},
    { id: 2, title: 'TypeScript for professionals', description: 'Learn static typing.', imageUrl: '/images/Typescript.png'},
    { id: 3, title: 'Node.js and Express', description: 'Creation of powerful backend services.', imageUrl: '/images/Node.js.png'},
    { id: 4, title: 'Angular', description: 'Build modern apps', imageUrl: '/images/Angular_gradient.png'},
];

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
};

export const HomePage = () => {
    const navigate = useNavigate();

    const handleCourseClick = ( courseId: number) => {
        console.log('Click! I am trying to switch to a course with ID:', courseId);
        navigate(`/course/${courseId}`)
    };

    return (
      <>
        <h1 style={{ marginBottom: '32px' }}>Available courses</h1>
        <div style={gridStyle}>
          {mockCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              onClick={() => handleCourseClick(course.id)}
            />
          ))}
        </div>
      </>
    );
};