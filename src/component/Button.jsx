export const Button = ({onClick, text, red}) => {
    return <button onClick={onClick} style={{backgroundColor: red ? "red" : ""}}>{text}</button>
}