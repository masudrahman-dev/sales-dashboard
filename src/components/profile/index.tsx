import { BellAlert } from "@medusajs/icons";
import React from "react";

import LanguageSelect from "../language-select";
import ProfileMenu from "../profile-menu";

const Profile = () => {
  return (
    <>
      <div className="flex items-center space-x-6">
        <LanguageSelect />
        <BellAlert className="text-yellow-500" />

        <div className="flex items-center gap-3">
          <img
            className="rounded-lg w-10 h-10 ring"
            src="https://picsum.photos/id/1/100/100"
            alt=""
          />
          <div>
            <p className="font-bold">Musfiq</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
        <ProfileMenu />
      </div>
    </>
  );
};

export default Profile;
