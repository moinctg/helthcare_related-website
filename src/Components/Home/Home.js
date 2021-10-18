import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem sed repellendus eaque molestias quam dolore accusamus, eos quis et officiis esse eligendi. Provident labore perferendis odio natus! Porro, tempora?</h3>
        </div>
    );
};

export default Home;