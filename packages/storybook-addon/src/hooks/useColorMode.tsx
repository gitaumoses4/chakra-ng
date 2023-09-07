import { useEffect, useState } from "react";
import { addons } from "@storybook/preview-api";
import { EVENTS } from "../constants";

export const useColorMode = (initialColorMode) => {
  const [colorMode, setColorMode] = useState(initialColorMode);

  useEffect(() => {
    const channel = addons.getChannel();
    const callback = (value: string) => setColorMode(value);
    channel.on(EVENTS.TOGGLE_DIRECTION, callback);
    return () => {
      channel.removeListener(EVENTS.TOGGLE_DIRECTION, callback);
    };
  }, [setColorMode]);

  return colorMode;
};
