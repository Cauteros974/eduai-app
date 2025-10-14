import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/Button";
import  styles from './Quiz.module.css';    

const quizData = [
    {
        question: "What is React?",
        options: ["Framework", "Library", "Programming Language"],
        correctAnswer: 1,
    },
    {
        questions: "Who created React?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
        correctAnswer: 2,
    },
    {
        questions: "What does the Virtual DOM do?",
        options: ["Store styles", "Copies the entire DOM every time", "Creates a server environment", "Optimizes interface updates"],
        correctAnswer: 4,
    },
    {
        questions: "What does a React component return?",
        options: ["Line", "JSX", "Object", "HTML"],
        correctAnswer: 2,
    },
    {
        questions: "What is useState used for?",
        options: ["For storing state", "For subscribing to events", "For sending requests", "For navigation"],
        correctAnswer: 1,
    },
    {
        questions: "What does useEffect do?",
        options: ["Changes state", "Optimizes rendering", "Performs side effects", "Stores data"],
        correctAnswer: 3,
    },
    {
        questions: "What is JSX?",
        options: ["A programming language", "A JavaScript extension that allows you to write HTML-like code", "A CSS preprocessor", "A JSON format"],
        correctAnswer: 2,
    },
];

export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(0);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data: any) => {
        const userAnswerIndex = parseInt(data.answer, 10);
        if (userAnswerIndex === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        reset();

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else{
            setIsFinished(true);
        }
    };

    if (isFinished){
        return (
            <div className={styles.quiz}>
                <h2>Quiz Ended</h2>
                <p>Your score: {score} of {quizData.length}</p>
            </div>
        );
    }

    const question = quizData[currentQuestion];

    return (
        <div className={styles.quiz}>
          <h2>Квиз: {question.question}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {question.options.map((option, index) => (
              <div key={index} className={styles.option}>
                <input type="radio" id={`option-${index}`} value={index} {...register('answer', { required: true })} />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </form>
        </div>
    );
}