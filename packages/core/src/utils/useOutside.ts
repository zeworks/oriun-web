import React from "react";

export const useOutside = (ref: any) => {
  const [isOutside, setOutside] = React.useState<boolean>(false);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref?.current && !ref?.current.contains(event.target)) {
        setOutside(true);
      } else {
        setOutside(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isOutside };
};
