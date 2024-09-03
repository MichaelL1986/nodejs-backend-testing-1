import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;
  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({
      text: "Some pre-existing post",
    });
  });

  it("should add a new post", () => {
    const postToAdd = post;

    const createdPost = postsService.create(postToAdd);

    expect(postsService["posts"]).toContain(createdPost);
  });

  it("should find a post", () => {
    const post = postsService["posts"][0];

    const findedPost = postsService.find(post.id);

    expect(findedPost).toMatchObject(post);
  });
});
