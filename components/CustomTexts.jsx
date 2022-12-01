'use client';
/*eslint-disable */

import {TypingText} from '../components'
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

export const TypingText = ({title, textStyles}) => (
  <motion.p
  variants={textContainer}>

  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <h2>Title Text</h2>
);
