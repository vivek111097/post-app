import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/tiger.png"
          alt="an image ahowing Vivek"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Tiger </h1>
      <p>
        The tiger is the largest living cat species and a member of the genus
        Panthera. It is most recognisable for its dark vertical stripes on
        orange fur with a white underside.
      </p>
    </section>
  );
};

export default Hero;
