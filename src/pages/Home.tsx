import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <>
            <Button type="dashed" shape="round" icon={<DownloadOutlined />}>
                Download fast file
            </Button>
            <nav>
                <Link to="/players">Players</Link>
            </nav>
        </>
    );
}

export default Home;