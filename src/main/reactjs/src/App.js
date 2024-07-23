import './App.css';
import mainPhoto from './photo.png';

function App() {
  return (
    <div style={{margin:'50px 50px'}}>
      <img alt={'main'} src={mainPhoto}
           style={{width:'300px',border:'5px inset gray'}}/>
      <h3>
        <b>스프링부트 + 리액트 배포 성공 기원</b>
      </h3>
    </div>
  );
}

export default App;
