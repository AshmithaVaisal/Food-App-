import { CardList } from "../components/CardList";
import { SearchBar } from "../components/SearchBar";
import { TopBar } from "../components/TopBar";
import { FoodContextProvider } from "../context/foodContext";

export const Home = () => {
  return (
    <>
      <TopBar />
      <SearchBar />
      <CardList />
    </>
  );
};
