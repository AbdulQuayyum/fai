import { motion } from "framer-motion";

export const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

export const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

export const Transition = ({
    initial,
    whileInView,
    transition,
    ...rest
}) => {
    const init = initial ? initial : { opacity: 0 };
    const inView = whileInView ? whileInView : { opacity: 1 };
    const trans = transition ? transition : { duration: 0.8, delay: 0.4 };

    return (
        <motion.div
            initial={init}
            whileInView={inView}
            transition={trans}
            {...rest}
        ></motion.div>
    );
};

export const SlideIn = ({
    className,
    initial,
    whileInView,
    transition,
    viewport,
    ...rest
}) => {
    const init = initial ? initial : { opacity: 0, y: "100%" };
    const inView = whileInView ? whileInView : { opacity: 1, y: 0 };
    const trans = transition ? transition : { duration: 0.5, delay: 0.3 };

    return (
        <motion.span
            initial={init}
            whileInView={inView}
            transition={trans}
            viewport={viewport ? viewport : { once: true }}
            className="inline-block overflow-hidden"
            {...rest}
        />
    );
};

export const FadeInAnimation = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const SlideInAnimation = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const StaggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const TextContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const TextVariant = (delay) => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay,
        },
    },
});

export const TextVariant2 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

export const ZoomInAnimation = (delay, duration) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});