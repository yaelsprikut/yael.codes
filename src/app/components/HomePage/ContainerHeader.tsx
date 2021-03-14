import React, { useState } from 'react';

export function ContainerHeader() {

  return (
    <>
      <div className="content-wrapper-header">
				<div className="content-wrapper-context">
					<h3 className="img-content"><svg viewBox="0 0 512 512">
					<path d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z" data-original="#ff468c" fill="#d6355b"></path>
					<path d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z" data-original="#d72878" fill="#d6355b" xmlns="http://www.w3.org/2000/svg"></path>
					<path d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z" data-original="#700029" fill="#2e000a" xmlns="http://www.w3.org/2000/svg"></path>
					<path d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z" data-original="#4d0e06" fill="#2e000a" xmlns="http://www.w3.org/2000/svg"></path>
					<path d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z" data-original="#ff468c" fill="#d6355b" xmlns="http://www.w3.org/2000/svg"></path>
					<path d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z" data-original="#d72878" fill="#d6355b" xmlns="http://www.w3.org/2000/svg"></path></svg> Adobe Stock</h3>
					<div className="content-text">
						Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image, that will help you with your new project.
					</div><button className="content-button">Start free trial</button>
				</div><img alt="" className="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png"/>
      </div>
    </>
  );
}


export function LinkHeader() {
  return (
    <>
        <a className="main-header-link" onClick={(e: Any) => e.target.className = "main-header-link is-active"} onBlur={(e) => e.target.className = "main-header-link"} href="#">Desktop</a>
        <a className="main-header-link" onClick={(e: Any) => e.target.className = "main-header-link is-active"} onBlur={(e) => e.target.className = "main-header-link"} href="#">Mobile</a>
        <a className="main-header-link" onClick={(e: Any) => e.target.className = "main-header-link is-active"} onBlur={(e) => e.target.className = "main-header-link"} href="#">Web</a>
    </>
  );
}