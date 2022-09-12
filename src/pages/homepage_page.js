import ArticleComponent from "../components/article_component";

function Homepage() {
  return (
    <div className="flex flex-col w-full">
      <p>Latest Articles</p>
      {Array(20)
        .fill(1)
        .map((e, i) => (
          <ArticleComponent key={i} />
        ))}
    </div>
  );
}

export default Homepage;
