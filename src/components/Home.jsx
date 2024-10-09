import featImg from "../assets/main_img.jpg";

export default function Home({ title }) {
  return (

    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="SchoolHacks workshops attendees"
      />

      <h1>{title}</h1>
      <p>
        This is a fictitious company and workshops created by{" "}
        <a
          href="https://workshop.schoolhacks.eu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          SchoolHacks, or its affiliates
        </a>
        , solely for the creation and development of educational training
        materials. Any resemblance to real products or services is purely
        coincidental. Information provided about the products or services is
        also fictitious and should not be construed as representative of actual
        products or services on the market in a similar product or service
        category.
      </p>
    </div>
  );
}
