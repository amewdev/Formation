export default function Card({id, title, project, description, tasksSelector, prioritySetter}) {
    return (
        <>
            <div className="todo">
                <div className="todo-title">
                    <h1>{title}</h1>
                    <h6>{project}</h6>
                </div>
                <p>{description}</p>
                <div className="buttons">
                    <div
                        className="done"
                        onClick={() => {tasksSelector(id)}}
                    >Done!</div>
                    <div
                        className="pri"
                        onClick={() => {prioritySetter(id)}}
                    >Prioritize</div>
                </div>
            </div>
        </>
    )
}