import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../../styles/styles.scss';

import { ModeToggle } from '../../components/HomePage/ModeToggle';
import { Sidebar } from '../../components/HomePage/Sidebar';
import {
  ContainerHeader,
  LinkHeader,
} from '../../components/HomePage/ContainerHeader';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <ModeToggle />
      <div className="app">
        <div className="header">
          <div className="menu-circle"></div>
          <div className="header-menu">
            <a className="menu-link is-active" href="#">
              Apps
            </a>
            <a className="menu-link" href="#">
              About Me
            </a>
          </div>
          {/* <div className="search-bar">
			<input placeholder="Search" type="text" />
		</div> */}
          <div className="header-profile">
            <div className="notification"></div>
            <img
              alt="github"
              className="profile-img"
              src="https://avatars.githubusercontent.com/u/6987802?s=400&u=7a37ff66d9789192a2ea0a3a608590317a90081f&v=4"
            />
          </div>
        </div>
        <div className="wrapper">
          <Sidebar />
          <div className="main-container">
            <div className="main-header">
              {/* <a className="menu-link-main" href="#">All Apps</a> */}
              <div className="header-menu">{/* <LinkHeader /> */}</div>
            </div>
            <div className="content-wrapper">
              {/* <ContainerHeader /> */}

              <div className="content-section">
                <div className="content-section-title">React.js</div>
                <div className="apps-card">
                  <div className="app-card">
                    <span>
                      <a
                        className="white-link"
                        href="http://lowereffortmemes.s3.amazonaws.com/index.html"
                      >
                        low(er)effortmemes.com
                      </a>
                    </span>
                    <div className="app-card__subtext">
                      <img src="./loweffortmemes-thumb.png" width="100%" />
                    </div>
                    <div className="app-card-subtext">
                      Remember <b>I Can Has Cheezburger</b>? It's like that, but
                      less effort
                    </div>
                  </div>
                  <div className="app-card">
                    <span>
                      <a className="white-link" href="http://yael.co">
                        yael.co
                      </a>
                    </span>
                    <div className="app-card__subtext">
                      <img src="./desktop.png" width="100%" />
                    </div>
                    <div className="app-card-subtext">
                      A website I created as my home site, based on my desktop
                    </div>
                  </div>
                  <div className="app-card">
                    <span>
                      <a
                        className="white-link"
                        href="https://yaelsprikut.github.io/update-versions/"
                      >
                        $ package.json update editor
                      </a>
                    </span>
                    <div className="app-card__subtext">
                      <img src="./update-npm.png" width="100%" />
                    </div>
                    <div className="app-card-subtext">
                      A simple web interface for updating library versions in
                      package.json
                    </div>
                  </div>
                </div>
                {/* <ul>
						<li className="adobe-product">
							<div className="products">
								<svg style={{"border": "1px solid #3291b8"}} viewBox="0 0 52 52">
								<g xmlns="http://www.w3.org/2000/svg">
									<path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" data-original="#393687" fill="#061e26"></path>
									<path d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z" data-original="#89d3ff" fill="#c1dbe6"></path>
								</g></svg> Photoshop
							</div><span className="status"><span className="status-circle green"></span> Updated</span>
							<div className="button-wrapper">
								<button className="content-button status-button open">Open</button>
								<div className="menu">
									<button className="dropdown">
									<ul>
										<li>
											<a href="#">Go to Discover</a>
										</li>
										<li>
											<a href="#">Learn more</a>
										</li>
										<li>
											<a href="#">Uninstall</a>
										</li>
									</ul></button>
								</div>
							</div>
						</li>
						<li className="adobe-product">
							<div className="products">
								<svg style={{"border":"1px solid #b65a0b"}} viewBox="0 0 52 52">
								<g xmlns="http://www.w3.org/2000/svg">
									<path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" data-original="#6d4c13" fill="#261400"></path>
									<path d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z" data-original="#ffbd2e" fill="#e6d2c0"></path>
								</g></svg> Illustrator
							</div><span className="status"><span className="status-circle"></span> Update Available</span>
							<div className="button-wrapper">
								<button className="content-button status-button">Update this app</button>
								<div className="pop-up">
									<div className="pop-up__title">
										Update This App <svg className="feather feather-x-circle" height="24" width="24">
										<circle cx="12" cy="12" r="10"></circle>
										<path d="M15 9l-6 6M9 9l6 6"></path></svg>
									</div>
									<div className="pop-up__subtitle">
										Adjust your selections for advanced options as desired before continuing. <a href="#">Learn more</a>
									</div>
									<div className="checkbox-wrapper">
										<input className="checkbox" id="check1" type="checkbox"/> <label htmlFor="check1">Import previous settings and preferences</label>
									</div>
									<div className="checkbox-wrapper">
										<input className="checkbox" id="check2" type="checkbox"/> <label htmlFor="check2">Remove old versions</label>
									</div>
									<div className="content-button-wrapper">
										<button className="content-button status-button open close">Cancel</button> <button className="content-button status-button">Continue</button>
									</div>
								</div>
								<div className="menu">
									<button className="dropdown">
									<ul>
										<li>
											<a href="#">Go to Discover</a>
										</li>
										<li>
											<a href="#">Learn more</a>
										</li>
										<li>
											<a href="#">Uninstall</a>
										</li>
									</ul></button>
								</div>
							</div>
						</li>
						<li className="adobe-product">
							<div className="products">
								<svg style={{"border": "1px solid #C75DEB"}} viewBox="0 0 52 52">
								<g xmlns="http://www.w3.org/2000/svg">
									<path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" data-original="#3a3375" fill="#3a3375"></path>
									<path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" data-original="#e7adfb" fill="#e4d1eb"></path>
								</g>
                </svg> After Effects
							</div><span className="status"><span className="status-circle green"></span> Updated</span>
							<div className="button-wrapper">
								<button className="content-button status-button open">Open</button>
								<div className="menu">
									<button className="dropdown">
									<ul>
										<li>
											<a href="#">Go to Discover</a>
										</li>
										<li>
											<a href="#">Learn more</a>
										</li>
										<li>
											<a href="#">Uninstall</a>
										</li>
									</ul></button>
								</div>
							</div>
						</li>
					</ul> */}
              </div>
              <div className="content-section">
                <div className="content-section-title">
                  Raspberry PI Projects
                </div>
                <div className="apps-card">
                  <div className="app-card">
                    <span>
                      <a
                        className="white-link"
                        href="https://yaelsprikut.github.io/update-versions/"
                      >
                        RPi VLC Server
                      </a>
                    </span>
                    <div className="app-card__subtext">
                      <img src="./rpi-music.jpeg" width="100%" />
                    </div>
                    <div className="app-card-subtext">
                      A media server / jukebox. I’m hosting all my .mp3 files on
                      old USBs, and I’m running nvlc to play the files.
                      configured with{' '}
                      <a
                        className="white-link"
                        href="https://github.com/dtcooper/raspotify"
                      >
                        <b>raspotify</b>
                      </a>
                    </div>
                  </div>
                  <div className="app-card">
                    <span>
                      <a className="white-link">RPi GPi</a>
                    </span>
                    <div className="app-card__subtext">
                      <img src="./gpi.png" width="100%" height="430px" />
                    </div>
                    <div className="app-card-subtext">
                      GPi running on the tiny $10 Raspberry Pi Zero computer
                      using the free{' '}
                      <a className="white-link" href="https://retropie.org.uk/">
                        <b>RetroPie</b>
                      </a>{' '}
                      software library
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-section">
                <div className="content-section-title">Backbone.js</div>
                🚧&nbsp;&nbsp;Under construction 🚧
                {/* <div className="apps-card">
						<div className="app-card">
							<span><svg style={{"border": "1px solid #a059a9"}} viewBox="0 0 512 512">
							<path d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z" data-original="#7b1fa2" fill="#210027" xmlns="http://www.w3.org/2000/svg"></path>
							<g xmlns="http://www.w3.org/2000/svg">
								<path d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z" data-original="#e1bee7" fill="#f6e7fa"></path>
							</g></svg> Premiere Pro</span>
							<div className="app-card__subtext">
								Edit, master and create fully proffesional videos
							</div>
							<div className="app-card-buttons">
								<button className="content-button status-button">Update</button>
								<div className="menu"></div>
							</div>
						</div>
						<div className="app-card">
							<span><svg style={{"border": "1px solid #c1316d"}} viewBox="0 0 52 52">
							<g xmlns="http://www.w3.org/2000/svg">
								<path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" data-original="#6f2b41" fill="#2f0015"></path>
								<path d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z" data-original="#ff70bd" fill="#e1c1cf"></path>
							</g></svg> InDesign</span>
							<div className="app-card__subtext">
								Design and publish great projects & mockups
							</div>
							<div className="app-card-buttons">
								<button className="content-button status-button">Update</button>
								<div className="menu"></div>
							</div>
						</div>
						<div className="app-card">
							<span><svg style={{"border": "1px solid #C75DEB"}} viewBox="0 0 52 52">
							<g xmlns="http://www.w3.org/2000/svg">
								<path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" data-original="#3a3375" fill="#3a3375"></path>
								<path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" data-original="#e7adfb" fill="#e4d1eb"></path>
							</g></svg> After Effects</span>
							<div className="app-card__subtext">
								Industry Standart motion graphics & visual effects
							</div>
							<div className="app-card-buttons">
								<button className="content-button status-button">Update</button>
								<div className="menu"></div>
							</div>
						</div>
					</div> */}
              </div>
              <div className="content-section">
                <div className="content-section-title">Vue.js</div>
                🚧&nbsp;&nbsp;Under construction 🚧
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-app"></div>
      </div>
    </>
  );
}
