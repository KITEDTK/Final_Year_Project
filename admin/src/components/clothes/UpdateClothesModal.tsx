import React from "react";

interface props {
  clothesId: string;
}
export const UpdateClothesModal: React.FC<props> = ({ clothesId }) => {
  return (
    <>
      <ul className="nav nav-tabs" id="custom-content-below-tab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="custom-content-below-home-tab"
            data-toggle="pill"
            href="#custom-content-below-home"
            role="tab"
            aria-controls="custom-content-below-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-content-below-profile-tab"
            data-toggle="pill"
            href="#custom-content-below-profile"
            role="tab"
            aria-controls="custom-content-below-profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-content-below-messages-tab"
            data-toggle="pill"
            href="#custom-content-below-messages"
            role="tab"
            aria-controls="custom-content-below-messages"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-content-below-settings-tab"
            data-toggle="pill"
            href="#custom-content-below-settings"
            role="tab"
            aria-controls="custom-content-below-settings"
            aria-selected="false"
          >
            Settings
          </a>
        </li>
      </ul>
      <div className="tab-content" id="custom-content-below-tabContent">
        <div
          className="tab-pane fade show active"
          id="custom-content-below-home"
          role="tabpanel"
          aria-labelledby="custom-content-below-home-tab"
        >
          <div className="card card-default">
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Text</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Text Disabled</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Textarea</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter ..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Textarea Disabled</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter ..."
                        disabled
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputSuccess">
                    <i className="fas fa-check"></i> Input with success
                  </label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="inputSuccess"
                    placeholder="Enter ..."
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputWarning">
                    <i className="far fa-bell"></i> Input with warning
                  </label>
                  <input
                    type="text"
                    className="form-control is-warning"
                    id="inputWarning"
                    placeholder="Enter ..."
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputError">
                    <i className="far fa-times-circle"></i> Input with error
                  </label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="inputError"
                    placeholder="Enter ..."
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Checkbox</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked
                        />
                        <label className="form-check-label">
                          Checkbox checked
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          disabled
                        />
                        <label className="form-check-label">
                          Checkbox disabled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio1"
                        />
                        <label className="form-check-label">Radio</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio1"
                          checked
                        />
                        <label className="form-check-label">
                          Radio checked
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          disabled
                        />
                        <label className="form-check-label">
                          Radio disabled
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Select</label>
                      <select className="form-control">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Select Disabled</label>
                      <select className="form-control" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Select Multiple</label>
                      <select multiple className="form-control">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Select Multiple Disabled</label>
                      <select multiple className="form-control" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="custom-content-below-profile"
          role="tabpanel"
          aria-labelledby="custom-content-below-profile-tab"
        >
          Mauris tincidunt mi at erat gravida, eget tristique urna bibendum.
          Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula
          placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus,
          elementum sit amet ultricies at, posuere nec nunc. Nunc euismod
          pellentesque diam.
        </div>
        <div
          className="tab-pane fade"
          id="custom-content-below-messages"
          role="tabpanel"
          aria-labelledby="custom-content-below-messages-tab"
        >
          Morbi turpis dolor, vulputate vitae felis non, tincidunt congue
          mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus
          faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac
          tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum.
          Suspendisse ut velit condimentum, mattis urna a, malesuada nunc.
          Curabitur eleifend facilisis velit finibus tristique. Nam vulputate,
          eros non luctus efficitur, ipsum odio volutpat massa, sit amet
          sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida
          fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel
          metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
        </div>
        <div
          className="tab-pane fade"
          id="custom-content-below-settings"
          role="tabpanel"
          aria-labelledby="custom-content-below-settings-tab"
        >
          Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque
          magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget
          blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod
          molestie tristique. Vestibulum consectetur dolor a vestibulum
          pharetra. Donec interdum placerat urna nec pharetra. Etiam eget
          dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis
          ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent
          imperdiet accumsan ex sit amet facilisis.
        </div>
      </div>
    </>
  );
};
