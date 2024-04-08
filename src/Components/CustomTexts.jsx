import { motion } from 'framer-motion';
import { TextContainer, TextVariant2 } from '../Utilities/Transitions';

export const TypingText = ({ title }) => (
    <motion.p
        className="text-xl"
        variants={TextContainer}>
        {Array.from(title).map((letter, index) => (
            <motion.span
                key={index}
                variants={TextVariant2}>
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}
    </motion.p>
);

export const TitleText = ({ title }) => (
    <motion.h2
        variants={TextVariant2}
        initial="hidden"
        whileInView="show"
        className="text-3xl"
    >
        {title}
    </motion.h2>
);