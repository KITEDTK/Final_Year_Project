import { SingleComment } from "../../features/comments/commentsTypes";
import { fetchAddComment } from "../../features/products/clothesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
interface Props {
    commentInfo : SingleComment[];
}
export const CommentSingleCloth: React.FC<Props> = ({commentInfo}) => {
    console.log(commentInfo);
    const { clothesId } = useParams<string>();
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state)=> state.auth.auth);
    const handleOnClickAddComment = () =>{
        if(auth && clothesId){
            dispatch(fetchAddComment({clothesId: clothesId, content: '123', userId:auth.id}));
        }
    }
  return (
    <>
      <div
        className="tab-pane fade"
        id="product-review-tab"
        role="tabpanel"
        aria-labelledby="product-review-link"
      >
        <textarea
            className="form-control"
            cols={30}
            rows={1}
            placeholder="Notes about your order, e.g. special notes for delivery"
          ></textarea>
          <button onClick={()=>handleOnClickAddComment()}>thêm comment</button>
        <div className="reviews">
          <h3>Reviews (2)</h3>
          <div className="review">
            <div className="row no-gutters">
              <div className="col-auto">
                <h4>
                  <a href="#">Samanta J.</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "80%" }}></div>
                    {/*  End .ratings-val */}
                  </div>
                  {/*  End .ratings */}
                </div>
                {/*  End .rating-container */}
                <span className="review-date">6 days ago</span>
              </div>
              {/*  End .col */}
              <div className="col">
                <h4>Good, perfect size</h4>
                <div className="review-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus cum dolores assumenda asperiores facilis porro
                    reprehenderit animi culpa atque blanditiis commodi
                    perspiciatis doloremque, possimus, explicabo, autem fugit
                    beatae quae voluptas!
                  </p>
                </div>
                {/*  End .review-content */}

                <div className="review-action">
                  <a href="#">
                    <i className="icon-thumbs-up"></i>Helpful (2)
                  </a>
                  <a href="#">
                    <i className="icon-thumbs-down"></i>Unhelpful (0)
                  </a>
                </div>
                {/*  End .review-action */}
              </div>
              {/*  End .col-auto */}
            </div>
            {/*  End .row */}
          </div>
          {/*  End .review */}

          <div className="review">
            <div className="row no-gutters">
              <div className="col-auto">
                <h4>
                  <a href="#">John Doe</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: "100%" }}
                    ></div>
                    {/*  End .ratings-val */}
                  </div>
                  {/*  End .ratings */}
                </div>
                {/*  End .rating-container */}
                <span className="review-date">5 days ago</span>
              </div>
              {/*  End .col */}
              <div className="col">
                <h4>Very good</h4>

                <div className="review-content">
                  <p>
                    Sed, molestias, tempore? Ex dolor esse iure hic veniam
                    laborum blanditiis laudantium iste amet. Cum non voluptate
                    eos enim, ab cumque nam, modi, quas iure illum repellendus,
                    blanditiis perspiciatis beatae!
                  </p>
                </div>
                {/*  End .review-content */}

                <div className="review-action">
                  <a href="#">
                    <i className="icon-thumbs-up"></i>Helpful (0)
                  </a>
                  <a href="#">
                    <i className="icon-thumbs-down"></i>Unhelpful (0)
                  </a>
                </div>
                {/*  End .review-action */}
              </div>
              {/*  End .col-auto */}
            </div>
            {/*  End .row */}
          </div>
          {/*  End .review */}
        </div>
        {/*  End .reviews */}
      </div>
    </>
  );
};
