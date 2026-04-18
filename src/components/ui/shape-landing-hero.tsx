"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { useState, useEffect } from "react";
import { ElegantShape } from "./ElegantShape";

function HeroGeometric({
    badge = "Design Collective",
    children
}: {
    badge?: string;
    children?: React.ReactNode;
}) {
    const words = ["interfaces", "experiences", "products", "websites"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <div id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent pt-20">
            {/* The global BackgroundShapes will handle the floating elements */}
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Centered Badge */}
                <div className="w-full flex justify-center mt-8 mb-8 lg:mb-12">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-sm text-white/70 tracking-wide font-medium">
                            {badge}
                        </span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
                    
                    {/* Left Column: Text */}
                    <div className="flex flex-col -mt-4 lg:-mt-20 items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                                <span className="text-white">
                                    Crafting
                                </span>
                                <br />
                                <div className="relative h-[1.2em] w-full flex justify-center lg:justify-start overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={words[index]}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute bg-gradient-to-r from-blue-300 via-purple-300 to-violet-300 bg-clip-text text-transparent italic font-light pr-4 drop-shadow-[0_0_15px_rgba(216,180,254,0.5)]"
                                        >
                                            {words[index]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                                <span className="text-white whitespace-nowrap">
                                    that feel right.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-8 leading-relaxed font-light tracking-wide max-w-xl">
                                Crafting exceptional digital experiences through
                                innovative design and cutting-edge technology.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: 3D Element */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center -mt-8 lg:-mt-32 lg:justify-end items-center relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
                        <div className="relative z-10 w-full flex justify-center">
                            {children}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
