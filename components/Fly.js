"use client";
import React, { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, animate } from "framer-motion";

const Fly = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useMotionValue(1);
    const tracking = useRef(true);
    const mousePos = useRef({ x: 0, y: 0 });

    const springConfig = { damping: 20, stiffness: 80 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);
    const scaleSpring = useSpring(scale, springConfig);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mousePos.current = { x: event.clientX, y: event.clientY };
            if (!tracking.current) return;

            const offsetX = Math.sin(event.clientX / 100) * 50;
            const offsetY = Math.cos(event.clientY / 100) * 50;
            x.set(event.clientX + offsetX);
            y.set(event.clientY + offsetY);
        };

        const handleClick = () => {
            const bounceDistance = 200;
            const originalX = x.get();
            const originalY = y.get();

            const dx = originalX - mousePos.current.x;
            const dy = originalY - mousePos.current.y;
            const dirX = dx >= 0 ? 1 : -1;
            const dirY = dy >= 0 ? 1 : -1;

            tracking.current = false;

            Promise.all([
                animate(x, originalX + dirX * bounceDistance, { duration: 0.2 })
                    .finished,
                animate(y, originalY + dirY * bounceDistance, { duration: 0.2 })
                    .finished,
                animate(scale, 1.4, { duration: 0.2 }).finished,
            ]).then(() => {
                Promise.all([
                    animate(x, originalX, { duration: 0.2 }).finished,
                    animate(y, originalY, { duration: 0.2 }).finished,
                    animate(scale, 1, { duration: 0.2 }).finished,
                ]).then(() => {
                    tracking.current = true;
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick, { capture: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick, { capture: true });
        };
    }, [x, y, scale]);

    return (
        <div className="parent w-full h-screen fixed z-0">
            {/* Outer wrapper follows mouse & handles click bounce */}
            <motion.div
                style={{
                    position: "absolute",
                    width: 50,
                    height: 50,
                    x: xSpring,
                    y: ySpring,
                    scale: scaleSpring,
                    pointerEvents: "none",
                }}
            >
                {/* Inner element: perpetual bob */}
                <motion.img
                    src="/logo.png"
                    alt=""
                    className="w-full h-full"
                    style={{
                        display: "block",
                        borderRadius: "50%",
                        pointerEvents: "none",
                    }}
                    animate={{
                        y: [-6, 6, -6], // up → down → up
                        // Optional micro-breathing:
                        // scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 2.0,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Fly;
