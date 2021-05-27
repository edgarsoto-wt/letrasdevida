import { GetStaticPaths, GetStaticProps } from "next";
import { connectToDatabase } from "../../util/mongodb";
import Head from "next/head";
import { useRouter } from "next/router";
import { IAutor, IPost, IText, ITextImage } from "../../interfaces/post";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import CreateContentItem from "../../components/CreateContentItem/CreateContentItem";
import AddContent from "../../components/AddContent/AddContent";

export default function CreatePostV2() {
  const [contentItems, setContentItems] = useState<Array<IText | ITextImage>>(
    []
  );

  const addContentItem = (newContentItem: IText | ITextImage) => {
    setContentItems([...contentItems, newContentItem]);
  };

  const insertPost = async (newPost) => {
    const response = await fetch("/api/post", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        post: newPost,
      }),
    });
    return await response.json();
  };

  return (
    <>
      <Head>
        <title>Letras de Vida - Create Post V2 </title>
      </Head>

      <AddContent addContentItem={addContentItem} />
    </>
  );
}
