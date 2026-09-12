import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" description="Empty dishwasher" deadline="Today" />
          <Task title="Laundry" description="Fold laundry and put away" deadline="Tomorrow"/>
      <Task title="Tidy" description="Clean up room" deadline="Today" />
    </div>
  );
}

export default App;
