import React from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

const App = () => {
  const [color, setColor] = React.useState('')
  const [error, setError] = React.useState(false)
  const [list, setList] = React.useState(new Values('#f15025').all(10))

  const SubmitHandler = (e) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(colors)
      setColor('')
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generatror</h3>
        <form action="" onSubmit={SubmitHandler}>
          <input
            type="text"
            name=""
            id=""
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f17090"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="Submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((farbe, index) => {
          
          console.log(farbe)
          return <SingleColor key={index} {...farbe} index={index} hexColor={farbe.hex} />
        })}
      </section>
    </>
  )
}

export default App
