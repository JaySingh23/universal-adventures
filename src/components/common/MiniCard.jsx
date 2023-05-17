import "../common/MiniCard.scss"

export default function MiniCard({data}) {
  return (
    <div className="miniCard">
        <img src={data.img} />
        <p className="cardTitle">{data.title}</p>
    </div>
  )
}
