export default function Square({isClicked, children}) {
    return (
        <button onClick={isClicked} data-content={children}>
            {children}
        </button>
    )
}