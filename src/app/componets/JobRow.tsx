import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow(){


    return(<>
    
        <div className="bg-white p-4 rounded-lg shadow-sm relative"> 
          
          <div className="absolute cursor-pointer top-4 right-4"> 
            <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart}/> </div>

          <div className="flex grow gap-4">

            <div className="content-center"> 
                
                <img className="size-12"
                    src="https://www.shutterstock.com/shutterstock/photos/2177649199/display_1500/stock-vector-signal-music-icon-internet-symbol-logo-sign-isolated-social-media-digital-famous-green-color-vector-2177649199.jpg"
                />

                
                </div> 

            <div className="grow sm:flex"> 

                <div className="grow"> 

                    <div className="text-gray-500 text-sm"> Spotify </div>
                    <div className="font-bold text-lg mt-1"> Product designer </div>
                    <div className="text-gray-400 text-sm"> Remote &middot;  New York, US &middot; Full-time </div>

                </div> 
           
                <div className="content-end text-gray-500 text-sm" > 2 weeks ago</div>

            </div>


          </div>






        </div>

    </>);


}