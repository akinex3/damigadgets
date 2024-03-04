import GadgetBlogList from '../Pages/GadgetBlogList';
import useCustomHook from '../useCustomHook';

const GadgetBlog = () => {
    let URL = "http://localhost:8000/blogs"
    const { data: blogs, isLoading, isError } = useCustomHook(`${URL}`)

    return (
        <div>
            {isLoading && <div className="spinner-grow text-secondary" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>}
            {isError && <div>Error Fetching data </div>}
            {blogs && <GadgetBlogList blogs={blogs} />}
        </div>
    );
}

export default GadgetBlog;

