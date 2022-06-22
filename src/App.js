import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { title: "Transportation", amount: 60, date: new Date(2022, 5, 17) },
    { title: "T-Glass", amount: 100, date: new Date(2022, 5, 17) },
    { title: "Snacks", amount: 110, date: new Date(2022, 5, 7) },
    { title: "T-Glass", amount: 150, date: new Date(2022, 5, 17) },
    { title: "Momo", amount: 150, date: new Date(2022, 5, 17) },
    { title: "HairCut", amount: 200, date: new Date(2022, 5, 17) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
