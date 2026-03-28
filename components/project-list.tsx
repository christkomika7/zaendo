"use client";
import { projects } from "@/data/data";
import { useWidth } from "@/hooks/useWidth";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectInfo from "./project-info";

export default function ProjectList() {
  const currentWidth = useWidth();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const size = currentWidth > 550 ? 450 : currentWidth - 80;
    setWidth(size * (projects.length - 1) + 100);
  }, [currentWidth, width]);

  return (
    <motion.div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-3 xs:gap-5 xs:first:ml-[20px] first:ml-[12px] py-[20px] w-full"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -width,
        }}
      >
        {projects.map((project) => (
          <ProjectInfo
            key={project.id}
            {...project}
            width={
              currentWidth > 550
                ? 450
                : currentWidth > 359
                  ? currentWidth - 70
                  : currentWidth - 60
            }
            height={currentWidth > 550 ? 290 : 245}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
