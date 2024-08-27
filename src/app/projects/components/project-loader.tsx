export default function ProjectLoaderComponent() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} role="status" className="flex-1">
          <div className="w-full">
            <div className="h-[1.6rem] bg-gray-300 max-w-[280px] mb-4"></div>
            <div className="h-[1.6rem] bg-gray-300 rounded-sm max-w-[260px] mb-[2rem]"></div>
            <div className="h-[1.2rem] bg-gray-300 rounded-sm max-w-[230px]"></div>
          </div>
        </div>
      ))}
    </>
  );
}
