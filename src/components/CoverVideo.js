import React from 'react';
import styled from 'styled-components';
import GIF from '../assets/Home GIF.gif';

const VideoContainer = styled.div`
    width: 100%;

    video {
        width: 100%;
        height: auto;
    }

    @media (max-width: 64em) {
        min-width: 40vh;
    }
`;

const CoverVideo = () => {
    return (
        <VideoContainer>
            <img width={'100%'} src={GIF} />
        </VideoContainer>
    );
};

export default CoverVideo;
