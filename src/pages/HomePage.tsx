import { CourseCard } from "../features/Course/CourseCard";

const mockCourses = [
    { id: 1, title: 'Introduction to React', description: 'Basics of modern web development.', imageUrl: 'https://placehold.co/600x400/6366f1/FFF?text=React'},
    { id: 2, title: 'TypeScript for professionals', description: 'Learn static typing.', imageUrl: 'https://placehold.co/600x400/3498db/FFF?text=TS'},
    { id: 3, title: 'Node.js and Express', description: 'Creation of powerful backend services.', imageUrl: 'https://placehold.co/600x400/2ecc71/FFF?text=Node'},
];

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
};

export const HomePage = () => {
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
            />
          ))}
        </div>
      </>
    );
};