import Left from "./Left/Left";
import Right from "./Right/Right";

export default function Main() {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <Left />
        <Right />
      </div>
    </main>
  );
}
