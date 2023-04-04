import logo from './logo.svg';
import './App.css';
import TripCard from './components/TripCard';

function App() {
  return (
    <div className="App">
      <TripCard
      image1="https://guidetopakistan.pk/wp-content/uploads/2021/11/Pak.Monument-petals3.jpg"
      image2="https://guidetopakistan.pk/wp-content/uploads/2021/11/Pak.Monument-petals3.jpg"
      image3="https://guidetopakistan.pk/wp-content/uploads/2021/11/Pak.Monument-petals3.jpg"
      title="Example Card"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ac nunc eu bibendum. Aliquam consectetur sapien sit amet sem aliquet, a hendrerit eros dignissim."
    
      />
    </div>
  );
}

export default App;
