import { useState } from "react";
import BlogLIST from "../Pages/BlogList";
import oha from "../images/art3.jpeg"
import Atama from "../images/art3.jpeg"
import Edikaikong from "../images/art3.jpeg"
import Efo from "../images/art3.jpeg"
import Cashew from "../images/art3.jpeg"

const Blog = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "Atama",
            body: "Abok Atama Soup Abak Atama Soup is a delicious soup popular among the Ib",
            stateOfOrigin:"Akwa Ibom",
            img: Atama,
            id: 1
        },
        {
            title: "Oha",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis",
            stateOfOrigin:"Abia",
            img: oha,
            id: 2
        },
        {
            title:"Edikaikong",
            body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quisquam facilis repudiandae!",
            stateOfOrigin: "Akwa Ibom",
            img: Edikaikong,
            id: 3
        }, 
        {
            title: "Efo",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt id a sequi!",
            stateOfOrigin: "Ijebu",
            img: Efo,
            id: 4
        },
        {
            title: "Cashew",
            body: "You can find Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sed harum!",
            stateOfOrigin: "Enugu",
            img: Cashew,
            id: 7
        }
    ])

    const handleDelete = (id)=>{
        let deleteBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(deleteBlogs)
    }
    return (
        <div>
          <BlogLIST blogs = {blogs} handleDelete={handleDelete} />
        </div>
    );
}

export default Blog;