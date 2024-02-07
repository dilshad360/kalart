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
  { name: 'Home', link: 'hero', color: '#7C0A02' },
  { name: 'Score Board', link: 'scoreBoard', color: '#7C0A02' },
  { name: 'Result', link: '/results', color: '#7C0A02' },
  { name: 'Committee', link: 'committee', color: '#7C0A02' },
  { name: 'Captains', link: 'captains', color: '#7C0A02' }
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
