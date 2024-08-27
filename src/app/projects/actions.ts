"use server";

import { fakeProjects } from "@/lib/fake-data";
import { createServerAction } from "zsa";

export const fetchProjects = createServerAction().handler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return fakeProjects;
});
