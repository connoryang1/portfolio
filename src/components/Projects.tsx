import styles from "@/components/Projects.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export default function Projects({
  children,
  targetRef,
  activeIndex,
  setActiveIndex,
}: any) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    console.log(children);
  } , [children]);

  const scale = useTransform(scrollYProgress, [0.5, 1], ["40%", "100%"], {
    // ease: easeIn,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    ["-115%", "20%", "20%", "0%"],
    {
      // ease: easeIn,
    }
  );
  const y = useTransform(scrollYProgress, [0.5, 1], ["20%", "0%"], {
    // ease: easeIn,
  });

  return (
    <div>
      <motion.div className={styles.projectContainer} style={{ scale, x, y }}>
        {React.Children.map(children, (child: any, index: number) => (
          <motion.div
            key={index}
            style={
              activeIndex === index
                ? {
                    transition: "all 0.5s",
                    filter: "brightness(1)",
                    cursor: "pointer",
                  }
                : {
                    transition: "all 0.5s",
                    filter: "brightness(0.5)",
                    cursor: "pointer",
                  }
            }
            onMouseOver={() => setActiveIndex(index)}
          >
            {child}
          </motion.div>
        ))}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            outline: "4px solid #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "8rem",
            paddingRight: "8rem",
          }}
        >
          <a
            style={{
              color: "#999999",
              cursor: "pointer",
              transition: "all 0.5s",
              fontSize: "4rem",
              whiteSpace: "nowrap",
            }}
            href="/projects"
          >
            View all projects -&gt;
          </a>
        </div>
      </motion.div>
    </div>
  );
}
