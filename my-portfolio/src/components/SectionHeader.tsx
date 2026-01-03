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
 * Assets
 */
import { FlameIcon } from "lucide-react";

export const SectionHeader = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <>
            <motion.p
                variants={fadeUp}
                className="flex items-center justify-left gap-1.5 
               px-4 py-2 w-40 rounded-2xl bg-white/10 border border-white/25 
               backdrop-blur-md shadow-lg text-white"
            >
                <FlameIcon size={17} /> {subtitle}
            </motion.p>

            <motion.h2 
                variants={fadeUp} 
                className="text-4xl font-bold capitalize mt-2 md:max-w-3xl"
            >
                {title}
            </motion.h2>
        </>
    );
}