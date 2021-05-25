import { useStyles } from "./ContentItemTextImage.styles";

interface Props {
  text: string;
  image: string;
}
export default function ContentItemTextImage(data: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.image && (
        <>
          <img
            src={data.image}
            className={classes.img}
            alt="content item image"
          />
          <p>{data.text}</p>
        </>
      )}
    </div>
  );
}
