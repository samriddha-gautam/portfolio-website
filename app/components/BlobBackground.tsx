import { ReactNode } from "react";

interface BlobBackgroundProps {
  children: ReactNode;
}

export default function BlobBackground({ children }: BlobBackgroundProps) {
  return (
    <div className="relative w-full min-h-screen">
      {/* Blobs Container */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top-Right Blob */}
        <div className="relative top-[-90] right-[-90] opacity-55">
          <svg
            className="absolute top-[-70px] right-[-50px] w-96 h-96 "
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1c3f29"
              d="M40.3,-69.6C52.7,-61,62.7,-52.7,71.3,-42.1C79.8,-31.5,87,-18.6,86.8,-5.6C86.5,7.4,78.9,20.6,71.8,33.7C64.7,46.8,58.2,59.9,47.4,68.3C36.5,76.7,21.2,80.4,6.4,75.8C-8.5,71.3,-16.9,58.5,-28.8,50.7C-40.7,42.9,-56.2,40,-67,30.7C-77.8,21.4,-83.8,5.7,-84.3,-11.6C-84.7,-28.9,-79.7,-47.8,-66.8,-57.7C-53.9,-67.5,-32.9,-68.2,-15.5,-70C2,-71.9,20.3,-75.8,40.3,-69.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
              className="absolute top-[-70px] right-[-30px] w-80 h-80 opacity-35"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                  <radialGradient id="blobRadial" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1c3f29" />
                    <stop offset="100%" stopColor="#0f2418" />
                  </radialGradient>
              </defs>
              <path
                fill="url(#blobRadial)"
                d="M50,-50C65.2,-35.2,80.4,-20.4,85.5,-1.4C90.6,17.6,85.6,35.2,75.2,50C64.8,64.8,49.2,76.8,32.2,82.6C15.2,88.4,-3.2,88,-20.8,82.4C-38.4,76.8,-55.2,66,-67.6,50.2C-80,34.4,-88,13.6,-85.4,-6C-82.8,-25.6,-69.6,-44,-54.8,-58.8C-40,-73.6,-23.2,-84.8,-5.6,-82.8C12,-80.8,24,-65.6,50,-50Z"
                transform="translate(100 100)"
              />
          </svg>
        </div>
        <svg
          className="absolute top-[350px] left-[-200px] w-96 h-96 opacity-15"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#16a34a"
            d="M40.3,-69.6C52.7,-61,62.7,-52.7,71.3,-42.1C79.8,-31.5,87,-18.6,86.8,-5.6C86.5,7.4,78.9,20.6,71.8,33.7C64.7,46.8,58.2,59.9,47.4,68.3C36.5,76.7,21.2,80.4,6.4,75.8C-8.5,71.3,-16.9,58.5,-28.8,50.7C-40.7,42.9,-56.2,40,-67,30.7C-77.8,21.4,-83.8,5.7,-84.3,-11.6C-84.7,-28.9,-79.7,-47.8,-66.8,-57.7C-53.9,-67.5,-32.9,-68.2,-15.5,-70C2,-71.9,20.3,-75.8,40.3,-69.6Z"
            transform="translate(70 100)"
          />
        </svg>
        <svg
          className="absolute left-44 w-96 h-96 opacity-35"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c3f29" />  {/* Top-left */}
              <stop offset="100%" stopColor="#0f2418" /> {/* Bottom-right */}
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="55" fill="url(#blobGradient)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
