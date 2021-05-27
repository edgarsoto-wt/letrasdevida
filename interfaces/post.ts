export interface IPost {
  id?: string;
  slug: string;
  title: string;
  publish_date: Date;
  author: IAutor;
  headline: string;
  content: Array<IText | ITextImage>;
}

export interface IAutor {
  name: string;
  email: string;
}

export interface IText {
  type: ContentType;
  text: string;
}

export interface ITextImage extends IText {
  image: string;
}

export enum ContentType {
  text,
  textImage,
}
