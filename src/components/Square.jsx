export default function Square({isClicked, children}) {
    return (
        <button onClick={isClicked}>{children}</button>
    )
}