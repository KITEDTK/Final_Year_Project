import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetLocalCarts } from "../features/carts/cartsSlice";

export const DoneCheckout = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  useEffect(() => {
    if (!auth && auth === null) {
      dispatch(resetLocalCarts());
    }
  }, [auth, dispatch]);

  return (
    <>
      <div
        className="bg-image bg-overlay pt-5 pb-4"
        style={{ backgroundImage: "url(assets/images/backgrounds/bg-1.jpg)" }}
      >
        <div className="container">
          <h2 className="title text-center text-white mb-3">
            Quote Sign <span className="title-separator">/</span> Centered Align{" "}
            <span className="title-separator">/</span> Dark Background
          </h2>
          {/* End .title text-center */}

          <div
            className="owl-carousel owl-theme owl-testimonials owl-light"
            data-toggle="owl"
            data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": true,
                                "responsive": {
                                    "1200": {
                                        "nav": true
                                    }
                                }
                            }'
          >
            <blockquote className="testimonial testimonial-icon text-center text-white">
              <p>
                “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti. ”
              </p>

              <cite>
                Jenson Gregory
                <span>Customer</span>
              </cite>
            </blockquote>
            {/* End .testimonial */}

            <blockquote className="testimonial testimonial-icon text-center text-white">
              <p>
                “ Impedit, ratione sequi, sunt incidunt magnam et. Delectus
                obcaecati optio eius error libero perferendis nesciunt atque
                dolores magni recusandae! Doloremque quidem error eum quis
                similique doloribus natus qui ut ipsum.Velit quos ipsa
                exercitationem, vel unde obcaecati impedit eveniet non. ”
              </p>

              <cite>
                Damon Stone
                <span>Customer</span>
              </cite>
            </blockquote>
            {/* End .testimonial */}

            <blockquote className="testimonial testimonial-icon text-center text-white">
              <p>
                “ Molestias animi illo natus ut quod neque ad accusamus
                praesentium fuga! Dolores odio alias sapiente odit delectus
                quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis,
                voluptate, distinctio earum veritatis animi tempora eget blandit
                nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
                potenti. ”
              </p>

              <cite>
                John Smith
                <span>Customer</span>
              </cite>
            </blockquote>
            {/* End .testimonial */}

            
          </div>
          {/* End .testimonials-slider owl-carousel */}
        </div>
        {/* End .container */}
      </div>
      {/* End .bg-image pt-6 pb-6 */}
    </>
  );
};
