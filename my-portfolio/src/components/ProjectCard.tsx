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
}: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative w-full h-70 rounded-md overflow-hidden"
    >
      {/* Clickable image */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <figure className="h-full w-full">
          <img
            src={imgSrc}
            alt={title}
            className="
              h-full 
              w-full 
              object-cover 
              transition-transform 
              duration-500 
              hover:scale-105
            "
          />
        </figure>
      </a>

      {/* Tags overlay */}
      <div className="absolute bottom-2 left-2 flex gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="
              bg-background/90 
              hover:bg-primary 
              hover:text-black 
              py-1 
              px-2 
              rounded-sm 
              text-xs 
              backdrop-blur
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
