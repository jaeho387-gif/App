import { officeCast } from './officeCast'

function OfficeAvatar({ character, className = '' }) {
  const person = officeCast[character]

  return (
    <img
      className={`pfp office-avatar ${className}`.trim()}
      src={person.photo}
      alt={`${person.name}, portrayed by ${person.actor}. Photo by ${person.photoCredit}.`}
      title={`${person.photoCredit}. View source: ${person.photoSource}`}
      loading="lazy"
      decoding="async"
    />
  )
}

export default OfficeAvatar