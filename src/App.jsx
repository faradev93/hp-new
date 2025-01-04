import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardWrapper from "./components/CardWrapper";
import "./Glob-Tail.css";
import Flexy from "./components/Flex";

const monster = [];
// async function testi() {
//   const data2 = await fetch("https://reqres.in/api/users?page=2");
//   const tabdil = await data2.json();
//   console.log;
// }
// testi();
export default function App() {
  return (
    <div>
      <Flexy>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
          return <CardWrapper />;
        })}
      </Flexy>
    </div>
  );
}
