'use client'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoComponent = () => {
  return (
    <div className="flex items-center videoPlayer">
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="512px"
        
        controls={true}
        style={{ borderRadius: '30px', overflow: 'hidden' }}
      />
    </div>
  );
};

export default VideoComponent;
