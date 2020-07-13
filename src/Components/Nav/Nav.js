import React from "react";
import { USER, PIN, SEARCH, CART, ORANGE } from "config";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownbrand: false,
      dropdownbest: false,
      dropdownskin: false,
      dropdownmakeup: false,
      dropdownhomme: false,
      dropdownevent: false,
    };
  }

  // handleDropDown = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: ![value] });
  // };

  handleBrandDropDown = () => {
    this.setState({ dropdownbrand: !this.state.dropdownbrand });
  };

  handleBestDropDown = () => {
    this.setState({ dropdownbest: !this.state.dropdownbest });
  };

  handleSkinDropDown = () => {
    this.setState({ dropdownskin: !this.state.dropdownskin });
  };

  handleMakeUpDropDown = () => {
    this.setState({ dropdownmakeup: !this.state.dropdownmakeup });
  };

  handleHommeDropDown = () => {
    this.setState({ dropdownhomme: !this.state.dropdownhomme });
  };

  handleEventDropDown = () => {
    this.setState({ dropdownevent: !this.state.dropdownevent });
  };

  render() {
    const {
      dropdownbrand,
      dropdownbest,
      dropdownskin,
      dropdownmakeup,
      dropdownhomme,
      dropdownevent,
    } = this.state;

    return (
      <div className="Nav">
        <div
          className={
            dropdownbrand ||
            dropdownbest ||
            dropdownskin ||
            dropdownmakeup ||
            dropdownhomme ||
            dropdownevent
              ? "overlay activate"
              : "overlay"
          }
        />
        <div className="container">
          <div className="logo">
            <img
              src="https://www.laneige.com/kr/ko/assets/image/a/laneige-logo.svg"
              alt="라네즈"
            />
          </div>
          <div className="iconsection">
            <div className="icons">
              <img src={CART} alt="Laneige" />
              <img src={USER} alt="Laneige" />
              <img src={PIN} alt="Laneige" />
              <img src={SEARCH} alt="Laneige" />
            </div>
          </div>
          <ul className="navBar">
            <li
              className="brand"
              name="dropdownbrand"
              onMouseEnter={this.handleDropDown}
              onMouseLeave={this.handleDropDown}
            >
              <span>브랜드</span>
              <div className="brandUnderBar">
                <div
                  className={dropdownbrand ? "blackBar active" : "blackBar"}
                ></div>
              </div>
              <div
                className={
                  dropdownbrand ? "brandDropDown show" : "brandDropDown hide"
                }
              >
                <ul className="brandSubSections">
                  <li>리필 미 사회공헌 캠페인</li>
                  <li>루미너스 라이브</li>
                  <li>베스트셀러</li>
                </ul>
              </div>
            </li>
            <li
              className="best"
              name="dropdownbest"
              onMouseEnter={this.handleDropDown}
              onMouseLeave={this.handleDropDown}
            >
              <span>베스트 & 신상품</span>
              <div className="bestUnderBar">
                <div
                  className={dropdownbest ? "blackBar active" : "blackBar"}
                ></div>
              </div>
              <div
                className={
                  dropdownbest ? "brandDropDown show" : "brandDropDown hide"
                }
              >
                <ul className="bestSubSections">
                  <li>신상품</li>
                  <li>어워드 위너</li>
                  <li>베스트셀러</li>
                </ul>
              </div>
            </li>
            <li
              className="skinCare"
              name="dropdownskin"
              onMouseEnter={this.handleDropDown}
              onMouseLeave={this.handleDropDown}
            >
              <span>스킨케어</span>
              <div className="skinUnderBar">
                <div
                  className={dropdownskin ? "blackBar active" : "blackBar"}
                ></div>
              </div>
              <div
                className={
                  dropdownskin ? "skinDropDown show" : "skinDropDown hide"
                }
              >
                <div className="wholeColumn">
                  <div className="seeAll">전체보기</div>
                  <ul className="firstColumn">
                    <div className="underline">
                      <li>유형별</li>
                    </div>
                    <li>전체보기</li>
                    <li>클렌징</li>
                    <li>스킨/미스트</li>
                    <li>로션/에멀젼</li>
                    <li>세럼/에센스</li>
                    <li>젤/크림</li>
                    <li>미스크/팩</li>
                    <li>아이케어</li>
                    <li>선케어</li>
                    <li>립케어</li>
                    <li>키프트세트</li>
                  </ul>
                  <ul className="secondColumn">
                    <div className="underline">
                      <li>고민별</li>
                    </div>
                    <li>전체보기</li>
                    <li>밸런싱</li>
                    <li>수분/보습</li>
                    <li>민감/진정</li>
                    <li>브라이트닝</li>
                    <li>안티에이징</li>
                    <li>피지/모공</li>
                    <li>자외선차단</li>
                  </ul>
                  <ul className="thirdColumn">
                    <div className="underline">
                      <li>라인별</li>
                    </div>
                    <li>전체보기</li>
                    <li>래디언-C</li>
                    <li>클리어-C</li>
                    <li>베이직케어</li>
                    <li>워터뱅크</li>
                    <li>포커스 액티브 앰플</li>
                    <li>퍼펙트리뉴</li>
                    <li>타임프리즈</li>
                    <li>슬리핑케어</li>
                    <li>프레시카밍</li>
                    <li>크림 스킨</li>
                    <li>화이트듀</li>
                    <li>기타</li>
                  </ul>
                  <ul className="fourthColumn">
                    <li>NEW ARRIVAL</li>
                    <li>래디언스-C 크림</li>
                    <img src={ORANGE} alt="Laneige" />
                  </ul>
                </div>
              </div>
            </li>
            <li
              className="makeUp"
              name="dropdownmakeup"
              onMouseEnter={this.handleDropDown}
              onMouseLeave={this.handleDropDown}
            >
              <span>메이크업</span>
              <div className="makeUpUnderBar">
                <div
                  className={dropdownmakeup ? "blackBar active" : "blackBar"}
                ></div>
              </div>
              <div
                className={
                  dropdownmakeup ? "makeUpDropDown show" : "makeUpDropDown hide"
                }
              >
                <div className="wholeColumn">
                  <div className="seeAll">전체보기</div>
                  <div className="firstColumn">
                    <div className="underline">
                      <li>페이스</li>
                    </div>
                    <li>전체보기</li>
                    <li>프라이머/메이크업베이스</li>
                    <li>파운데이션/컨실러</li>
                    <li>쿠션</li>
                    <li>하이라이터/블러셔</li>
                  </div>
                  <div className="secondColumn">
                    <div className="underline">
                      <li>아이</li>
                    </div>
                    <li>아이브로우</li>
                    <li>아이라이너</li>
                    <li>소도구</li>
                  </div>
                  <div className="thirdColumn">
                    <div className="underline">
                      <li>립</li>
                    </div>
                    <li>전체보기</li>
                    <li>립스틱</li>
                    <li>립틴트-C</li>
                    <li>립밤</li>
                  </div>
                  <div className="fourthColumn">
                    <li>NEW ARRIVAL</li>
                    <li>네오 쿠션_매트</li>
                    <img
                      src="https://www.laneige.com/kr/ko/makeup/__icsFiles/metafile/2020/06/18/20201617_neo_cushion_foundation_category_banner.png"
                      alt="Laneige"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li
              className="homme"
              name="dropdownhomme"
              onMouseEnter={this.handleDropDown}
              onMouseLeave={this.handleDropDown}
            >
              <span>옴므</span>
              <div className="hommeUnderBar">
                <div
                  className={dropdownhomme ? "blackBar active" : "blackBar"}
                ></div>
              </div>
              <div
                className={
                  dropdownhomme ? "hommeDropDown show" : "hommeDropDown hide"
                }
              >
                <div className="wholeColumn">
                  <div className="seeAll">전체보기</div>
                  <ul className="firstColumn">
                    <div className="underline">
                      <li>유형별</li>
                    </div>
                    <li>전체보기</li>
                    <li>클렌징</li>
                    <li>스킨/미스트</li>
                    <li>로션/에멀젼</li>
                    <li>크림</li>
                    <li>선케어</li>
                    <li>BB</li>
                    <li>기프트세트</li>
                  </ul>
                  <ul className="secondColumn">
                    <div className="underline">
                      <li>고민별</li>
                    </div>
                    <li>전체보기</li>
                    <li> 수분/보습</li>
                    <li>피지/모공</li>
                    <li>주름/탄력/보습</li>
                    <li>자외선차단</li>
                  </ul>
                  <ul className="thirdColumn">
                    <div className="underline">
                      <li>라인별</li>
                    </div>
                    <li>전체보기</li>
                    <li>액티브워터</li>
                    <li>블루에너지</li>
                    <li>오일컨트롤</li>
                    <li>워터뱅크</li>
                    <li>크림 스킨</li>
                    <li>기타</li>
                  </ul>
                  <ul className="fourthColumn">
                    <li>NEW ARRIVAL</li>
                    <li>블루에너지 EX 2종 세트</li>
                    <img
                      src="https://www.laneige.com/kr/ko/homme/__icsFiles/metafile/2020/05/13/global-banner-homme.jpg"
                      alt="Laneige"
                    />
                  </ul>
                </div>
              </div>
            </li>
            <li
              className="event"
              name="dropdownevent"
              onMouseEnter={this.handleDropDown}
              onMouseLeave={this.handleDropDown}
            >
              <span>이벤트</span>
              <div className="eventUnderBar">
                <div
                  className={dropdownevent ? "blackBar active" : "blackBar"}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;