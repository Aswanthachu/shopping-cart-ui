import { Header, MenuItem, Tab } from "./components";

function App() {
  
  return (
    <main className=" p-0 lg:p-5 font-main">
      <Header />
      <div className=" lg:mt-4 w-full flex overflow-x-auto styled-scrollbar lg:pt-2">
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
      <div className="w-full">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </main>
  );
}

export default App;
