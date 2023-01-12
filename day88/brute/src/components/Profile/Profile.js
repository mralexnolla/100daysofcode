import React, { useContext, useEffect, useState } from 'react';
import useToggle from '../../hooks/useToggle';
import { ProfileContext } from '../../providers/ProfileProvider';
import { checkUsernameValidity } from './checkUsernameValidity.js';
import getIconOptions from './getIconOptions';

import styles from './Profile.module.css';

const Profile = () => {
  const {
    currentUser: { name, icon },
    setCurrentUser,
  } = useContext(ProfileContext);
  const [showEditForm, toggleShowEditForm] = useToggle(false);
  const [showUsernameValidation, toggleShowUsernameValidation] =
    useToggle(false);
  const [username, setUsername] = useState(name);
  const [iconOptions, setIconOptions] = useState();

  useEffect(() => {
    const load = () => {
      const userIconOptions = getIconOptions();
      setIconOptions(userIconOptions);
    };

    load();
  }, []);

  const isUsernameValid = checkUsernameValidity(name);

  const onSaveProfile = (e) => {
    e.preventDefault();

    setCurrentUser({
      name: e.target.username.value,
      icon: e.target.icon.value,
    });
    toggleShowEditForm();
  };

  const onToggleUsernameValidation = (e) => {
    e.preventDefault();
    toggleShowUsernameValidation();
  };

  return (
    <>
      <button onClick={toggleShowEditForm}>
        {name} {icon}
      </button>
      {showEditForm && (
        <aside className={styles.container}>
          <form onSubmit={onSaveProfile}>
            <label htmlFor='username'>
              <div className={styles.title}>
                Username
                <button onClick={onToggleUsernameValidation}>?</button>
              </div>
              {showUsernameValidation && (
                <>
                  The username must not be a duplicate of any existing user
                  name.
                </>
              )}
              <input
                type='text'
                id='username'
                name='username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              Username is {isUsernameValid ? 'valid.' : 'not valid.'}
            </label>
            {iconOptions && (
              <>
                <label htmlFor='icon'>Icon</label>
                <select name='icon' id='icon' defaultValue={icon}>
                  {iconOptions.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
              </>
            )}

            <div className={styles.actionsContainer}>
              <button type='button' onClick={toggleShowEditForm}>
                Cancel
              </button>
              <button type='submit'>Save</button>
            </div>
          </form>
        </aside>
      )}
    </>
  );
};

export default Profile;
