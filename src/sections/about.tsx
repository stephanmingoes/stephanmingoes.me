import React from "react";
import Heading from "../components/ui/heading";

export default function About() {
  return (
    <div id="about">
      <Heading>About</Heading>
      <h1 className="text-base font-bold mb-6">
        Stephan Mingoes, Bsc. Computer Science 2024
      </h1>
      <article>
        {" "}
        <p className="text-base text-justify">
          As a Software Developer, I am constantly seeking new challenges and
          opportunities to expand my knowledge and skillset. I am deeply
          passionate about using technology to solve real-world problems and
          have a strong foundation in Computer Science principles, including
          Data Structures, algorithms, and Software Design.
          <br />
          <br />
          I have gained valuable experience through my coursework and
          internships, where I have worked on a variety of projects invloving
          Web Development to Cloud Computing. I am a detail-oriented and
          self-motivated learner, who is always eager to take on new challenges
          and learn new technologies.
          <br /> <br />I am excited to continue my growth as a Software
          Developer and hope to make a positive impact through my work in the
          tech industry. I believe that with my technical skills and
          problem-solving mindset, I have the potential to make meaningful
          contributions to the world of technology.
        </p>
      </article>
    </div>
  );
}
