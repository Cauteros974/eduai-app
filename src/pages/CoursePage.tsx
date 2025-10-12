import { ChatWindow } from "../features/Chat/ChatWindow";

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