
import "./index.css";
export function App() {
  return (
    <div>
          <CardWrapper />
          hi there
    <CardWrapper/>
              <CardWrapper />
          hello there
    <CardWrapper/>
              <CardWrapper />
          hi there, ye shi h yrr
    <CardWrapper/>
    </div>

  );
}
// function TextComponent(){
//   return(
//     <div> hi there</div>
//   )
// }
interface ICard {
  children ?: any
}
function CardWrapper(props : ICard){
   return(
    <div style={{border : "2px solid black"}}>
      {props.children}
    </div>
   )
}

export default App;
