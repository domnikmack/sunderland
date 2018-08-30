import React, { Component } from 'react';
import sample from '../test-content/sample-article.json';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImgIdx: 0
    };
  }

  selectImage = i => {
    this.setState({ displayImgIdx: i });
  };

  render() {
    const { title, subtitle, content, images, video } = sample;

    return (
      <div className="article">
        <header>
          <p className="article-subtitle">{subtitle}</p>
          <h1>{title}</h1>
        </header>
        <main>
          <section className="images-container">
            <img
              className="article-featured-img"
              src={images[this.state.displayImgIdx][0]}
              alt={images[this.state.displayImgIdx][1]}
            />
            <footer>
              <div className="image-info-container">
                <p className="article-image-title">Title for the Image</p>
                <p className="article-image-caption">Caption for the video</p>
              </div>

              <div className="article-thumbnails">
                {images.map((thumb, i) => {
                  return (
                    <img
                      key={i}
                      src={thumb[0]}
                      alt={thumb[1]}
                      onClick={() => this.selectImage(i)}
                    />
                  );
                })}
              </div>
            </footer>
          </section>
        </main>

        <section className="article-text">
          <Content content={content} video={video} />
        </section>
      </div>
    );
  }
}

function Content({ content, video }) {
  return content.map((text, i) => {
    return text.map((el, j) => {
      if (!j && el) return <h2>{el}</h2>;
      if (i === 0 && j === 1) {
        return (
          <div style={{ verticalAlign: 'top' }}>
            <p>{el}</p>
            <Video video={video} />
          </div>
        );
      }
      return <p>{el}</p>;
    });
  });
}

function Video({ video }) {
  const { vidPath, vidThumb, vidCaption } = video;
  return (
    <figure className="video-container">
      <video
        src={vidPath}
        width="300"
        controls
        preload="none"
        playsInline
        poster={vidThumb}
      >
        <track default kind="captions" srclang="en" src={vidCaption} />
      </video>
      <figcaption>Some Video info</figcaption>
    </figure>
  );
}

export default Article;
