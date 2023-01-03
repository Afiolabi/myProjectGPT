import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";


const useStyles = makeStyles({
  root: {
    position: "fixed",
    height: 5,
    width: "100%",
    backgroundColor: 'black'
  },
  colorPrimary: {
    backgroundColor: 'blueGrey',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'white'
  }
 
});

export default function StatusBar() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let computeProgress = () => {
      // The scrollTop gives length of window that has been scrolled
      const scrolled = document.documentElement.scrollTop;
      // scrollHeight gives total length of the window and
      // The clientHeight gives the length of viewport
      const scrollLength =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = `${(100 * scrolled) / scrollLength}`;

      setProgress(progress);
    };

    // Adding event listener on mounting
    window.addEventListener("scroll", computeProgress);

    // Removing event listener upon unmounting
    return () => window.removeEventListener("scroll", computeProgress);
  });

  return (
    <LinearProgress classes={{ bar: classes.bar, colorPrimary: classes.colorPrimary, root: classes.root}}  variant="determinate" value={progress} />
  );
}
