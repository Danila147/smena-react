import '../index.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
