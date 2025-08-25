import "./Net.css"
import PropTypes from "prop-types"
import defaultImage from "../img/email.webp"

const Net = ({ image, title, link, description, alt }) => {
  return (
    <div className="one-network">
      <a href={link}>
        <img src={image || defaultImage} alt={alt || "ikona"} />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

Net.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Net
