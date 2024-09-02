export default function PostDetailsLoaderComponent() {
  return (
    <div className="post-details__loader">
      <div className="mb-[4rem] pb-[4rem]">
        <div
          role="status"
          className="flex items-center justify-center h-[30px] w-full bg-gray-100 animate-pulse mb-[1rem]"
        ></div>
        <div className="w-full">
          <div className="h-[1.6rem] bg-gray-100 max-w-[80%] mb-[1rem]"></div>
          <div className="h-[1.6rem] bg-gray-100 rounded-sm max-w-[60%] mb-[1rem]"></div>

          <div className="flex gap-8">
            <div className="h-[1.2rem] bg-gray-100 rounded-sm w-[100px]"></div>
            <div className="h-[1.2rem] bg-gray-100 rounded-sm w-[100px]"></div>
            <div className="h-[1.2rem] bg-gray-100 rounded-sm w-[100px]"></div>
          </div>
        </div>
      </div>
      {[1, 2].map((index) => (
        <div key={index} role="status" className="post-details__loader-items">
          <div className="w-full flex gap-2 flex-col">
            <div className="h-[30px] bg-gray-100 w-[80%]"></div>
            <div className="h-[30px] bg-gray-100 w-[90%]"></div>
            <div className="h-[30px] bg-gray-100 w-[85%]"></div>
            <div className="h-[30px] bg-gray-100 w-[75%]"></div>
            <div className="h-[30px] bg-gray-100 w-[65%]"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
