import { useStyles } from "./ContentItemText.styles";

interface Props {
  text: string;
}
export default function ContentItemText(data: Props): JSX.Element {
  const classes = useStyles();
  return <div className={classes.root}>{data.text}</div>;
}
