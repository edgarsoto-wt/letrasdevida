import { useStyles } from "./Header.styles";

export default function Header() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
