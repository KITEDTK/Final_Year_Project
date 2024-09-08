// import { Link } from "react-router-dom";
export function Dashboard() {
  return (
    <>
      <main className="main">
        <div className="intro-slider-container">
          <div
            className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
            data-toggle="owl"
            data-owl-options='{
                        "dots": false,
                        "nav": false, 
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'
          >
            <div
              className="intro-slide"
              style={{
                backgroundImage:
                  "url(assets/images/demos/demo-6/slider/slide-1.jpg)",
              }}
            >
              <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">
                  You're Looking Good
                </h3>
                {/* End .h3 intro-subtitle */}
                <h1 className="intro-title text-white">New Lookbook</h1>
                {/* End .intro-title */}

                <a href="category.html" className="btn btn-outline-white-4">
                  <span>Discover More</span>
                </a>
              </div>
              {/* End .intro-content */}
            </div>
            {/* End .intro-slide */}

            <div
              className="intro-slide"
              style={{
                backgroundImage:
                  "url(assets/images/demos/demo-6/slider/slide-2.jpg)",
              }}
            >
              <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">Don’t Miss</h3>
                {/* End .h3 intro-subtitle */}
                <h1 className="intro-title text-white">Mysrety Deals</h1>
                {/* End .intro-title */}

                <a href="category.html" className="btn btn-outline-white-4">
                  <span>Discover More</span>
                </a>
              </div>
              {/* End .intro-content */}
            </div>
            {/* End .intro-slide */}
          </div>
          {/* End .intro-slider owl-carousel owl-theme */}

          <span className="slider-loader"></span>
          {/* End .slider-loader */}
        </div>
        {/* End .intro-slider-container */}

        {/* End .bg-gray */}

        <div className="mb-5"></div>
        {/* End .mb-5 */}

        {/* End .container */}

        <div className="mb-5"></div>
        {/* End .mb-5 */}

        {/* End .deal */}

        {/* End .bg-light pt-2 pb-2 */}

        <div className="mb-6"></div>
        {/* End .mb-5 */}

        {/* End .container */}

        {/* End .bg-gray */}

        <div className="mb-2"></div>
        {/* End .mb-5 */}

        <div className="container"></div>
        {/* End .container */}

        {/* End .blog-posts */}
      </main>
      {/* End .main */}
    </>
  );
}

