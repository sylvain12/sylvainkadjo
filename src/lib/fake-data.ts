import { faker } from "@faker-js/faker";
import { IComment, IBlogPost } from "@/app/posts/models/types";
import { ITag, IUser } from "./shared/interfaces";
import { IProject } from "@/app/projects/models/types";

// Function to generate a fake comment
const generateFakeComment = (
  postId: number,
  parentCommentId: number | null = null
): IComment => ({
  id: faker.string.uuid(),
  postId,
  author: faker.internet.userName(),
  content: faker.lorem.paragraph(),
  publishedDate: faker.date.recent().toISOString(),
  parentCommentId,
  status: faker.helpers.arrayElement(["approved", "pending", "spam"]),
});

// Function to generate a fake tag
const generateFakeTag = (): ITag => ({
  id: faker.datatype.string(),
  name: faker.lorem.word(),
});

const generateFakeImage = (): string => faker.image.imageUrl();
const generateFakeUser = (): IUser => {
  const userId = faker.string.uuid()
  return {
    id: userId,
    first_name: faker.string.sample({ min: 5, max: 10 }),
    last_name: faker.string.sample({ min: 5, max: 10 }),
  };
}

// Function to generate a fake blog post
const generateFakePost = (): IBlogPost => {
  const postId = faker.string.uuid();
  return {
    id: postId,
    title: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    author: generateFakeUser(),
    content: faker.lorem.paragraphs(5),
    excerpt: faker.lorem.sentences(2),
    publishedDate: faker.date.past().toISOString(),
    updatedDate: faker.date.recent().toISOString(),
    tags: Array.from({ length: 3 }, generateFakeTag),
    featureImageUrl: generateFakeImage(),
    status: faker.helpers.arrayElement(["draft", "published", "archived"]),
    views: faker.datatype.number({ min: 0, max: 10000 }),
    // commentsEnabled: faker.datatype.boolean(),
    // comments: Array.from({ length: 5 }, () => generateFakeComment(postId)),
    likes: faker.datatype.number({ min: 0, max: 500 }),
  };
};

// Generate fake project
const generateFakeProject = (): IProject => {
  return {
    id: faker.datatype.number(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(6),
    tags: Array.from({ length: 3 }, generateFakeTag),
    repository: faker.internet.url(),
    website: faker.internet.url(),
    category: faker.helpers.arrayElement([
      "package",
      "data & ai",
      "software",
      "design",
    ]),
  };
};

// Generate an array of fake projects
export const fakeProjects: IProject[] = Array.from(
  { length: 5 },
  generateFakeProject
);

// Generate an array of fake blog posts
export const fakePosts: IBlogPost[] = Array.from(
  { length: 4 },
  generateFakePost
);
