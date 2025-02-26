import Card from "../components/CardComponent/Card";
import NavigationBar from "../components/Navigation/NavigationBar";

export default function Project() {
  return (
    <div className="flex">
      <NavigationBar />
      <div className="bg-white text-black dark:bg-black dark:text-white flex flex-wrap mx-10 my-10 ml-24">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
