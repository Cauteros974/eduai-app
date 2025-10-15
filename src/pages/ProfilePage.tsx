import { useUserStore } from "../store/userStore";
import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
    const user = useUserStore((state) => state.user);

    if(!user) {
        return <div>Loading user data...</div>
    }

    return(
        <div className={styles.profilePage}>
            <h1>User Profile</h1>
            <div className={styles.card}>
                <div className={styles.field}>
                    <strong>Name</strong>
                    <span>{user.name}</span>
                </div>
            </div>
        </div>
    )
}