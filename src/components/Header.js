function Header() {
  return (
    <header className="hero is-small">
      <div className="tile is-ancestor has-text-centered p-0">
        <div className={`tile is-1`}>
            <p className="title has-text-info-dark">hello</p>
        </div>
          <div className={`tile is-10`}>
              <p className="sub-title has-text-link ">hello</p>
          </div>
          <div className={`tile is-1`}>
              <p className="sub-title has-text-link">hi</p>
          </div>
      </div>
    </header>
  );
}

export default Header;