import { useState } from "react";
import { ChatWindow } from "../features/Chat/ChatWindow";
import { Quiz } from "../features/Course/Quiz";
import { Button } from "../components/ui/Button";
import styles from './CoursePage.module.css';

const lessonContext = `React is a JavaScript library for creating user interfaces. 
It uses a component approach that allows you to break complex UIs into isolated, reusable parts. 
Key React concepts include JSX, components, state, and props. State is data that a component can 
store and change, which leads to repeated rendering.`;

const layoutStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '30px',
    height: 'calc(100vh - var(--header-height) - 80px)',
};

export const CoursePage = () => {
    const [ showQuiz, setShowQuiz ] = useState(false);

    return(
        <div>
            <div className={styles.layout}>
                <div className="lesson-content">
                <h1>Introduction to React: Basic concepts</h1>
                    <h2>What React is it?</h2>
                    <p>{lessonContext}</p>
                    <p>JSX is a syntax extension for JavaScript that allows you to write 
                        HTML-like code directly in JavaScript. This makes the code more readable and 
                        convenient for development.
                    </p>
                </div>
                {!showQuiz && (
                    <div style={{marginTop: '30px', width: '200px'}}>
                        <Button onClick={() => setShowQuiz(true)}>Take the test</Button>
                    </div>
                )}
                
                    {showQuiz && <Quiz />}
                </div>
            
                <div className="chat-area">
                    <ChatWindow lessonContext={lessonContext} />
                </div>
            </div>
    );
};