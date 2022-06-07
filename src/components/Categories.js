import { Container } from "@mui/system";

function Categories() {

  return (
    <div className='categories'>
      <Container className="is-max-widescreen" id="categories">
        <section className="section is-small no-padding-vertical">
          {
            <Container className="is-max-widescreen">
              <div className="tile is-ancestor has-text-center">
                <div className="tile is-3">
                    <p className="title"></p>
                </div>
                <div className="tile">
                    <p className="sub-title">gender</p>
                </div>
                <div className="tile">
                    <p className="sub-title">Appears In</p>
                </div>
                <div className="tile">
                    <p className="sub-title">genre</p>
                </div>
                <div className="tile">
                    <p className="sub-title">platform</p>
                </div>
                <div className="tile">
                    <p className="sub-title">role</p>
                </div>
                <div className="tile">
                    <p className="sub-title">year</p>
                </div>
              </div>
            </Container>
          }
        </section>
      </Container>
    </div>
  );
}

export default Categories;