export default function PostLoaderComponent() {
  return (
    <div className="posts__loader">
      <div className="mb-[4rem] border-b border-light pb-[4rem]">
        <div
          role="status"
          className="flex items-center justify-center h-[200px] w-full bg-light rounded-lg animate-pulse mb-[2rem]"
        >
          <svg
            className="w-10 h-10 text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-[1.6rem] bg-light max-w-[480px] mb-4"></div>
          <div className="h-[1.6rem] bg-light rounded-sm max-w-[380px] mb-[2rem]"></div>
          <div className="h-[1.2rem] bg-light rounded-sm max-w-[200px]"></div>
        </div>
      </div>
      {[1, 2, 3].map((index) => (
        <div key={index} role="status" className="posts__loader-item">
          <div className="w-full">
            <div className="h-[1.6rem] bg-light max-w-[480px] mb-4"></div>
            <div className="h-[1.6rem] bg-light rounded-sm max-w-[380px] mb-[2rem]"></div>
            <div className="h-[1.2rem] bg-light rounded-sm max-w-[200px]"></div>
          </div>
          <div className="flex items-center justify-center w-full h-48 bg-light rounded sm:w-96">
            <svg
              className="w-10 h-10 text-light "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
