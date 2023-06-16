import { useState } from "react";

function SettingsPage({ userData }) {
  return (
    <div className="main__page">
      <div className="cont--max">
        <p>Settings Page</p>
        <img src={profileImage} />
      </div>
    </div>
  );
}

export default SettingsPage;
