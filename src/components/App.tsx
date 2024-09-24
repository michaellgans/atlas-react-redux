// App Component

// Imports
import { Provider } from "react-redux";
import { store } from "../store";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./Card";
import { NewCardForm } from "./NewCardForm";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Card title="Card 1" description="This is a test" />
      <NewCardForm />
      <Footer />
    </Provider>
  );
}

export default App;
