/**
 * @copyright 2025 ekeneakabogu
 */

/**
 * Node Modules 
 */
import { motion } from "motion/react";

/**
 * Custom Modules
 */
import { fadeUp } from "@/lib/animation";

/**
 * Types
 */
import type { ProjectType } from "@/types";

export const ProjectCard = ({ 
    imgSrc,
    projectLink,
    tags,
    title,
 }: ProjectType ) => {
    return (
        <motion.div
            variants={fadeUp}
            className="relative"
        >
            <figure className="overflow-hidden rounded-md">
                <img 
                    src={imgSrc} 
                    alt={title }
                    className="rounded-md transition duration-500 hover:scaller-115 w-full"
                />
            </figure>

            <div className="absolute bottom-0 p-2 flex gap-2">
                {tags.map((tag, i) => (
                    <span 
                        key={i}
                        className="bg-background hover:bg-primary hover:text-black py-1
                        px-2 rounded-sm text-sm cursor-pointer"
                    >
                        {tag}
                    </span>
                ))} 
            </div>
        </motion.div>
    )
};
