import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/800">URL Parameter</Link>
      <br />
      <Link to="/page2/800?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
