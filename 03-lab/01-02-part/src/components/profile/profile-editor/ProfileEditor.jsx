export const ProfileEditor = ({ profile, setProfile }) => {
  const handleChange = field => event => {
    setProfile({
      ...profile,
      [field]: event.target.value
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type='text'
        placeholder='Name'
        value={profile.name}
        onChange={handleChange('name')}
      />
      <input
        type='text'
        placeholder='Speciality'
        value={profile.speciality}
        onChange={handleChange('speciality')}
      />
      <textarea
        placeholder='Description'
        value={profile.description}
        onChange={handleChange('description')}
      ></textarea>
    </div>
  )
}
