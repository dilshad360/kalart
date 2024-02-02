import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const items = [
  { name: 'Home', link: 'hero', color: '#FF008C' },
  { name: 'Score Board', link: 'scoreBoard', color: '#D309E1' },
  { name: 'Result', link: '/results', color: '#9C1AFF' },
  { name: 'Committee', link: 'committee', color: '#7700FF' },
  { name: 'Captains', link: 'captains', color: '#4400FF' }
];
const closeSidebar = () => {
  console.log('clickedwww');
}

export const Navigation = ({closeSidebar}) => (
  <motion.ul variants={variants}>
    {items.map((item, i) => (
      <MenuItem key={i} item={item} closeSidebarOK={closeSidebar} />
    ))}
  </motion.ul>
);
