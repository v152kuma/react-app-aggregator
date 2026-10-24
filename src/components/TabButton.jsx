
const TabButton = ({children}) => {

    const handleClick = () => {
        alert(`You clicked on ${children} tab`);
    }

  return (
    <li>
        <button onClick={handleClick}>{children}</button>
    </li>
  )
}

export default TabButton