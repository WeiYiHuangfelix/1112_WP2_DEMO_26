//import axios from 'axios';
import {useState, useEffect} from 'react';

//import blogsData from '../data/blogData_26'

// let api_url = `http://localhost:5001/api/card2_26`;

// let api_url = `https://one112-server-card-demo-26-npgb.onrender.com/api/card2_26`

import { supabaes } from '../db/clientSupabase';

const BlogsSupabaesPage_26 = () => {
    const [name, setName] = useState('Huang Wei Yi');
    const [id, setId] = useState('210410626');

    const [data, setData] = useState([]);
    //console.log('blog data', data);

    const fetchBlogDataFromSupabaes = async() => {
        try {
          
          let { data, error } = await supabaes.from('card_26').select('*')

          console.log('data', data);
          setData(data);
        }catch(error) {
          console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogDataFromSupabaes();
    }, []);

    return (
        <>
      <section className="blogs">
      <div className="section-title">
        <h2>Fetch Blogs From Supabaes</h2>
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

export default BlogsSupabaesPage_26;