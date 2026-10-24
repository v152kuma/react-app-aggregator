export function CourseGoal({title, description}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

const coursegoals = [
    {"title":"Learn React",
     "description" :"In-depth"    
    },
    {
     "title":"Learn Redux",
     "description":"understand hooks"
    }
    
    
    ] 

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {
            coursegoals.map((goal) => (
            <CourseGoal {...goal} />))
        }
      </ul>
    </div>
  );
}

export default App;