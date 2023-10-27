

export default function Article({title, date, preview}) {
  return (
    <div className="articles">
        <h3>{title}</h3>
        <small>{date || "January 1, 1970"}</small>
        <p>{preview}</p>
    </div>
  )
}
