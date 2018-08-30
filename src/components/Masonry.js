import React, { Component } from 'react';
import './Masonry.css';
import data from '../test-content/masonry-data.json';

export default class Masonry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTiles: data.tiles.slice(0, 4)
    };
    this.loadMoreRef = React.createRef();
  }

  loadMore = () => {
    const numOfTiles = this.state.currentTiles.length;
    const tilesToBeAdded = data.tiles.slice(numOfTiles, numOfTiles + 4);
    this.setState({
      currentTiles: [...this.state.currentTiles, ...tilesToBeAdded]
    });
  };

  componentDidUpdate = () => {
    setTimeout(
      () =>
        this.loadMoreRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        }),
      100
    );
  };

  render() {
    const tiles = this.state.currentTiles;
    return (
      <div className="masonry">
        <main>
          {tiles.map((tile, i) => (
            <Tile tile={tile} index={i} />
          ))}
        </main>

        <div className="below-tiles" ref={this.loadMoreRef}>
          <button className="load-more-btn" onClick={this.loadMore}>
            Load More
          </button>
        </div>
      </div>
    );
  }
}

function Tile({ tile, index }) {
  const { image, heading, content, meta } = tile;
  return (
    <div
      className={
        'masonry-tile ' + (index % 2 === 0 ? 'column-left' : 'column-right')
      }
    >
      {image.length > 0 ? (
        <img src={image} />
      ) : (
        <div className="masonry-beam" />
      )}
      <h2>{heading}</h2>
      <p>{content}</p>
      <p>{meta}</p>
    </div>
  );
}
