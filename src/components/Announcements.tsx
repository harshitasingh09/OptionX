import React from 'react'
import logo from '../assets/img/logo.png'

const Announcements: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-white shadow-sm mb-4">
                <div className="container d-flex justify-content-between align-items-center">
                    <img src={logo} alt="logo" />
                        <div>
                            <a href="#" className="btn btn-danger me-2">Be a creator for OptionsX</a>
                            <a href="#" className="text-dark">Already an Creator? Sign in</a>
                        </div>
                </div>
            </nav>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="announcement-box">
                            <h4 className="thread-title">OptionsX Market downtime: <span className="text-danger">November 9, 2024</span>
                            </h4>
                            <p className="meta-text">📢 OptionsX Announcements</p>
                            <hr />
                                <div className="sam_data bg-light-samdata p-4">
                                    <div className="mb-2"><strong>sam</strong> — OptionsX Engineering Team • <span className="timestamp">Nov
                                        7</span></div>
                                    <p>Hello everyone! Wednesday morning has been set aside for some maintenance by the OptionsX
                                        Market team. Here are the specifics:</p>
                                    <ul>
                                        <li><strong>Starting time:</strong> 9 AM (AEST), Wednesday November 7</li>
                                        <li><strong>Duration:</strong> Less than 2 hour</li>
                                    </ul>

                                    <p><strong>Below sites and services are affected:</strong></p>
                                    <ul>
                                        <li>ThemeForest</li>
                                        <li>CodeCanyon</li>
                                        <li>VideoHive</li>
                                        <li>AudioJungle</li>
                                        <li>GraphicRiver</li>
                                        <li>PhotoDune</li>
                                        <li>3DOcean</li>
                                    </ul>

                                    <p>The Market Engineers will complete essential database maintenance while aiming to keep the
                                        total outage to less than 1 hour. All Market sites will be offline temporarily during this
                                        time, and the API will also be unavailable.</p>

                                    <p>No other OptionsX sites will be affected by this maintenance work.</p>

                                    <div className="reaction-stats contectCss mt-2 me-2 text- d-flex gap-2 justify-content-end">
                                        <span> 12 <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.24 8.75002C1.84461 8.35725 1.53134 7.88971 1.31845 7.37466C1.10556 6.8596 0.997308 6.30733 1 5.75002C1 4.62285 1.44777 3.54184 2.2448 2.74481C3.04183 1.94778 4.12283 1.50002 5.25 1.50002C6.83 1.50002 8.21 2.36002 8.94 3.64002H10.06C10.4311 2.98908 10.9681 2.44811 11.6163 2.07219C12.2645 1.69628 13.0007 1.49886 13.75 1.50002C14.8772 1.50002 15.9582 1.94778 16.7552 2.74481C17.5522 3.54184 18 4.62285 18 5.75002C18 6.92002 17.5 8.00002 16.76 8.75002L9.5 16L2.24 8.75002ZM17.46 9.46002C18.41 8.50002 19 7.20002 19 5.75002C19 4.35763 18.4469 3.02227 17.4623 2.03771C16.4777 1.05314 15.1424 0.500018 13.75 0.500018C12 0.500018 10.45 1.35002 9.5 2.67002C9.0151 1.99652 8.37661 1.44834 7.63748 1.07095C6.89835 0.693557 6.0799 0.497836 5.25 0.500018C3.85761 0.500018 2.52226 1.05314 1.53769 2.03771C0.553123 3.02227 0 4.35763 0 5.75002C0 7.20002 0.59 8.50002 1.54 9.46002L9.5 17.42L17.46 9.46002Z"
                                                fill="black" fill-opacity="0.5" />
                                        </svg>
                                        </span>
                                        <span> <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.107 3.73658C14.302 2.53658 16.0504 2.51158 17.0179 3.48324C17.9879 4.45658 17.962 6.21658 16.7654 7.41658L14.7462 9.44408C14.6325 9.56211 14.5697 9.72008 14.5714 9.88396C14.573 10.0478 14.639 10.2045 14.755 10.3202C14.8711 10.4359 15.028 10.5015 15.1918 10.5026C15.3557 10.5038 15.5135 10.4406 15.6312 10.3266L17.6512 8.29908C19.2437 6.69991 19.4437 4.14741 17.9037 2.60074C16.3621 1.05324 13.8145 1.25491 12.2204 2.85408L8.18205 6.90991C6.58955 8.50908 6.38955 11.0616 7.92955 12.6074C7.98707 12.6672 8.05592 12.715 8.13209 12.7479C8.20826 12.7808 8.29023 12.7983 8.3732 12.7992C8.45618 12.8001 8.53851 12.7845 8.61538 12.7532C8.69226 12.722 8.76214 12.6757 8.82096 12.6172C8.87977 12.5586 8.92634 12.489 8.95795 12.4123C8.98955 12.3355 9.00556 12.2533 9.00504 12.1703C9.00453 12.0873 8.98749 12.0053 8.95492 11.9289C8.92236 11.8526 8.87493 11.7835 8.81538 11.7257C7.84538 10.7524 7.87205 8.99241 9.06788 7.79241L13.107 3.73658Z"
                                                fill="black" fill-opacity="0.5" />
                                            <path
                                                d="M12.0706 8.39159C11.9534 8.27412 11.7944 8.208 11.6285 8.20776C11.4626 8.20753 11.3035 8.27321 11.186 8.39034C11.0685 8.50748 11.0024 8.66648 11.0022 8.83238C11.0019 8.99827 11.0676 9.15746 11.1847 9.27493C12.1547 10.2483 12.1289 12.0074 10.9322 13.2083L6.89307 17.2633C5.69723 18.4633 3.9489 18.4883 2.9814 17.5166C2.0114 16.5433 2.03806 14.7833 3.2339 13.5833L5.2539 11.5558C5.31184 11.4976 5.35777 11.4286 5.38904 11.3527C5.42032 11.2768 5.43634 11.1954 5.43618 11.1133C5.43603 11.0312 5.4197 10.95 5.38814 10.8742C5.35658 10.7984 5.3104 10.7295 5.25223 10.6716C5.19407 10.6136 5.12506 10.5677 5.04915 10.5364C4.97323 10.5052 4.89191 10.4892 4.8098 10.4893C4.7277 10.4895 4.64643 10.5058 4.57064 10.5374C4.49485 10.5689 4.42601 10.6151 4.36806 10.6733L2.34806 12.7008C0.755565 14.3008 0.555565 16.8524 2.09556 18.3991C3.63723 19.9474 6.18473 19.7449 7.7789 18.1458L11.8181 14.0899C13.4106 12.4916 13.6106 9.93743 12.0706 8.39159Z"
                                                fill="black" fill-opacity="0.5" />
                                        </svg>
                                        </span>
                                        <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 6.7C6 5.58 6 5.02 6.218 4.592C6.40974 4.21569 6.71569 3.90974 7.092 3.718C7.52 3.5 8.08 3.5 9.2 3.5H14.8C15.92 3.5 16.48 3.5 16.908 3.718C17.2843 3.90974 17.5903 4.21569 17.782 4.592C18 5.02 18 5.58 18 6.7V20.005C18 20.491 18 20.734 17.899 20.867C17.8554 20.9248 17.7997 20.9725 17.7358 21.0067C17.6719 21.0409 17.6013 21.0608 17.529 21.065C17.362 21.075 17.16 20.94 16.756 20.671L12 17.5L7.244 20.67C6.84 20.94 6.638 21.075 6.47 21.065C6.39784 21.0606 6.32748 21.0407 6.26377 21.0065C6.20007 20.9723 6.14453 20.9247 6.101 20.867C6 20.734 6 20.491 6 20.005V6.7Z"
                                                stroke="black" stroke-opacity="0.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        </span>

                                        <span><svg width="20" height="21" viewBox="0 0 24 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.33333 5.83333V0.5L0 9.83333L9.33333 19.1667V13.7C16 13.7 20.6667 15.8333 24 20.5C22.6667 13.8333 18.6667 7.16667 9.33333 5.83333Z"
                                                fill="black" fill-opacity="0.5" />
                                        </svg>
                                            Reply</span>
                                    </div>
                                </div>

                                <div className="reaction-stats mt-2 me-2 text- d-flex gap-4">
                                    <span> <b> 1.5k </b><br /> views</span>
                                    <span> <b> 12 </b> <br /> likes</span>
                                    <span> <b>1 </b><br /> links</span>
                                </div>
                        </div>

                        <div className="mt-4">                          
                                <div className="container">
                                    <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                            <div className="row">
                                                <div className="col-md-6 text-left">
                                                    <span className="count_comment">14 Comments</span>
                                                </div>
                                                <div className="col-md-6 text-end">
                                                    <span className="sort_title">Sort by</span>
                                                    <select className="sort_by">
                                                        <option>Top</option>
                                                        <option>Newest</option>
                                                        <option>Oldest</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="body_comment">
                                            <div className="row">
                                                <div className="avatar_comment col-md-1">
                                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                                                </div>
                                                <div className="box_comment col-md-11">
                                                    <textarea className="commentar" placeholder="Add a comment..."></textarea>
                                                    <div className="box_post">
                                                        <div className="pull-left">
                                                            <input type="checkbox" id="post_fb" />
                                                            <label htmlFor="post_fb">Also post on Facebook</label>
                                                        </div>
                                                        <div className="pull-right">
                                                            <span>
                                                                <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                                                                <i className="fa fa-caret-down"></i>
                                                            </span>
                                                            <button type="button" value="1">Post</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <ul id="list_comment" className="col-md-12">
                                                    <li className="box_result row">
                                                        <div className="avatar_comment col-md-1">
                                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                                                        </div>
                                                        <div className="result_comment col-md-11">
                                                            <h4>Renan Silveira</h4>
                                                            <p>Recomendo muito a Green BotBet, parei de perder grana com apostas esportivas depois que conheci ela.</p>
                                                            <div className="tools_comment">
                                                                <a className="like" href="#">Curtir</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <a className="replay" href="#">Reply</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <i className="fa fa-thumbs-o-up"></i> <span className="count">1</span>
                                                                <span aria-hidden="true"> · </span>
                                                                <span>34m</span>
                                                            </div>
                                                            <ul className="child_replay">
                                                                <li className="box_reply row">
                                                                    <div className="avatar_comment col-md-1">
                                                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                                                                    </div>
                                                                    <div className="result_comment col-md-11">
                                                                        <h4>Felipe Moreira</h4>
                                                                        <p>@Renansilveira eu também cara, o green BotBet salvou minha vida rsrsr eu dobro minha banca toda a semana agora, só dou green agora</p>
                                                                        <div className="tools_comment">
                                                                            <a className="like" href="#">Curtir</a>
                                                                            <span aria-hidden="true"> · </span>
                                                                            <a className="replay" href="#">Reply</a>
                                                                            <span aria-hidden="true"> · </span>
                                                                            <i className="fa fa-thumbs-o-up"></i> <span className="count">1</span>
                                                                            <span aria-hidden="true"> · </span>
                                                                            <span>26m</span>
                                                                        </div>
                                                                        <ul className="child_replay"></ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>


                                                    <li className="box_result row">
                                                        <div className="avatar_comment col-md-1">
                                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                                                        </div>
                                                        <div className="result_comment col-md-11">
                                                            <h4>Renan Silveira</h4>
                                                            <p>Recomendo muito a Green BotBet, parei de perder grana com apostas esportivas depois que conheci ela.</p>
                                                            <div className="tools_comment">
                                                                <a className="like" href="#">Curtir</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <a className="replay" href="#">Reply</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <i className="fa fa-thumbs-o-up"></i> <span className="count">1</span>
                                                                <span aria-hidden="true"> · </span>
                                                                <span>34m</span>
                                                            </div>
                                                            <ul className="child_replay"></ul>
                                                        </div>
                                                    </li>


                                                    <li className="box_result row">
                                                        <div className="avatar_comment col-md-1">
                                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                                                        </div>
                                                        <div className="result_comment col-md-11">
                                                            <h4>Gung Wah</h4>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                                            <div className="tools_comment">
                                                                <a className="like" href="#">Like</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <a className="replay" href="#">Reply</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <i className="fa fa-thumbs-o-up"></i> <span className="count">1</span>
                                                                <span aria-hidden="true"> · </span>
                                                                <span>26m</span>
                                                            </div>
                                                            <ul className="child_replay"></ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <button className="show_more" type="button">Load 10 more comments</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                          
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5">
                        <div className="sidebar-suggested">
                            <div className="suggested-side d-flex justify-content-between align-items-center mb-3 mt-3">
                                <div className="tab-menu d-flex gap-5">
                                    <div className="sidebar-title active">Suggested</div>
                                    <div className="sidebar-title">Related</div>
                                </div>
                                <div className="right-side-section gap-4 d-flex flex-direction">
                                    <span> Review</span>
                                    <span> View</span>
                                    <span> Activity</span>
                                </div>
                            </div>
                            <div className="suggested-side d-flex justify-content-between align-items-center mb-1 mt-3">
                                <div className="tab-menu d-flex gap-5">
                                    <div className="mb-3">
                                        <strong> Adding registration bonus to minelab product</strong><br />
                                        <span className="tag"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="1.60791" width="8" height="16" fill="#25990E" />
                                            <rect x="8" y="1.60791" width="8" height="16" fill="#F37E08" />
                                        </svg>
                                        </span>
                                        <span className="tag yellowpoint">codeigniter</span>
                                        <span className="tag yellowpoint">javascript</span>
                                    </div>
                                </div>
                                <div className="right-side-section gap-4 d-flex flex-direction">
                                    <span> 1 Reply</span>
                                    <span> 1</span>
                                    <span> 5 min</span>
                                </div>
                            </div>
                            <div className="suggested-side d-flex justify-content-between align-items-center mb-3 mt-1">
                                <div className="tab-menu d-flex gap-5">

                                    <div className="mb-3">
                                        <strong>Figma design rejected</strong><br />
                                        <span className="tag">Web and Code</span>
                                        <span className="tag bg-dark text-white">Item Feedback</span>
                                    </div>
                                </div>
                                <div className="right-side-section gap-4 d-flex flex-direction">
                                    <span> 1 Reply</span>
                                    <span> 1</span>
                                    <span> 5 min</span>
                                </div>
                            </div>
                            <div className="suggested-side d-flex justify-content-between align-items-center mb-3 mt-2">
                                <div className="tab-menu d-flex gap-5">
                                    <div className="mb-3">
                                        <strong>Zero sales, is it possible that sales will drop that much this month?</strong><br />
                                        <span className="tag"> <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.60791" width="8" height="16" fill="#1D8309" />
                                            <rect x="8" y="0.60791" width="8" height="16" fill="#134563" />
                                        </svg>
                                            Purchase and Subscriptions</span>
                                    </div>
                                </div>
                                <div className="right-side-section gap-4 d-flex flex-direction">
                                    <span> 1 Reply</span>
                                    <span> 1</span>
                                    <span> 5 min</span>
                                </div>
                            </div>
                            <div className="suggested-side d-flex justify-content-between align-items-center mb-3 mt-2">
                                <div className="tab-menu d-flex gap-5">
                                    <div className="mb-3">
                                        <strong>Elements Earnings</strong><br />
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.60791" width="8" height="16" fill="#134563" />
                                            <rect x="8" y="0.60791" width="8" height="16" fill="#078CD6" />
                                        </svg>
                                        <span className="tag bg-success text-white"> Elements Earnings</span>
                                        <span className="tag bg-warning text-dark">Video</span>
                                    </div>
                                </div>
                                <div className="right-side-section gap-4 d-flex flex-direction">
                                    <span> 1 Reply</span>
                                    <span> 1</span>
                                    <span> 5 min</span>
                                </div>
                            </div>
                            <p className="mt-3 fw-bold small bottomtxt">There are 10 new topics remaining, or browse other
                                topics in <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.10791" width="15" height="15" fill="#DE030B" />
                                </svg>
                                OptionsX Announcements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Announcements   