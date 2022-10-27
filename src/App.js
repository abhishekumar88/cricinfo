import logo from './logo.svg';
import './App.css';
import TopBanner from './components/top-banner';

const bannerData = {
	imageTop: "https://lbb.in/shahar/images/web-copy-2-p-1600.png",
	imageBottom: "https://imgshopnewgumlet.lbb.in/config_images/2022/October/26/1666786517037_2copy2.png"
}

function App() {
  return (
	<div className="App">
	  <div className="shahar-page">
  		<TopBanner image={bannerData.imageTop} title="Deepak" />

	  	<div className="container">
			<div className="card-list">
				<div className="card">
					<h2>Delhi</h2>
				</div>
				<div className="card">
					<h2>Mumbai</h2>
				</div>
				<div className="card">
					<h2>Bangalore</h2>
				</div>
			</div>
		</div>

		<TopBanner image={bannerData.imageBottom}/>
	  </div>
	</div>
  );
}

export default App;
