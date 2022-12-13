import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
    
      <Drawer />
      
      <Header />
      

      <div className="content p-40">

        <div className="mb-40 d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block">
        <img src="/img/search.svg" alt="" width={14} height={14}/>
        <input placeholder="Поиск ..."/>
        </div>
        </div>
        
        <div className="d-flex flex-wrap sneakers">
         
        <Card />
   

        </div>

      </div>
    </div>
  );
}

export default App;
