import React from 'react';
import { DndProvider } from 'react-dnd-cjs'
import HTML5Backend from 'react-dnd-html5-backend-cjs'
import ProfilesList from '../features/profiles/ProfilesList';

const ProfilesContainer = () => {
  return (
    <section className="profiles-container">
      <DndProvider backend={HTML5Backend}>
        <ProfilesList />
      </DndProvider>
    </section>
  );
};

export default ProfilesContainer;
