import './index.css'

const EventItem = props => {
  const {eventDetails} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  return (
    <li className="event-details">
      <button className="button">
        <img src={imageUrl} className="images" alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
