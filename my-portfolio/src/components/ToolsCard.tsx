/**
 * @copyright 2025 ekeneakabogu
 */

/**
 * Node Modules
 */
import { motion } from 'motion/react';

/**
 * Custom Modules
 */
import { fadeUp } from '@/lib/animation';

/**
 * Types
 */
import type { ToolsType } from '@/types';

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="border border-neutral-700 rounded-md
      flex flex-col items-center justify-center
      py-4 px-3"
    >
      {/* Icon wrapper */}
      <div className="w-12 h-12 flex items-center justify-center">
        <img
          src={tool.imgSrc}
          alt={tool.label}
          className="w-10 h-10 object-contain"
        />
      </div>

      <p className="font-bold mt-2 text-sm text-neutral-200">
        {tool.label}
      </p>
    </motion.div>
  );
};
