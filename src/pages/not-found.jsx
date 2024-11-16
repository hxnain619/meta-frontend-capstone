import Meta from "../components/Meta";

const NotFound = () => {
  return (
    <>
      <Meta
        title="Little Lemon - Not found"
        description="Welcome to Little Lemon, the best place in Chicago for fresh and delicious dishes."
        image="https://example.com/og-image.jpg"
        url="https://littlelemon.com"
      />
      <h1 className="text-green">Oops!!</h1>
      <h2 className="text-green">Page Not Found.</h2>
    </>
  );
};

export default NotFound;
