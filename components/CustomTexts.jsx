'use client';

/*eslint-disable */

import { motion } from 'framer-motion';
import { textContainer } from '../utils/motion';

export const TypingText = ({title, textStyles}) => (
  <motion.p
  variants={textContainer}>

  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <h2>Title Text</h2>
);
