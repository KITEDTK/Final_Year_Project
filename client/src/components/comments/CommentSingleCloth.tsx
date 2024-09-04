import { ChangeEvent, useState } from "react";
import { SingleComment } from "../../features/comments/commentsTypes";
import { fetchAddComment } from "../../features/products/clothesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { showToast } from "../../utils/showToast";
interface Props {
  commentInfo: SingleComment[];
}
export const CommentSingleCloth: React.FC<Props> = ({ commentInfo }) => {
  console.log(commentInfo);
  const { clothesId } = useParams<string>();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [commentText, setCommentText] = useState<string>();
  const handleOnClickAddComment = () => {
    console.log(clothesId);
    if (auth && clothesId) {
      if (commentText) {
        dispatch(
          fetchAddComment({
            clothesId: clothesId,
            content: commentText,
            userId: auth.id,
          })
        ).then((res: any) => {
          if(res.error){
            showToast('Bạn chưa mua sản phẩm này','error');
          }else{
            showToast('Thêm comment thành công','success');
          }
        });
      }
    }
  };
  const handleOnChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(event.target.value);
  };
  return (
    <>
      <div
        className="tab-pane fade"
        id="product-review-tab"
        role="tabpanel"
        aria-labelledby="product-review-link"
      >
        {auth && (
          <>
            {" "}
            <textarea
              onChange={(event) => handleOnChangeComment(event)}
              value={commentText}
              className="form-control"
              cols={30}
              rows={1}
              placeholder="Notes about your order, e.g. special notes for delivery"
            ></textarea>
            <button onClick={() => handleOnClickAddComment()}>
              thêm comment
            </button>
          </>
        )}

        <br />
        <br />
        <h3>Reviews ({commentInfo.length})</h3>
        <div className="reviews">
          {commentInfo &&
            commentInfo.length &&
            commentInfo.map((item) => (
              <>
                <div className="review">
                  <div className="row no-gutters">
                    <div className="col-auto">
                      <h4>
                        <a href="#">{item.user.fullname}</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "80%" }}
                          ></div>
                          {/*  End .ratings-val */}
                        </div>
                        {/*  End .ratings */}
                      </div>
                      {/*  End .rating-container */}
                      <span className="review-date">6 days ago</span>
                    </div>
                    {/*  End .col */}
                    <div className="col">
                      <h4>{item.cloth.name}</h4>
                      <div className="review-content">
                        <p>{item.content}</p>
                      </div>
                      {/*  End .review-content */}

                      {/*  End .review-action */}
                    </div>
                    {/*  End .col-auto */}
                  </div>
                  {/*  End .row */}
                </div>
              </>
            ))}

          {/*  End .review */}

          {/*  End .review */}
        </div>
        {/*  End .reviews */}
        <br />
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link page-link-prev"
                href="#"
                aria-label="Previous"
                tabIndex={-1}
                aria-disabled={true}
              >
                <span aria-hidden="true">
                  <i className="icon-long-arrow-left"></i>
                </span>
                Prev
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item-total">of 6</li>
            <li className="page-item">
              <a
                className="page-link page-link-next"
                href="#"
                aria-label="Next"
              >
                Next{" "}
                <span aria-hidden="true">
                  <i className="icon-long-arrow-right"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
