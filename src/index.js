import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Search from './Components/Search';
import VideoList from './Components/video-list';
import VideoDetail from './Components/video-detail';
import config from './config';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Nikkie Tutorials');

  }

  videoSearch(term) {
    YTSearch({key: config.API_KEY, term: term}, (videos) => this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      // this.setState({videos: videos}) can be written
      // this.setState({videos})
    );
  }
  render() {

    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 400);

    return (
      <div>
        <Search onSearchChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
        onSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  };
};

ReactDOM.render(<App />, document.querySelector('.container'));
