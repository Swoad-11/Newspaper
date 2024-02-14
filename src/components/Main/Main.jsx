import { useContext } from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";
import { NewsContext } from "../../conext";
import NoData from "./NoData";
import { BeatLoader } from "react-spinners";

export default function Main() {
  const { noData, loading } = useContext(NewsContext);

  if (loading) {
    return (
      <div className="my-40 text-center">
        <BeatLoader color="#ef4444" />
      </div>
    );
  }

  return (
    <>
      {noData ? (
        <NoData />
      ) : (
        <>
          <main className="my-10 lg:my-14">
            <div className="container mx-auto grid grid-cols-12 gap-8">
              <Left />
              <Right />
            </div>
          </main>
        </>
      )}
    </>
  );
}
