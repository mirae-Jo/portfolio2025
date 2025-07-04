import { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Initial state: collapsed for slide-down effect
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasBeenCollapsedOnce, setHasBeenCollapsedOnce] = useState(false); // New state to track if it was collapsed by user
  const playerRef = useRef<any>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial slide down on component mount
    const initialExpandTimeout = setTimeout(() => {
      setIsExpanded(true);
    }, 100); // Small delay to ensure CSS transition works

    // YouTube IFrame Player API 로드 확인
    if ((window as any).YT && (window as any).YT.Player) {
      initializePlayer();
    } else {
      // API가 로드되지 않았다면 로드 완료 시 호출될 함수에 등록
      (window as any).onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      clearTimeout(initialExpandTimeout);
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const initializePlayer = () => {
    if (playerContainerRef.current) {
      playerRef.current = new (window as any).YT.Player(playerContainerRef.current, {
        videoId: '10zxBMvH23s',
        playerVars: {
          controls: 0, // 컨트롤 숨김
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          autoplay: 0, // 자동 재생 비활성화 (사용자 상호작용 필요)
          loop: 1,
          playlist: '10zxBMvH23s', // loop를 위해 playlist에 videoId 추가
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }
  };

  const onPlayerReady = (event: any) => {
    // 플레이어 준비 완료 시 음소거 상태로 로드
    event.target.mute();
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
        playerRef.current.unMute(); // 재생 시 음소거 해제
      }
    }
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setHasBeenCollapsedOnce(true); // Mark that it has been collapsed by user
  };

  return (
    <>
      {/* Music Player Bar */}
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-[999] transition-transform duration-500 transform ${
          isExpanded ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='bg-white/10 backdrop-blur-sm border-b border-white p-2 flex items-center justify-between rounded-b-lg shadow-lg'>
          {/* 유튜브 플레이어는 숨겨진 상태로 존재 */}
          <div ref={playerContainerRef} className='w-1 h-1 overflow-hidden absolute'></div>

          <button
            onClick={togglePlay}
            className='p-2 text-white bg-white/20 rounded-full hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-200'
          >
            {isPlaying ? (
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z' clipRule='evenodd' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd' />
              </svg>
            )}
          </button>

          <button
            onClick={handleCollapse} // Use the new handler
            className='ml-2 p-1 text-white bg-white/20 rounded-full hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-200'
          >
            {isExpanded ? (
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Music Icon (visible when collapsed and hasBeenCollapsedOnce) */}
      {!isExpanded && hasBeenCollapsedOnce && (
        <div
          className='fixed top-0 left-1/2 -translate-x-1/2 mt-2 p-2 bg-white/10 backdrop-blur-sm border border-white rounded-full shadow-lg cursor-pointer z-[999]'
          onMouseEnter={() => setIsExpanded(true)} // Mouse over to expand
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-8z' />
          </svg>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;