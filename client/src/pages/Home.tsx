// Import Definations
import React from "react";
import { IHomePropsTypes } from "../types/pages/Home.types";
import { useSnapshot } from "valtio";
import state from "../store";
import { AnimatePresence, motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home: React.FC<IHomePropsTypes> = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
