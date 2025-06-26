import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceVideoSectionProps {
  videoType?: 'youtube' | 'local' | 'placeholder';
  youtubeVideoId?: string;
  localVideoPath?: string;
}

export const ServiceVideoSection: React.FC<ServiceVideoSectionProps> = ({
  videoType = 'youtube',
  youtubeVideoId = 'O0zX_2TYMrc',
  localVideoPath = '/videos/sample.mp4',
}) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Send play/pause commands via postMessage
  useEffect(() => {
    if (videoType === 'youtube' && isVideoReady && iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: inView ? 'playVideo' : 'pauseVideo',
          args: [],
        }),
        '*'
      );
      setIsVideoPlaying(inView);
    }
  }, [inView, isVideoReady, videoType]);

  // Local video control
  useEffect(() => {
    if (videoType === 'local' && videoRef.current) {
      if (inView) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  }, [inView, videoType]);

  const renderVideoContent = () => {
    switch (videoType) {
      case 'youtube':
        return (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&rel=0&modestbranding=1&controls=1&playsinline=1`}
            title="Pinterest Marketing Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => {
              setIsVideoReady(true);
              iframeRef.current?.contentWindow?.postMessage(
                JSON.stringify({ event: 'listening' }),
                '*'
              );
            }}
          />
        );

      case 'local':
        return (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            muted
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src={localVideoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );

      default:
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 mx-auto">
                <Play className="w-12 h-12 text-red-600 ml-1" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pinterest Marketing in Action
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Watch how our Pinterest marketing experts create strategies that drive real results.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                Video coming soon – contact us for a live demo!
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="pt-10 pb-0 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-800 font-medium mb-6">
            <Play className="w-5 h-5 mr-2" />
            See Our Services in Action
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              Pinterest Presence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our Pinterest marketing experts create strategies that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center">
          <div
            ref={ref}
            className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {renderVideoContent()}
          </div>
        </div>
      </div>
    </section>
  );
};
