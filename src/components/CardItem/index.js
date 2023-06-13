// Write your code here.
import './index.css'

const CardItem = props => {
  const {sourceItem} = props
  const {title, description, imgUrl, className} = sourceItem

  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
