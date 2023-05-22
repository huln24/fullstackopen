const Header = (props) => {
  console.log('hello' + props.course)
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
return (
  <p>
    {props.name} {props.exercises}
  </p>
)

}

const Content = (props) => {
  let parts = props.parts
  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )

}

const Total = (props) => {
  let parts = props.parts;
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  // const exercises = [10, 7, 14]
  const parts = [
    {name:'Fundamentals of React', exercises: 10},
    {name:'Using props to pass data', exercises:7},
    {name:'State of a component', exercises:14},
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App