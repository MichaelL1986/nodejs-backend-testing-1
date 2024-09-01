import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;
  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };
  let preExistingPost: Post;

  beforeEach(async () => {
    postsService = new PostsService();

    preExistingPost = postsService.create({
      text: "Some pre-existing post",
    });
  });

  it("should add a new post", () => {
    // должен быть метод getAll для корректного теста
    const postToAdd = post;

    const createdPost = postsService.create(postToAdd);

    expect(createdPost).toMatchObject(postToAdd);
  });

  it("should find a post", () => {
    const { id } = preExistingPost;

    const findedPost = postsService.find(id);

    expect(findedPost).toMatchObject(preExistingPost);
  });
});
