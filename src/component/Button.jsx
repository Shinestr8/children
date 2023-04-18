export const Button = ({onClick, text, red, long}) => {
    return <button onClick={onClick} style={{backgroundColor: red ? "red" : "", width: long ? "500px" : ""}}>{text}</button>
}