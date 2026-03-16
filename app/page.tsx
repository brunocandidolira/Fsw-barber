
import { SearchIcon } from "lucide-react";
import Header from "./components/Header";


export default function Home() {
  return (
    <div>

        <Header />
        <div className="p-5">   
           <h2 className="text-xl font-bold">olá,Bruno</h2>
           <p>Domingo,15 de agosto</p>

           <div className="flex items-center gap-1">
            <input placeholder="faça  sua busca"/>
            <button>

              <SearchIcon />
            </button>
          
            </div>
        </div>
    </div>
  
  );
}
