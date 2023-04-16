import LightGallery from "lightgallery/react";
import { useCallback, useRef, useState } from "react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { items } from "./gallaryItems";

const Gallary = ()=>{
      const lightGallery = useRef(null);

      const [container, setContainer] = useState(null);

        const onInit = useCallback((detail) => {
          if (detail && detail.instance) {
            lightGallery.current = detail.instance;
            lightGallery.current.openGallery();
          }
        }, []);

        const setContainerRef = useCallback((node) => {
          if (node !== null) {
            setContainer(node);
          }
        }, []);

          const getLgComponent = () => {
            if (container !== null) {
              return (
                <LightGallery
                  container={container}
                  plugins={[lgZoom, lgThumbnail]}
                  dynamic={true}
                  dynamicEl={items}
                  closable={false}
                  onInit={onInit}
                  autoplay="true"
                  showMaximizeIcon={true}
                  appendSubHtmlTo=".lg-item"
                  speed={700}
                  controls={true}
                  subHtmlSelectorRelative={false}
                  thumbnail={true}
                  toggleThumb={true}
                  // thumbHeight="50px"
                  // thumbWidth="50px"
                ></LightGallery>
              );
            }
            return null;
          };
    return (
      <div
        style={{
          width: "100%",
          minHeight: "450px",
          paddingBottom: "50%",
        }}
        ref={setContainerRef}
      >
        {getLgComponent()}
      </div>
    );
}

export default Gallary;