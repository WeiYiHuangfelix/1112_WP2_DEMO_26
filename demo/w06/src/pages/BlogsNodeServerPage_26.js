import axios from 'axios';
import {useState, useEffect} from 'react';

//import blogsData from '../data/blogData_26'

// let api_url = `http://localhost:5001/api/card2_26`;

let api_url = `https://one112-server-card-demo-26-npgb.onrender.com/api/card2_26`

const BlogsNodeServerPage_26 = () => {
    const [name, setName] = useState('Huang Wei Yi');
    const [id, setId] = useState('210410626');

    const [data, setData] = useState([]);
    //console.log('blog data', data);

    const fetchBlogDataFromNodeServer = async() => {
        try {
          const results = await axios.get(api_url);
          console.log('results', results);
          setData(results.data);
        }catch(error) {
          console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogDataFromNodeServer();
    }, []);

    return (
        <>
      <section className="blogs">
      <div className="section-title">
        <h2>Fetch Blogs From Node Server</h2>
        <h3> {name} {id} </h3>
      </div>
      <div className="blogs-center2">
        {data.map((item) => {
          const {id, img, remote_img, category, title, desc} = item;
          return (
                 <article key = {id} className="blog">
                 <img
                   src= {img}
                   alt={title}
                   className="img blog-img"
                 />
                 <div className="blog-content">
                   <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
                   <h3>{title}</h3>
                   <p>{desc}</p>
                   <a href="#">read more</a>
                 </div>
               </article>
          )
        })}
      </div>
    </section>
        </>
    )
}

export default BlogsNodeServerPage_26;