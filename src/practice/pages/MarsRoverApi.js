import react, {useState, useEffect} from 'react';
// import BetterInput from '../components/BetterInput';
// import BetterDropDown from '../componets/BetterDropDown';
// import BetterButton from '../componets/BetterButton';

function MarsRoverApi( ){ 
    const [roverData, setRoverData] = useState([]);
    const [selectedCamera, setSelectedCamera] = useState('');
    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState('');
    
    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/cameras?api_key=MarsRoverApi')
        .then(response => response.json())
        .then(data => {
            setRoverData(data.cameras);
        })
        .catch(error => console.error('Error fetching rover data:', error));
    }, []);
    
    const handleCameraChange = (camera) => {
        setSelectedCamera(camera);
        fetchPhotos(camera, date);
    };
    
    const fetchPhotos = (camera, date) => {
        if (!camera || !date) return;
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?camera=${camera}&earth_date=${date}&api_key=DEMO_KEY`)
        .then(response => response.json())
        .then(data => {
            setPhotos(data.photos || []);
        })
        .catch(error => console.error('Error fetching photos:', error));
    };
    
    return (
        <div>
        <h1>Mars Rover Photos</h1>
        <p style={{ fontStyle: "italic", opacity: 0.7 }}>
  🚧 Please excuse the mess — this section is under construction.
</p>

        {/* <BetterDropDown
            options={roverData.map(cam => cam.name)}
            onChange={handleCameraChange}
            label="Select Camera"
        />
        <BetterInput
            label="Earth Date (YYYY-MM-DD)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date"
        />
        <BetterButton onClick={() => fetchPhotos(selectedCamera, date)}>Fetch Photos</BetterButton>
         */}
        <div className="photos">
            {photos.map(photo => (
            <img key={photo.id} src={photo.img_src} alt={`Mars Rover ${photo.id}`} />
            ))}
        </div>
        </div>
    );
};
export default MarsRoverApi;

//Abbreviation	Camera	Curiosity	Opportunity	Spirit
//Abrv    Camera Name	                Curiosity	Opportunity	Spirit
// FHAZ	Front Hazard Avoidance Camera	    ✔	        ✔	       ✔
// RHAZ	Rear Hazard Avoidance Camera	    ✔	        ✔	       ✔
// MAST	Mast Camera	                        ✔		
// CHEMCAM	Chemistry and Camera Complex	✔		
// MAHLI	Mars Hand Lens Imager	        ✔		
// MARDI	Mars Descent Imager         	✔		
// NAVCAM	Navigation Camera	            ✔	        ✔	        ✔
// PANCAM	Panoramic Camera		                    ✔	        ✔
// MINITES	Miniature Thermal Emission Spectrometer		✔	        ✔


//resize the img to fit container 
//want to call in the api display what ever imges they have for that camera
// from one up to 3 imgs
// total_photos , landing_date under each camera name
//verify if the imgs are available for any date you pick or
//  if only display the imgs for today pick
//error handling if the api is not available
//make dropdown component for the cams
