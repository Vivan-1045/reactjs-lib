import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center right-12 top-12 h-10 w-12">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-300 px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white"style={{backgroundColor : "blue"}}>
            Blue
          </button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white"style={{backgroundColor : "green"}}>
            Green
          </button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-black"style={{backgroundColor : "yellow"}}>
            Yellow
          </button>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white"style={{backgroundColor : "red"}}>
            Red
          </button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-black"style={{backgroundColor : "pink"}}>
            Pink
          </button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white"style={{backgroundColor : "purple"}}>
            Purple
          </button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white"style={{backgroundColor : "black"}}>
            Black
          </button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-black"style={{backgroundColor : "white"}}>
            White
          </button>
          <button onClick={() => setColor("brown")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white"style={{backgroundColor : "brown"}}>
            Brown
          </button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-black"style={{backgroundColor : "gray"}}>
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
