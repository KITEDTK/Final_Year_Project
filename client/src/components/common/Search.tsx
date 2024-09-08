interface props {
  searchText: (text: string) => void;
}
export const Search: React.FC<props> = ({searchText}) => {
  const handleOnChangeSearchText = (text: string) =>{
    searchText(text);
  }
  return (
    <>
      <div className="header-left" >
        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
          <a href="#" className="search-toggle" role="button">
            <i className="icon-search"></i>
          </a>
          <form>
            <div className="header-search-wrapper search-wrapper-wide">
              <label htmlFor="q" className="sr-only">
                Search
              </label>
              <button className="btn btn-primary" type="button">
                <i className="icon-search"></i>
              </button>
              <input
                type="search"
                className="form-control"
                name="q"
                id="q"
                placeholder="Tìm kiếm theo tên sản phẩm ..."
                required
                onChange={(event) => handleOnChangeSearchText(event.target.value)}
              />
            </div>
            {/* End .header-search-wrapper */}
          </form>

          {/* End .cart-product */}
        </div>
        {/* End .header-search */}
      </div>
    </>
  );
};
