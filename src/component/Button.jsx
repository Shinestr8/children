export const Button = ({onClick, text, red, long, high}) => {
    return <button onClick={onClick} style={{backgroundColor: red ? "red" : "", width: long ? "500px" : "", height: "500px"}}>{text}</button>
}