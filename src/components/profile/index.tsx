import { BellAlert } from "@medusajs/icons";
import React from "react";

import LanguageSelect from "../language-select";

const Profile = () => {
  return (
    <>
      <div className="flex items-center space-x-3">
        <LanguageSelect />
        <BellAlert />
        <div>
          <div className="flex gap-3">
            <img
              className="rounded-lg w-10 h-10 "
              src="https://picsum.photos/id/1/100/100"
              alt=""
            />
            <div>
              <p className="font-bold">Musfiq</p>
              <p className="text-sm">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
