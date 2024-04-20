import React from "react";

interface Props {
  params: { photoId: number; id: number };
}

const userPhoto = ({ params: { photoId, id } }: Props) => {
  return (
    <div>
      userPhoto{photoId} og {id}
    </div>
  );
};

export default userPhoto;
