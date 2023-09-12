// Import Definations
import { proxy } from "valtio";
import { IValtioStateTypes } from "../types/store/index.types";

const state = proxy<IValtioStateTypes>({
  isHomePage: true,
  color: "#EFBD48",
  isLogoEnabled: true,
  isFullTextureEnabled: false,
  logoDecal: "./threejs.png",
  fullTextureDecal: "./threejs.png",
});

export default state;
