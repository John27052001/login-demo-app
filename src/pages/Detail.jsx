import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout'; // ✅ import this

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(() => setPost(null));
  }, [id]);

  if (!post) {
    return <Layout><p className="text-white">Post not found</p></Layout>;
  }

  return (
    <Layout>
      <div className="bg-white/30 backdrop-blur-lg rounded-xl shadow-md p-6">
        <button
          onClick={() => navigate('/main')}
          className="text-blue-100 hover:underline text-sm mb-4 inline-block"
        >
          ← Back to Posts
        </button>
        <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
        <p className="text-gray-100">{post.body}</p>
      </div>
    </Layout>
  );
};

export default Detail;
