import React from 'react';
import _ from 'lodash';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetails from './video_details';  

const api_key="AIzaSyCK6hsRrB8E_-LgRoqLLiMPND4N83ecrIg";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={videos:[],
            selectedVideo:null 
        };
       this.videoSearch('surfboards');
    }
    videoSearch(terms){
        YTSearch({key:api_key,term:terms },(data)=>{
            
            this.setState({videos:data,
                        selectedVideo:data[0]
           });
            });
    }
    render(){
         const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onSearchtermChange={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos} />
                
            </div>
        )
    }
}
export default App;