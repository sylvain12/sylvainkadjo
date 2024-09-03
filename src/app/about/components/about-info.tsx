"use client";

import Button from "@/components/ui/buttons";
import Image from "next/image";

export default function AboutInfoComponent() {
return (
  <div className="about__info">
    <Image
      width={150}
      height={150}
      className="about__info-profile"
      src="sylvainkadjo-assets/sylvainkadjo_profile_picture.png"
      alt="Sylvain KADJO profile picture"
      onLoad={() => <div>Loading...</div>}
    />
    <div className="about__info-name">
      <h3>Here Sylvain KADJO 👋🏽🤗</h3>
      <span>The guy with smile</span>
    </div>
    <p className="about__info-text">
      I thrive on new challenges and love sharing my experience with others. If
      you&lsquo;re looking for someone to collaborate on your next project or
      simply want to exchange ideas, don&lsquo;t hesitate to reach out.
      Let&lsquo;s connect !
    </p>
    {/* <Button
        label="view more"
        onClick={() => console.log("You clicked me!")}
        transparent={true}
        variant="second"
        type="button"
      /> */}
  </div>
);
}
