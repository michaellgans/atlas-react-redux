// App Component

// Imports
import { Provider } from "react-redux";
import { store } from "../store";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { List } from "./List";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <List listTitle="List 1" />
      <Footer />
    </Provider>
  );
}

export default App;
