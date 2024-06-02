"use client";
import { useState } from "react";
import UserPhotoUpload from "./UserPhotoUpload";

const UserProfile: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleImageUpload = (imageUrl: string) => {
    setUserImage(imageUrl);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32">
        {userImage ? (
          <img
            src={userImage}
            alt="User"
            className="w-full h-full rounded-full object-cover border-slate-200"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
      <UserPhotoUpload onImageUpload={handleImageUpload} />
    </div>
  );
};

export default UserProfile;
