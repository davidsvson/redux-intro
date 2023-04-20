import { useState } from "react"

const Profile = () => {
    const [alias, setAlias] = useState('');
    const [name, setName] = useState('');

    return (
        <div>
            <h3>User Profile</h3>
            <div>
                Alias:
                <input type="text" value={alias}
                    onChange={e => setAlias(e.target.value) } />
            </div>
            <div>
                Real Name:
                <input type="text" value={name}
                    onChange={e => setName(e.target.value) } />
            </div>
            <button>Save</button>
            <button>Reset</button>
        </div>
    )
}

export default Profile;