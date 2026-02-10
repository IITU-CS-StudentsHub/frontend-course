import { useState } from 'react'
import { ProfileCard } from './profile-card/ProfileCard'
import { ProfileEditor } from './profile-editor/ProfileEditor'

import styles from './ProfileManager.module.css'

export const ProfileManager = () => {
  const [profile, setProfile] = useState({
    name: '',
    speciality: '',
    description: ''
  })

  return (
    <div className={styles.profileManager}>
      <ProfileEditor profile={profile} setProfile={setProfile} />
      <ProfileCard profile={profile} />
    </div>
  )
}
