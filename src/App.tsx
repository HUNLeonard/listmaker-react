import ModalHandler from "./components/Modals/ModalHandler";
import ColumnList from "./components/Colums/ColumnList";


const App = () => {

  return (
    <main className="min-h-screen">
      <ColumnList />
      <ModalHandler />
    </main>
  );
};

export default App;
