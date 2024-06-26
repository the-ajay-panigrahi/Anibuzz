import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const gif = new GiphyFetch(import.meta.env.VITE_ANIBUZZ_API_KEY);
  return <GifContext.Provider value={{ gif }}>{children}</GifContext.Provider>;
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;
