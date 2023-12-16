import { Header, Tab } from "./components";

function App() {
  return (
    <main className=" p-3 md:p-5 font-main">
      <Header />
      <div className="mt-4 w-full flex overflow-x-auto styled-scrollbar pt-2">
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
      </div>
    </main>
  );
}

export default App;
