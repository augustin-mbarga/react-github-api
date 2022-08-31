// == IMPORT
import "./Loader.scss";

// == COMPONENT
export default function Loader() {
  return (
    <div className="gutter">
      <div className="ui three stackable cards">
        <div className="ui card">
          <div className="image">
            <div className="ui placeholder">
              <div className="square image"></div>
            </div>
          </div>
          <div className="content">
            <div className="ui placeholder">
              <div className="header">
                <div className="very short line"></div>
                <div className="medium line"></div>
              </div>
              <div className="paragraph">
                <div className="short line"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui card">
          <div className="image">
            <div className="ui placeholder">
              <div className="square image"></div>
            </div>
          </div>
          <div className="content">
            <div className="ui placeholder">
              <div className="header">
                <div className="very short line"></div>
                <div className="medium line"></div>
              </div>
              <div className="paragraph">
                <div className="short line"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui card">
          <div className="image">
            <div className="ui placeholder">
              <div className="square image"></div>
            </div>
          </div>
          <div className="content">
            <div className="ui placeholder">
              <div className="header">
                <div className="very short line"></div>
                <div className="medium line"></div>
              </div>
              <div className="paragraph">
                <div className="short line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
