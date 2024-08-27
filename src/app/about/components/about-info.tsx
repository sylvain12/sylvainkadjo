"use client";

import Button from "@/components/ui/buttons";
import Image from "next/image";

export default function AboutInfoComponent() {
  return (
    <div className="about__info">
      <Image
        width={150}
        height={150}
        className="about__info-profile rounded-full"
        src="/assets/profile.jpg"
        alt="Sylvain KADJO profile picture"
        onLoad={() => <div>Loading...</div>}
      />
      <div className="about__info-name">
        <h3>Sylvain KADJO 👋🏽🤗</h3>
        <span>The guy with smile</span>
      </div>

      <p className="about__info-text">
        I love new challenges, sharing experience, so if you want me for your
        next project, or if you want to share your experience with me,
        don&lsquo;t hesitate, contact me now.
      </p>

      <Button
        label="view more"
        onClick={() => console.log("You clicked me!")}
        transparent={true}
        variant="second"
        type="button"
      />
    </div>
  );
}
