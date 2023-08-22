import { useParams } from "react-router-dom";

function CategoryPage() {
  const { slug } = useParams() as { slug: string };

  return <div>CategoryPage: {slug}</div>;
}

export default CategoryPage;
