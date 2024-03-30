import Chat from "./components/Chat";
import ChatContainer from "./components/ChatContainer";

function App() {
  var images = [
    "https://picsum.photos/id/1/100/100",
    "https://picsum.photos/id/2/100/100",
    "https://picsum.photos/id/3/100/100",
    "https://picsum.photos/id/4/100/100",
    "https://picsum.photos/id/5/100/100",
    "https://picsum.photos/id/6/100/100",
  ];

  var person = [
    "Jessica Koel",
    "Komeial Bolger",
    "Tamaara Suiale",
    "Sam Nielson",
    "Caroline Nexon",
    "Patrick Koeler",
  ];
  var massage = [
    "Hey, Joel, I here to help you out please...",
    "I will send you all documents as soon a...",
    "Are you going to business trip next week..",
    "Lorem ipsum dolor sit amet consectetur...",
    "Lorem ipsum dolor adipisicing elit. Mi...,.",
    "Lorem ipsum dolor cing elit. Dolor, quis..",
  ];
  var time = ["11:26", "12:26", "8:26", "7:16", "9:26", "3:26"];

  var map = person.map(function (item, index) {
    return (
      <div>
        <ChatContainer
          person={item}
          mass={massage[index]}
          tim={time[index]}
          img={images[index]}
        ></ChatContainer>
      </div>
    );
  });

  return (
    <div>
      <Chat />
      {map}
    </div>
  );
}

export default App;
