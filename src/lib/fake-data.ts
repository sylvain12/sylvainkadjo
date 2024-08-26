import { faker } from "@faker-js/faker";
import { IComment, ITag, IBlogPost } from "@/app/posts/models/types";

// Function to generate a fake comment
const generateFakeComment = (
  postId: number,
  parentCommentId: number | null = null
): IComment => ({
  id: faker.datatype.number(),
  postId,
  author: faker.internet.userName(),
  content: faker.lorem.paragraph(),
  publishedDate: faker.date.recent().toISOString(),
  parentCommentId,
  status: faker.helpers.arrayElement(["approved", "pending", "spam"]),
});

// Function to generate a fake tag
const generateFakeTag = (): ITag => ({
  id: faker.datatype.number(),
  name: faker.lorem.word(),
});

const generateFakeImage = (): string => faker.image.imageUrl();

// Function to generate a fake blog post
const generateFakePost = (): IBlogPost => {
  const postId = faker.datatype.number();
  return {
    id: postId,
    title: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    author: faker.internet.userName(),
    content: faker.lorem.paragraphs(5),
    excerpt: faker.lorem.sentences(2),
    publishedDate: faker.date.past().toISOString(),
    updatedDate: faker.date.recent().toISOString(),
    tags: Array.from({ length: 3 }, generateFakeTag),
    featuredImageUrl: faker.image.imageUrl(),
    status: faker.helpers.arrayElement(["draft", "published", "archived"]),
    views: faker.datatype.number({ min: 0, max: 10000 }),
    commentsEnabled: faker.datatype.boolean(),
    comments: Array.from({ length: 5 }, () => generateFakeComment(postId)),
    likes: faker.datatype.number({ min: 0, max: 500 }),
    image: generateFakeImage(),
  };
};

// Generate an array of fake blog posts
const fakePosts: IBlogPost[] = Array.from({ length: 4 }, generateFakePost);

export default fakePosts;
