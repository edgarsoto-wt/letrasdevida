import { GetStaticPaths, GetStaticProps } from "next";
import { connectToDatabase } from "../../util/mongodb";
import Head from "next/head";
import { useRouter } from "next/router";
import { IAutor, IPost } from "../../interfaces/post";
import Button from '@material-ui/core/Button';


export default function CreatePost() {


    const authors: Array<IAutor> = [{
      email: 'edgar@letrasdevida.com',
      name:'Edgar Soto'
    },
    {
      email: 'keila@letrasdevida.com',
      name:'Keila Jiménez'
    }]

    const insertPost = async (newPost) => {
      const response = await fetch('/api/post', {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          post: newPost
        }),
      });
      return await response.json();
    };

    const  handleClick = async (event) =>{
       
       event.preventDefault()


      const newPost:IPost= {
        title:event.target.title.value,
        slug:event.target.slug.value,
        author:authors.filter(author => {
          return author.name === event.target.author.value
        })[0],
        headline: event.target.headline.value,
        publish_date: new Date(),
        content: [
            {
                type:'text',
                text:'bla bla bla'
            }
        ]
    }

       console.log(await insertPost(newPost));

    }




  return (
    <>
      <Head>
        <title>Letras de Vida - Create Post </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={handleClick}>
        <label htmlFor="title">Title: </label>
        <input id="title" name="title" type="text" autoComplete="title" required /> <br></br>
        <label htmlFor="slug">Slug: </label>
        <input id="slug" name="slug" type="text" autoComplete="slug" required /><br></br>
        <label htmlFor="headline">Headline: </label>
        <input id="headline" name="headline" type="text" autoComplete="headline" required /><br></br>
        <label htmlFor="author">Author: </label>
        <select id="author" name="autor" required>
          <option value="-1">Seleccione un Autor</option>
          {authors.map((author, index) => {
            return <option key={`author${index}-${author.email}`} value={author.name}>{author.name}</option>
          })}
          </select><br></br>

        <Button variant="contained" type="submit">Create Post</Button>
      </form>
      
    </>
   
  );
}
