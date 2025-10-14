import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/Button";
import { style } from './Quiz.module.css';

const QuizData = [
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
]