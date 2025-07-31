import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'; // Make sure this path is correct

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Youbloom Posts</h2>
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              onClick={() => navigate(`/detail/${post.id}`)}
              className="p-4 bg-white/60 rounded-lg cursor-pointer hover:bg-white/80 transition"
            >
              <h3 className="text-indigo-800 font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-700">{post.body.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Main;
