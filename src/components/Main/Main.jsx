import { useContext } from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";
import { NewsContext } from "../../conext";

export default function Main() {
  const { newsData } = useContext(NewsContext);
  console.log(newsData);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <Left />
        <Right />
      </div>
    </main>
  );
}
