import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import AddToCartPopup from '../UI/AddToCartPopup';
import { Link } from 'react-router-dom';

const AddCart: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <>

      <div className="container">
        <div className="beuget mt-2">
          <Link to="/" className="beuget-btn">Home</Link>
          <i className="fa fa-circle"></i> File
          <i className="fa fa-circle"></i> Sites Tamplet
        
        </div>
      </div>
      <div className="container-fluid pt-2 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-down" data-wow-duration="2s"
              data-aos-anchor-placement="top-bottom">
              <div className="item-preview live-preview-btn--blue -preview-live ">
                <div className="imge-live">
                  <img style={{ width: '100%' }} className="p-1" src="https://market-resized.envatousercontent.com/themeforest.net/files/272422711/01_preview_uren.__large_preview.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=000523de8b755935ea01b6505448b6a839fb6ce22bbb029db52f94cc79b235a2" />
                  <div className="live-icon">
                    <svg width="60" height="60" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0V13H17V0H0ZM2 11V2H5V11H2ZM7 11V7.5H10V11H7ZM15 11H12V7.5H15V11ZM7 5.5V2H15V5.5H7Z" fill="white" />
                    </svg>
                  </div>
                  <div className="lve-btn">
                    <button className="btn btn-btnCss rounded-2 border-0 three butn butn__new w-40">
                      Live Preview <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V13H17V0H0ZM2 11V2H5V11H2ZM7 11V7.5H10V11H7ZM15 11H12V7.5H15V11ZM7 5.5V2H15V5.5H7Z" fill="white" />
                      </svg></button>

                  </div>
                </div>
                <div className="accodient-inner-detail mt-4">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active btn btn-btnCss rounded-2 border-0 three butn butn__new" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Screenshot</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Description</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Review</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <p className="mt-4"> Elipso – Adobe XD Template - Corporate Adobe XD Screenshots Elipso is a modern Corporate Adobe XD Template. Ideal for the SEO, Creative Digital Agency, Apps, Marketing, Consulting, Start-Up, Tech Business, Financial Companies, and related any business website.</p>
                      <p className="mt-4"> Elipso – Adobe XD Template - Corporate Adobe XD Screenshots Elipso is a modern Corporate Adobe XD Template. Ideal for the SEO, Creative Digital Agency, Apps, Marketing, Consulting, Start-Up, Tech Business, Financial Companies, and related any business website.</p>
                      <p className="mt-4"> Elipso – Adobe XD Template - Corporate Adobe XD Screenshots Elipso is a modern Corporate Adobe XD Template. Ideal for the SEO, Creative Digital Agency, Apps, Marketing, Consulting, Start-Up, Tech Business, Financial Companies, and related any business website.</p>
                      <p className="mt-4"> Elipso – Adobe XD Template - Corporate Adobe XD Screenshots Elipso is a modern Corporate Adobe XD Template. Ideal for the SEO, Creative Digital Agency, Apps, Marketing, Consulting, Start-Up, Tech Business, Financial Companies, and related any business website.</p>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <p> Elipso – Adobe XD Template - Corporate Adobe XD Screenshots Elipso is a modern Corporate Adobe XD Template. Ideal for the SEO, Creative Digital Agency, Apps, Marketing, Consulting, Start-Up, Tech Business, Financial Companies, and related any business website.</p>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <p> Elipso – Adobe XD Template - Corporate Adobe XD Screenshots Elipso is a modern Corporate Adobe XD Template. Ideal for the SEO, Creative Digital Agency, Apps, Marketing, Consulting, Start-Up, Tech Business, Financial Companies, and related any business website.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <img src="https://market-resized.envatousercontent.com/themeforest.net/files/288457789/00-Preview.__large_preview.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=cde3aa0a6b1cfef08018440ba863ad24de86f7b89e5616100b6886c4227881d0" />
                </div>
              </div>
            </div>


            <div className="col-lg-4" data-aos="fade-left" data-wow-duration="2s"
              data-aos-anchor-placement="top-bottom">
              <div className="add-container">
                <h5>WordPress & eComme...</h5>
                <small className="font-italic">by Developer in Business</small>
                <div className="review-star">
                  <small>Reviews</small>
                  <div className="start-rating"></div>
                  <svg width="21" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.015 0.995761L14.371 8.30727L21.7322 8.3966C22.3657 8.40433 22.6279 9.25041 22.1198 9.64639L16.2139 14.2539L18.4076 21.6204C18.5961 22.2543 17.9102 22.7765 17.3931 22.3926L11.3881 17.9285L5.38224 22.3917C4.86598 22.7757 4.17927 22.2526 4.36775 21.6195L6.56145 14.253L0.655569 9.64553C0.147501 9.24955 0.40973 8.40347 1.04318 8.39574L8.40443 8.30641L10.7604 0.994902C10.9636 0.36614 11.8126 0.36614 12.015 0.995761Z" fill="#F2B603" />
                  </svg>

                  <svg width="21" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.015 0.995761L14.371 8.30727L21.7322 8.3966C22.3657 8.40433 22.6279 9.25041 22.1198 9.64639L16.2139 14.2539L18.4076 21.6204C18.5961 22.2543 17.9102 22.7765 17.3931 22.3926L11.3881 17.9285L5.38224 22.3917C4.86598 22.7757 4.17927 22.2526 4.36775 21.6195L6.56145 14.253L0.655569 9.64553C0.147501 9.24955 0.40973 8.40347 1.04318 8.39574L8.40443 8.30641L10.7604 0.994902C10.9636 0.36614 11.8126 0.36614 12.015 0.995761Z" fill="#F2B603" />
                  </svg>

                  <svg width="21" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.015 0.995761L14.371 8.30727L21.7322 8.3966C22.3657 8.40433 22.6279 9.25041 22.1198 9.64639L16.2139 14.2539L18.4076 21.6204C18.5961 22.2543 17.9102 22.7765 17.3931 22.3926L11.3881 17.9285L5.38224 22.3917C4.86598 22.7757 4.17927 22.2526 4.36775 21.6195L6.56145 14.253L0.655569 9.64553C0.147501 9.24955 0.40973 8.40347 1.04318 8.39574L8.40443 8.30641L10.7604 0.994902C10.9636 0.36614 11.8126 0.36614 12.015 0.995761Z" fill="#F2B603" />
                  </svg>

                  <svg width="21" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.015 0.995761L14.371 8.30727L21.7322 8.3966C22.3657 8.40433 22.6279 9.25041 22.1198 9.64639L16.2139 14.2539L18.4076 21.6204C18.5961 22.2543 17.9102 22.7765 17.3931 22.3926L11.3881 17.9285L5.38224 22.3917C4.86598 22.7757 4.17927 22.2526 4.36775 21.6195L6.56145 14.253L0.655569 9.64553C0.147501 9.24955 0.40973 8.40347 1.04318 8.39574L8.40443 8.30641L10.7604 0.994902C10.9636 0.36614 11.8126 0.36614 12.015 0.995761Z" fill="#F2B603" />
                  </svg>

                  <svg width="21" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.015 0.995761L14.371 8.30727L21.7322 8.3966C22.3657 8.40433 22.6279 9.25041 22.1198 9.64639L16.2139 14.2539L18.4076 21.6204C18.5961 22.2543 17.9102 22.7765 17.3931 22.3926L11.3881 17.9285L5.38224 22.3917C4.86598 22.7757 4.17927 22.2526 4.36775 21.6195L6.56145 14.253L0.655569 9.64553C0.147501 9.24955 0.40973 8.40347 1.04318 8.39574L8.40443 8.30641L10.7604 0.994902C10.9636 0.36614 11.8126 0.36614 12.015 0.995761Z" fill="#F2B603" />
                  </svg>

                  <small>(26.2k)</small>
                </div>
                <hr />

                <div className="add-cart-btn text-center">
                  <button className="btn btn-btnCss rounded-2 border-0 three butn butn__new w-100" onClick={() => setIsOpen(true)} >
                    <span>  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.39649 13.7054C7.21723 13.709 7.04237 13.6497 6.90235 13.5377C6.76234 13.4257 6.66604 13.2681 6.63022 13.0924L4.83713 4.05799C4.73269 3.53734 4.45123 3.06889 4.04054 2.73225C3.62986 2.3956 3.1153 2.21151 2.58427 2.21127H1.26628C1.06305 2.21127 0.868142 2.13053 0.724437 1.98683C0.580733 1.84312 0.5 1.64822 0.5 1.44499C0.5 1.24176 0.580733 1.04685 0.724437 0.903148C0.868142 0.759444 1.06305 0.678711 1.26628 0.678711H2.58427C3.46753 0.678531 4.32371 0.983523 5.00793 1.54207C5.69215 2.10062 6.16238 2.87841 6.33903 3.74382L8.16277 12.7859C8.18503 12.8867 8.18671 12.9909 8.16769 13.0923C8.14867 13.1938 8.10936 13.2903 8.05211 13.3762C7.99486 13.4621 7.92085 13.5355 7.83453 13.5921C7.7482 13.6487 7.65134 13.6872 7.54975 13.7054H7.39649Z" fill="white" />
                      <path d="M8.16298 19.0693H6.7377C5.92498 19.0643 5.1452 18.7475 4.55919 18.1844C3.97319 17.6212 3.62567 16.8547 3.58832 16.0428C3.55097 15.2309 3.82663 14.4357 4.35846 13.8211C4.89028 13.2065 5.63769 12.8195 6.44652 12.7399L20.5537 11.4602L21.7874 5.27633H5.86415C5.66092 5.27633 5.46601 5.1956 5.32231 5.05189C5.1786 4.90819 5.09787 4.71328 5.09787 4.51005C5.09787 4.30682 5.1786 4.11192 5.32231 3.96821C5.46601 3.82451 5.66092 3.74377 5.86415 3.74377H22.7222C22.8354 3.74452 22.947 3.77034 23.0491 3.81936C23.1511 3.86838 23.241 3.93939 23.3123 4.0273C23.3872 4.11348 23.4419 4.21531 23.4724 4.32536C23.5029 4.4354 23.5084 4.55086 23.4885 4.66331L21.956 12.3261C21.9236 12.4881 21.8397 12.6354 21.7168 12.7459C21.5939 12.8563 21.4386 12.9241 21.274 12.9391L6.58445 14.2724C6.15157 14.2927 5.74449 14.4842 5.45277 14.8047C5.16105 15.1251 5.00858 15.5483 5.0289 15.9812C5.04923 16.4141 5.24068 16.8212 5.56114 17.1129C5.8816 17.4046 6.30482 17.5571 6.7377 17.5368H8.16298C8.36621 17.5368 8.56111 17.6175 8.70482 17.7612C8.84852 17.9049 8.92925 18.0998 8.92925 18.303C8.92925 18.5063 8.84852 18.7012 8.70482 18.8449C8.56111 18.9886 8.36621 19.0693 8.16298 19.0693Z" fill="white" />
                      <path d="M19.6569 21.3683C19.0507 21.3683 18.4581 21.1885 17.954 20.8517C17.45 20.5149 17.0571 20.0362 16.8251 19.4761C16.5931 18.916 16.5324 18.2997 16.6507 17.7052C16.769 17.1106 17.0609 16.5645 17.4895 16.1358C17.9182 15.7071 18.4644 15.4152 19.0589 15.2969C19.6535 15.1787 20.2698 15.2394 20.8299 15.4714C21.3899 15.7033 21.8687 16.0962 22.2055 16.6003C22.5423 17.1043 22.722 17.6969 22.722 18.3031C22.722 19.1161 22.3991 19.8957 21.8243 20.4705C21.2494 21.0453 20.4698 21.3683 19.6569 21.3683ZM19.6569 16.7706C19.3538 16.7706 19.0575 16.8605 18.8055 17.0289C18.5534 17.1973 18.357 17.4366 18.241 17.7167C18.125 17.9967 18.0947 18.3048 18.1538 18.6021C18.2129 18.8994 18.3589 19.1725 18.5732 19.3868C18.7876 19.6012 19.0606 19.7471 19.3579 19.8063C19.6552 19.8654 19.9634 19.835 20.2434 19.719C20.5234 19.603 20.7628 19.4066 20.9312 19.1546C21.0996 18.9026 21.1895 18.6063 21.1895 18.3031C21.1895 17.8967 21.028 17.5069 20.7406 17.2195C20.4532 16.9321 20.0634 16.7706 19.6569 16.7706Z" fill="white" />
                      <path d="M10.4616 21.3683C9.85537 21.3683 9.26277 21.1885 8.75871 20.8517C8.25466 20.5149 7.86179 20.0362 7.6298 19.4761C7.39781 18.916 7.33711 18.2997 7.45538 17.7052C7.57365 17.1106 7.86557 16.5645 8.29424 16.1358C8.7229 15.7071 9.26905 15.4152 9.86362 15.2969C10.4582 15.1787 11.0745 15.2394 11.6346 15.4714C12.1946 15.7033 12.6733 16.0962 13.0101 16.6003C13.3469 17.1043 13.5267 17.6969 13.5267 18.3031C13.5267 19.1161 13.2038 19.8957 12.629 20.4705C12.0541 21.0453 11.2745 21.3683 10.4616 21.3683ZM10.4616 16.7706C10.1585 16.7706 9.86218 16.8605 9.61015 17.0289C9.35813 17.1973 9.16169 17.4366 9.0457 17.7167C8.9297 17.9967 8.89935 18.3048 8.95849 18.6021C9.01762 18.8994 9.16358 19.1725 9.37792 19.3868C9.59225 19.6012 9.86532 19.7471 10.1626 19.8063C10.4599 19.8654 10.768 19.835 11.0481 19.719C11.3281 19.603 11.5675 19.4066 11.7359 19.1546C11.9043 18.9026 11.9941 18.6063 11.9941 18.3031C11.9941 17.8967 11.8327 17.5069 11.5453 17.2195C11.2579 16.9321 10.8681 16.7706 10.4616 16.7706Z" fill="white" />
                      <path d="M17.3581 19.0694H12.7604C12.5572 19.0694 12.3623 18.9887 12.2186 18.845C12.0749 18.7013 11.9941 18.5064 11.9941 18.3031C11.9941 18.0999 12.0749 17.905 12.2186 17.7613C12.3623 17.6176 12.5572 17.5369 12.7604 17.5369H17.3581C17.5613 17.5369 17.7562 17.6176 17.8999 17.7613C18.0436 17.905 18.1244 18.0999 18.1244 18.3031C18.1244 18.5064 18.0436 18.7013 17.8999 18.845C17.7562 18.9887 17.5613 19.0694 17.3581 19.0694Z" fill="white" />
                    </svg> Add to Cart</span></button>
                  <span className="fees_head_title">
                    Price is in Us Dollar and excludes tax and handling fees
                  </span>
                </div>

              </div>
              <div className="add-container mt-4">
                <table className="meta-attributes__table" cellSpacing="0" border={0}>
                  <tbody>
                    <tr className="js-condense-item-page-info-panel--last_update">
                      <td className="meta-attributes__attr-name">Last Update</td>
                      <td className="meta-attributes__attr-detail">
                        <time className="updated" dateTime="2020-05-05T22:56:13+10:00">  5 May 2020</time>
                      </td>
                    </tr>
                    <tr>
                      <td className="meta-attributes__attr-name">Graphics Files Included</td>
                      <td className="meta-attributes__attr-detail">
                        <a rel="nofollow" className="js-item-sidebar-meta-attributes" href="">Adobe XD</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="meta-attributes__attr-name">Software Version</td>
                      <td className="meta-attributes__attr-detail">
                        <a rel="nofollow" className="js-item-sidebar-meta-attributes" href="">Adobe XD CC</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="meta-attributes__attr-name">Tags</td>
                      <td>
                        <span className="meta-attributes__attr-tags">
                          <a title="agency" rel="nofollow" href="">agency</a>, <a title="blog" rel="nofollow"
                            href="">blog</a>, <a title="business" rel="nofollow" href="">business</a>,
                          <a title="corporate" rel="nofollow" href="">corporate</a>,<br />
                          <a title="creative" rel="nofollow" href="">creative</a>,
                          <a title="digital" rel="nofollow" href="">digital</a>,
                          <a title="gallery" rel="nofollow" href="">gallery</a>,<br />
                          <a title="gradient" rel="nofollow" href="">gradient</a>,
                          <a title="modern" rel="nofollow" href="">modern</a>,
                          <a title="portfolio" rel="nofollow" href="">portfolio</a>,<br />
                          <a title="retail" rel="nofollow" href="">retail</a>,
                          <a title="rounded" rel="nofollow" href="">rounded</a>,
                          <a title="studio" rel="nofollow" href="">studio</a>,<br />
                          <a title="template" rel="nofollow" href="">template</a>,
                          <a title="violet" rel="nofollow" href="">violet</a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="meta-attributes__attr-name">Created</td>
                      <td className="meta-attributes__attr-detail">
                        <span data-nosnippet=""> 5 years ago </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        isOpen && <AddToCartPopup show={isOpen} onClose={() => setIsOpen(false)} />
      }
    </>
  )
}

export default AddCart;
