import Person from './Person'

const List = ({ people }) => {
  console.log(people.id)
  return (
    <section>
      {people.map((person) => {
        console.log(person.name)
        return <Person key={person.id} {...person} />
      })}
    </section>
  )
}
export default List
