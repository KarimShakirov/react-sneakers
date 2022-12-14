import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />

            <div className="content p-40">
                <div className="d-flex justify-between mb-40 align-center">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img className="mr-5" src="/img/search.svg" alt="Search"/>
                        <input className="search" placeholder="Поиск..."/>
                    </div>
                </div>


                <div className="d-flex justify-between flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
