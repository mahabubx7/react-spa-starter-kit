export default function About() {
  // fake error: test error boundary
  throw new Error('Error! from About Page')
  return (
    <div>
      <h1>About page!</h1>
    </div>
  )
}
