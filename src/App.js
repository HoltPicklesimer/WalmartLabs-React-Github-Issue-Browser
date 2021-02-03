import { useState, useEffect } from "react";
import Details from "./pages/Details";
import Issues from "./pages/Issues";
import Header from "./shared/Header";

const style = {
  flex: 1,
};

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIndices, setPageIndices] = useState(null);

  let apiUrl = "https://api.github.com/repos/walmartlabs/thorax/issues";
  let organization = "walmartlabs";
  let repo = "thorax";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setPageIndices(result.length / 10);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function handleClick(issue) {
    setItemSelected(issue);
  }

  const handlePageClick = (newPage) => {
    if (newPage >= pageIndices) {
      setCurrentPage(pageIndices);
    } else if (newPage <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(newPage);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (!itemSelected) {
      return (
        <div>
          <Header></Header>
          <Issues
            items={items}
            organization={organization}
            repo={repo}
            handleClick={handleClick}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
            pageIndices={pageIndices}
          ></Issues>
        </div>
      );
    } else {
      return (
        <div>
          <Header></Header>
          <Details handleClick={handleClick} issue={itemSelected}></Details>
        </div>
      );
    }
  }
}
