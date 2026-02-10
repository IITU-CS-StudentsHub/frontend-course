export const ProfileCard = ({ profile }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Profile Card</div>
      <h2>Name: {profile.name}</h2>
      <h3>Speciality: {profile.speciality}</h3>
      <p>Description: {profile.description}</p>
    </div>
  )
}
