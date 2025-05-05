"use client";

import { useEffect } from "react";

export const runtime = "edge";

export default function ErrorPosts({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => console.log(error), [error]);
  return (
    <div>
      <h1>500 - Something went wrong</h1>
      <p>An unexpected error has occurred while fetching posts data. Please try again later.</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
