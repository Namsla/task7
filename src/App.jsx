import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import getEachElement from "./namkhang";

function App() {
  let persons = [
    {
      name: "Alice",
      age: 25,
      hobbies: ["Reading", "Gardening", "Cooking"],
      bio: "Alice is a passionate learner who enjoys exploring new technologies.",
    },
    {
      name: "Bob",
      age: 27,
      hobbies: ["Playing guitar", "Hiking", "Photography"],
      bio: "Bob is a creative individual who loves expressing himself through music and capturing moments with his camera.",
    },
    {
      name: "Charlie",
      age: 23,
      hobbies: ["Painting", "Writing", "Soccer"],
      bio: "Charlie is an artist at heart, always seeking inspiration from various forms of art.",
    },
    {
      name: "David",
      age: 29,
      hobbies: ["Swimming", "Traveling", "Programming"],
      bio: "David is an adventurer who is passionate about coding and exploring the world at the same time.",
    },
  ];
  let eachPerson = persons.map(getEachElement);
  return (
    <>
      <div className="nav">
        <h3>Home</h3>
        <h3>History</h3>
        <h3>Board Members</h3>
        <h3>Contact Us</h3>
        <input type="text" placeholder="Search" />
      </div>
      <br />
      <h1>Meet the honor students from the class of 2023</h1> <br />
      <p className="long">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe
        nobis esse iusto soluta adipisci, quaerat qui in, magni dignissimos amet
        quibusdam expedita dolore ipsa debitis est omnis nisi praesentium.
        Porro, cum placeat? Odio incidunt quas minus animi possimus facere
        voluptatem aliquid dolor, accusamus quaerat, molestias soluta veritatis
        iusto. Iusto, maxime mollitia modi eligendi ratione possimus voluptates
        dolores cum fuga. Laborum at impedit placeat autem voluptatibus. Labore
        cupiditate et numquam sapiente dolore alias doloribus est tempore,
        expedita doloremque voluptas, vitae pariatur molestiae aliquid itaque
        eos officia maxime voluptatem qui? Veniam magni nemo ut perspiciatis
        architecto fugit ad adipisci optio ab.
      </p>
      <div className="main">{eachPerson}</div>
      <p className="short">
        Check back for our next month's student of the year!
      </p>
      <div className="footer">Namkhang Tsamchoe@2023</div>
    </>
  );
}

export default App;
