// Code EyesOnMe Component Here
export class EyesOnMe extends React.Component {

  function focus(){
    console.log("Good!");
  }

  function blur(){
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <button>Tickle me!</button>
    );
  }
}
