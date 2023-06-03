const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>Number of exercises {sum}</b></p>

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />)}
  </>

const Course = ({ course }) => {
  const initial = 0
  const sum = course.parts.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.exercises
    },
    initial
  )

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </>
  )
}

export default Course