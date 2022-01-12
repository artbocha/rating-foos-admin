import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

const Home = () => {
    return (
        <>
            <Button type="primary">Home</Button>
            <nav>
                <Link to="/players">Players</Link>
            </nav>
        </>
    );
}

export default Home;