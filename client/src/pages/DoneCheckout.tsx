import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetLocalCarts } from "../features/carts/cartsSlice";
import { useParams } from "react-router-dom";
export const DoneCheckout = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  useEffect(() => {
    if (!auth && auth === null) {
      dispatch(resetLocalCarts());
    }
  }, [auth, dispatch]);
  const { type } = useParams();
  return (
    <>
      <div
        className="bg-image bg-overlay pt-5 pb-4"
        style={{ backgroundImage: "url(assets/images/backgrounds/bg-1.jpg)" }}
      >
        <div className="container">
          <h2 className="title text-center text-white mb-3">
            {type === "success"
              ? "Cảm ơn bạn đã mua hàng của KITESHOP."
              : "Mua hàng thất bại"}
          </h2>
          {/* End .title text-center */}

          <div
            className="owl-carousel owl-theme owl-testimonials owl-light"
            data-toggle="owl"
            data-owl-options='{
                                "nav": false, 
                                "dots": false,
                                "margin": 20,
                                "loop": true,
                                "responsive": {
                                    "1200": {
                                        "nav": false
                                    }
                                }
                            }'
          >
            <blockquote className="testimonial testimonial-icon text-center text-white">
              <p>
                {type === "success" ? (
                  <>
                    “Vui lòng kiên nhẫn đợi. Đơn hàng sẽ đến tay bạn sớm nhất có
                    thể. Chúng tôi xin chân thành cảm ơn. ”
                  </>
                ) : (
                  <>
                    “Thao tác mua hàng xảy ra vấn đề. Vui lòng kiểm tra lại. ”
                  </>
                )}
              </p>

              <cite>
                Đào Tuấn Kiệt
                <span>Chủ cửa hàng</span>
              </cite>
            </blockquote>
            {/* End .testimonial */}

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
