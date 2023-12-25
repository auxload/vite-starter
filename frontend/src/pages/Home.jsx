import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: () =>
      fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
        res.json()
      ),
  });

  return (
    <div>
      {data && (
        <img
          className="block w-60 rounded-full  aspect-square"
          src={data[0].url}
        ></img>
      )}
      <span>Hi, data fetched with useQuery</span>
    </div>
  );
};

export default Home;
