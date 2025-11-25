// components/SkillBar.tsx

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number; // percentage 0-100
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-800">{name}</span>
        <span className="text-lg font-medium text-gray-500">{level}%</span>
      </div>

      <div className="w-70 lg:w-100 h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{
            duration: 1.3,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
