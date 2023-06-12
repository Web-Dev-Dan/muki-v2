import { useState } from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./Navigation.css";

function Navigation({ toggleMobileMenu, mobileMenuButtonClicked }) {
  return (
    <div>
      <div className="nav-container bc--white">
        <div className="cont--max">
          <div className="nav-container__inner disp--flex just--betw alig--cent">
            {/* Logo */}
            <div className="nav-container__logo">
              <Link to="/">
                <img src="./imgs/muki-logo--lg.png" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="nav-container__nav disp--desktop">
              <div className="nav-container__nav__buttons disp--flex alig--cent">
                <Link
                  to="/"
                  onClick={() => mobileMenuButtonClicked()}
                  className="btn btn--circle"
                >
                  <svg x="0px" y="0px" viewBox="0 0 122.88 114.45">
                    <g>
                      <path
                        class="st0"
                        d="M110.8,107.88v4.48c0,1.16-0.94,2.09-2.09,2.09h-95.1c-1.16,0-2.09-0.94-2.09-2.09v-4.48V84.2v-25.3 c-2.34,0.9-4.53,0.92-6.35,0.3c-1.42-0.48-2.62-1.34-3.5-2.45c-0.88-1.11-1.44-2.46-1.61-3.95c-0.26-2.31,0.43-4.92,2.4-7.37l0,0 c0.1-0.12,0.21-0.24,0.34-0.34L59.85,0.55c0.74-0.68,1.88-0.75,2.7-0.11l57.19,44.46l0,0c0.09,0.07,0.17,0.14,0.25,0.23 c2.65,2.85,3.31,6.01,2.67,8.68c-0.32,1.32-0.95,2.51-1.82,3.48c-0.87,0.98-1.98,1.74-3.24,2.19c-2,0.72-4.38,0.7-6.79-0.44V84.2 V107.88L110.8,107.88z M5.57,48.23c-1.11,1.45-1.5,2.9-1.37,4.12c0.08,0.7,0.33,1.32,0.73,1.82c0.39,0.49,0.92,0.86,1.56,1.08 c1.09,0.37,2.5,0.27,4.11-0.49l49.79-37.88c0.77-0.59,1.82-0.56,2.55,0.01l0,0l48.37,37.6c0.02,0.02,0.04,0.04,0.07,0.05 c1.77,1.28,3.47,1.48,4.79,1.01c0.61-0.22,1.14-0.58,1.55-1.05c0.42-0.47,0.72-1.03,0.87-1.66c0.33-1.38-0.07-3.08-1.55-4.74 L61.27,4.74L5.57,48.23L5.57,48.23z M29.6,75.49h26.7c1.04,0,1.89,0.83,1.89,1.85v20.89c0,1.02-0.85,1.85-1.89,1.85H29.6 c-1.04,0-1.89-0.83-1.89-1.85V77.34C27.72,76.32,28.56,75.49,29.6,75.49L29.6,75.49z M67.73,73.65H92.8c1.12,0,2.03,0.94,2.03,2.1 v34.52h11.78V56.57c0-0.14,0.01-0.27,0.04-0.4L61.64,21.18L15.63,56.19c0.05,0.17,0.07,0.35,0.07,0.54v53.53h50V75.74 C65.7,74.58,66.61,73.65,67.73,73.65L67.73,73.65z M90.77,77.84h-21v32.38h21V77.84L90.77,77.84z M54.41,89.63H44.5v6.75h9.91 V89.63L54.41,89.63z M40.8,89.63h-9.31v6.75h9.31V89.63L40.8,89.63z M31.49,85.93h9.31v-6.74h-9.31V85.93L31.49,85.93z M44.5,85.93 h9.91v-6.74H44.5V85.93L44.5,85.93z M60.88,36.33c3.55,0,6.43,2.88,6.43,6.43c0,3.55-2.88,6.43-6.43,6.43 c-3.55,0-6.43-2.88-6.43-6.43C54.45,39.2,57.33,36.33,60.88,36.33L60.88,36.33z"
                      />
                    </g>
                  </svg>
                </Link>
                <div className="nav-container__nav__buttons__container disp--flex">
                  <Link
                    to="/routine"
                    onClick={() => mobileMenuButtonClicked()}
                    className="btn btn--circle"
                  >
                    <svg x="0px" y="0px" viewBox="0 0 95.9 122.88">
                      <g>
                        <path d="M26.6,66.95c0.67-0.68,1.76-0.69,2.44-0.01c0.68,0.68,0.68,1.78,0.01,2.47l-2.95,2.99l2.95,2.99 c0.67,0.68,0.66,1.77-0.02,2.45c-0.68,0.68-1.77,0.67-2.43,0l-2.93-2.97l-2.94,2.98c-0.67,0.68-1.77,0.69-2.44,0.01 c-0.68-0.68-0.68-1.78-0.01-2.47l2.95-2.99l-2.95-2.99c-0.67-0.68-0.66-1.77,0.02-2.45c0.68-0.68,1.77-0.67,2.43,0l2.93,2.97 L26.6,66.95L26.6,66.95z M37.06,5.04v5c0,1.29-1.03,2.41-2.28,2.5c-0.27,0.09-0.58,0.13-0.89,0.13H24.6v10.35 c15.56,0,31.13,0,46.69,0V12.68h-9.28c-0.31,0-0.63-0.04-0.89-0.13c-1.25-0.09-2.28-1.21-2.28-2.5v-5 C51.58,5.04,44.32,5.04,37.06,5.04L37.06,5.04z M23.35,28.16c-1.03,0-2.01-0.45-2.68-1.12c-0.09-0.09-0.13-0.18-0.22-0.27 c-0.54-0.67-0.89-1.52-0.89-2.41v-5.09H5.58c-0.13,0-0.31,0.04-0.4,0.18C5.09,19.55,5,19.73,5,19.86v97.39 c0,0.18,0.04,0.31,0.18,0.4c0.09,0.09,0.22,0.18,0.4,0.18c28.69,0,56.05,0,84.74,0c0.18,0,0.31-0.09,0.4-0.18 c0.13-0.09,0.18-0.22,0.18-0.4V19.86c0-0.13-0.09-0.31-0.18-0.4c-0.09-0.13-0.27-0.18-0.4-0.18H76.34v5.09 c0,0.89-0.36,1.74-0.89,2.41c-0.09,0.09-0.13,0.18-0.22,0.27c-0.67,0.67-1.65,1.12-2.68,1.12C56.15,28.16,39.75,28.16,23.35,28.16 L23.35,28.16z M5.62,122.88c-1.52,0-2.95-0.62-3.97-1.65C0.62,120.2,0,118.82,0,117.26V19.86c0-1.56,0.62-2.95,1.65-3.97 c1.03-1.03,2.41-1.65,3.97-1.65h13.98v-2.77c0-1.03,0.4-1.96,1.12-2.68c0.67-0.67,1.61-1.12,2.68-1.12h8.66V4.2 c0-1.16,0.49-2.19,1.25-2.95C34.07,0.49,35.09,0,36.25,0c7.8,0,15.59,0,23.39,0c1.16,0,2.19,0.49,2.95,1.25 c0.76,0.76,1.25,1.79,1.25,2.95v3.48h8.66c1.07,0,2.01,0.45,2.68,1.12c0.71,0.71,1.12,1.65,1.12,2.68v2.77h13.98 c1.56,0,2.95,0.62,3.97,1.65c1.03,1.03,1.65,2.41,1.65,3.97v97.39c0,1.56-0.62,2.95-1.65,3.97c-1.03,1.03-2.46,1.65-3.97,1.65 C61.62,122.88,34.28,122.88,5.62,122.88L5.62,122.88z M76.37,99.6c1.38,0,2.54-1.12,2.54-2.54c0-1.38-1.12-2.54-2.54-2.54 c-4.91,0-28.9,0-33.81,0c-1.43,0-2.54,1.16-2.54,2.54c0,1.43,1.16,2.54,2.54,2.54v0C47.47,99.6,71.46,99.6,76.37,99.6L76.37,99.6 L76.37,99.6z M76.37,50.8c1.38,0,2.54-1.12,2.54-2.54c0-1.38-1.12-2.54-2.54-2.54c-4.91,0-28.9,0-33.81,0 c-1.43,0-2.54,1.16-2.54,2.54c0,1.43,1.16,2.54,2.54,2.54C47.47,50.8,71.46,50.8,76.37,50.8L76.37,50.8z M76.37,74.87 c1.38,0,2.54-1.12,2.54-2.54c0-1.38-1.12-2.54-2.54-2.54c-4.91,0-28.9,0-33.81,0c-1.43,0-2.54,1.16-2.54,2.54 c0,1.43,1.16,2.54,2.54,2.54C47.47,74.87,71.46,74.87,76.37,74.87L76.37,74.87z M18.39,96.93c-0.69-1.03-0.42-2.43,0.62-3.13 c1.03-0.69,2.43-0.42,3.13,0.62l1.23,1.82l4.87-5.93c0.79-0.96,2.21-1.1,3.17-0.31c0.96,0.79,1.1,2.21,0.31,3.17l-6.74,8.2 c-0.15,0.19-0.33,0.36-0.54,0.51c-1.03,0.69-2.43,0.42-3.13-0.62L18.39,96.93L18.39,96.93L18.39,96.93z M18.39,50.66 c-0.69-1.03-0.42-2.43,0.62-3.13c1.03-0.69,2.43-0.42,3.13,0.62l1.23,1.82l4.87-5.93c0.79-0.96,2.21-1.1,3.17-0.31 c0.96,0.79,1.1,2.21,0.31,3.17l-6.74,8.2c-0.15,0.19-0.33,0.36-0.54,0.51c-1.03,0.69-2.43,0.42-3.13-0.62L18.39,50.66L18.39,50.66 L18.39,50.66z" />
                      </g>
                    </svg>
                  </Link>
                  <div className="nav-container__nav__buttons__container__img disp--mobile disp--flex just--cent alig--cent">
                    <img src="./imgs/muki-logo.png" />
                  </div>
                  <Link
                    to="/calendar"
                    onClick={() => mobileMenuButtonClicked()}
                    className="btn btn--circle"
                  >
                    <svg x="0px" y="0px" viewBox="0 0 122.88 122.88">
                      <g>
                        <path d="M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73c3.19,0,5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 c-3.19,0-5.77-2.12-5.77-4.73V4.73L81.61,4.73z M66.11,103.81c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,103.81z M15.85,67.09c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,67.09z M40.98,67.09 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,67.09z M66.11,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,67.09z M91.25,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,67.09z M15.85,85.45c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,85.45z M40.98,85.45 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,85.45z M66.11,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,85.45z M91.25,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,85.45z M15.85,103.81c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,103.81z M40.98,103.81 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,103.81z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 s-5.77-2.12-5.77-4.73V4.73L29.61,4.73z M6.4,45.32h110.07V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.52 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z" />
                      </g>
                    </svg>
                  </Link>
                </div>
                <Link
                  to="/settings"
                  onClick={() => mobileMenuButtonClicked()}
                  className="btn btn--circle"
                >
                  <svg
                    viewBox="0 0 122.881 122.88"
                    enable-background="new 0 0 122.881 122.88"
                  >
                    <g>
                      <path d="M97.977,18.705c-0.33-0.33-0.67-0.568-1.02-0.716c-0.328-0.139-0.711-0.207-1.15-0.207c-0.441,0-0.832,0.07-1.164,0.211 c-0.344,0.145-0.676,0.379-0.994,0.702l-0.021,0.021l-6.207,6.188c-0.93,0.925-2.367,1.028-3.41,0.313 c-0.73-0.472-1.508-0.927-2.324-1.368c-0.865-0.468-1.713-0.888-2.541-1.268c-0.863-0.394-1.744-0.765-2.641-1.113 c-0.813-0.316-1.719-0.638-2.707-0.964c-1.131-0.373-1.85-1.425-1.85-2.556l0,0V8.43c0-0.456-0.072-0.859-0.215-1.21 c-0.143-0.347-0.361-0.67-0.662-0.97c-0.293-0.293-0.611-0.51-0.959-0.651c-0.35-0.143-0.754-0.214-1.211-0.214H56.956 c-0.423,0-0.798,0.068-1.126,0.204c-0.348,0.143-0.689,0.377-1.026,0.703L54.8,6.295c-0.296,0.296-0.514,0.611-0.654,0.946 C54.002,7.584,53.93,7.98,53.93,8.43v8.714c0,1.325-0.957,2.426-2.217,2.651c-0.957,0.228-1.841,0.464-2.646,0.711 c-0.882,0.27-1.769,0.577-2.658,0.924c-0.044,0.017-0.088,0.033-0.132,0.047c-0.777,0.302-1.596,0.652-2.456,1.049 c-0.874,0.403-1.688,0.812-2.442,1.223c-1.063,0.579-2.345,0.364-3.165-0.443l-0.001,0.001l-6.874-6.775 c-0.021-0.021-0.042-0.042-0.063-0.063l0,0.001c-0.293-0.31-0.601-0.537-0.924-0.678c-0.31-0.135-0.677-0.204-1.105-0.204 c-0.425,0-0.805,0.072-1.139,0.215c-0.366,0.156-0.716,0.4-1.052,0.729l-0.002,0.002l-8.339,8.358l-0.005,0.006l0.005,0.005 c-0.342,0.342-0.584,0.682-0.727,1.02c-0.139,0.328-0.208,0.711-0.208,1.149c0,0.442,0.07,0.832,0.211,1.166 c0.145,0.343,0.378,0.675,0.702,0.993l0.021,0.021l6.188,6.208c0.925,0.93,1.028,2.367,0.313,3.41 c-0.472,0.731-0.927,1.508-1.367,2.324c-0.468,0.866-0.888,1.712-1.268,2.542c-0.395,0.862-0.766,1.744-1.115,2.641 c-0.316,0.812-0.637,1.718-0.963,2.706c-0.373,1.132-1.426,1.85-2.556,1.85v0.001H8.431c-0.458,0-0.86,0.071-1.211,0.213 c-0.346,0.142-0.666,0.358-0.958,0.651L6.251,51.81l0,0c-0.293,0.293-0.51,0.612-0.652,0.958c-0.143,0.351-0.213,0.754-0.213,1.211 v11.946c0,0.422,0.067,0.798,0.203,1.125c0.144,0.348,0.378,0.689,0.704,1.027l0.003,0.002c0.295,0.296,0.611,0.515,0.945,0.654 c0.344,0.144,0.74,0.216,1.19,0.216h8.713c1.325,0,2.426,0.957,2.651,2.218c0.228,0.956,0.464,1.841,0.711,2.646 c0.271,0.882,0.577,1.768,0.924,2.657c0.326,0.847,0.696,1.727,1.108,2.639c0.421,0.933,0.833,1.783,1.233,2.552 c0.557,1.066,0.326,2.336-0.486,3.143l0.002,0.002l-6.776,6.756l-0.043,0.042h0.001c-0.31,0.294-0.537,0.602-0.677,0.924 c-0.136,0.31-0.204,0.678-0.204,1.106c0,0.425,0.072,0.804,0.214,1.138c0.156,0.366,0.4,0.717,0.73,1.052l8.309,8.405 c0.325,0.301,0.664,0.521,1.019,0.66c0.356,0.141,0.76,0.21,1.212,0.21c0.456,0,0.867-0.071,1.229-0.214 c0.348-0.137,0.675-0.347,0.978-0.631l6.159-6.257c0.929-0.944,2.384-1.057,3.438-0.329c0.729,0.47,1.504,0.923,2.318,1.362 c0.866,0.469,1.712,0.889,2.542,1.268c0.862,0.396,1.744,0.767,2.641,1.115c0.812,0.315,1.717,0.637,2.706,0.963 c1.132,0.373,1.85,1.426,1.85,2.556h0.001v9.518c0,0.456,0.071,0.859,0.214,1.21c0.142,0.347,0.358,0.666,0.651,0.959l0.005,0.006 l0.005-0.006c0.587,0.587,1.307,0.876,2.169,0.876h11.944c0.424,0,0.799-0.067,1.127-0.203c0.348-0.144,0.689-0.378,1.025-0.704 l0.004-0.003c0.295-0.296,0.514-0.611,0.654-0.945c0.145-0.344,0.217-0.739,0.217-1.189v-8.715c0-1.324,0.955-2.426,2.217-2.65 c0.955-0.228,1.84-0.465,2.646-0.711c0.881-0.271,1.768-0.577,2.656-0.923c0.848-0.327,1.729-0.697,2.643-1.109 c0.93-0.421,1.781-0.832,2.547-1.232c1.068-0.557,2.338-0.325,3.145,0.486l0.002-0.002l6.756,6.775l0.041,0.043v-0.001 c0.297,0.312,0.605,0.538,0.926,0.678c0.314,0.135,0.693,0.204,1.145,0.204c0.443,0,0.828-0.072,1.16-0.215 c0.334-0.145,0.645-0.368,0.928-0.667c0.031-0.034,0.064-0.067,0.1-0.1l8.369-8.272c0.299-0.324,0.52-0.664,0.658-1.019 c0.141-0.356,0.211-0.761,0.211-1.213c0-0.456-0.07-0.867-0.213-1.229c-0.139-0.348-0.348-0.674-0.633-0.977l-6.256-6.16 c-0.945-0.929-1.057-2.383-0.33-3.438c0.471-0.729,0.924-1.504,1.363-2.317c0.469-0.865,0.889-1.712,1.268-2.542 c0.395-0.862,0.766-1.744,1.115-2.641c0.314-0.812,0.637-1.718,0.963-2.707c0.373-1.132,1.426-1.85,2.557-1.85v-0.001h9.516 c0.457,0,0.861-0.071,1.211-0.214c0.346-0.142,0.666-0.358,0.959-0.65l0.01-0.011l0,0c0.293-0.294,0.512-0.613,0.652-0.96 c0.143-0.35,0.213-0.753,0.213-1.21V56.955c0-0.422-0.066-0.798-0.203-1.126c-0.143-0.347-0.377-0.689-0.703-1.027l-0.004-0.003 c-0.295-0.296-0.611-0.514-0.945-0.654c-0.342-0.144-0.738-0.216-1.189-0.216h-8.713c-1.342,0-2.453-0.979-2.658-2.262 c-0.211-0.843-0.449-1.698-0.719-2.566c-0.26-0.833-0.564-1.714-0.92-2.645c-0.018-0.045-0.033-0.091-0.047-0.137 c-0.338-0.885-0.684-1.717-1.039-2.496c-0.385-0.843-0.793-1.658-1.225-2.446c-0.578-1.063-0.363-2.345,0.443-3.165v-0.001 l6.775-6.874c0.021-0.021,0.041-0.042,0.063-0.063v0c0.311-0.293,0.537-0.601,0.678-0.923c0.135-0.31,0.205-0.677,0.205-1.105 c0-0.425-0.072-0.805-0.215-1.139c-0.156-0.366-0.4-0.716-0.73-1.052l-0.002-0.002l-8.359-8.339L97.977,18.705L97.977,18.705 L97.977,18.705z M99.039,13.044c1.002,0.423,1.912,1.042,2.732,1.862l0.002,0.001l8.381,8.362l0.021,0.021 c0.807,0.82,1.424,1.723,1.846,2.713c0.436,1.021,0.656,2.102,0.656,3.243c0,1.158-0.225,2.24-0.668,3.251 c-0.432,0.992-1.063,1.874-1.879,2.653l-5.367,5.445c0.158,0.329,0.316,0.662,0.469,0.999c0.43,0.938,0.824,1.878,1.182,2.819 c0.02,0.042,0.037,0.085,0.053,0.129c0.357,0.937,0.699,1.933,1.025,2.981c0.105,0.338,0.207,0.678,0.305,1.021h6.652 c1.156,0,2.238,0.212,3.252,0.636c0.996,0.417,1.896,1.032,2.699,1.841l0.057,0.057c0.791,0.818,1.391,1.72,1.799,2.71 c0.418,1.007,0.625,2.062,0.625,3.167V68.9c0,1.149-0.203,2.225-0.613,3.23c-0.41,1.003-1.021,1.914-1.838,2.733l-0.004,0.003 l-0.006,0.007l-0.004,0.004c-0.82,0.817-1.73,1.43-2.736,1.84c-1.006,0.409-2.082,0.613-3.23,0.613h-7.609 c-0.133,0.358-0.271,0.728-0.42,1.106c-0.381,0.979-0.793,1.958-1.24,2.936c-0.463,1.011-0.934,1.966-1.414,2.857 c-0.158,0.292-0.32,0.583-0.486,0.874l4.75,4.676c0.035,0.033,0.068,0.066,0.104,0.102c0.779,0.824,1.365,1.739,1.76,2.739 c0.396,1.004,0.592,2.068,0.592,3.186c0,1.114-0.195,2.169-0.588,3.169c-0.393,0.997-0.973,1.908-1.744,2.734v-0.001 c-0.027,0.028-0.055,0.058-0.084,0.086l-8.43,8.333c-0.791,0.829-1.682,1.463-2.682,1.893c-1.01,0.436-2.102,0.657-3.283,0.657 c-1.156,0-2.246-0.226-3.27-0.667c-1.014-0.439-1.91-1.074-2.691-1.898l-5.344-5.358c-0.357,0.172-0.707,0.335-1.047,0.489 c-0.91,0.41-1.883,0.815-2.916,1.214c-0.971,0.378-1.984,0.727-3.035,1.049c-0.35,0.107-0.695,0.209-1.035,0.306v6.638 c0,1.155-0.213,2.238-0.637,3.251c-0.418,0.997-1.031,1.896-1.842,2.7l-0.057,0.058c-0.818,0.789-1.721,1.388-2.709,1.798 c-1.008,0.417-2.063,0.624-3.168,0.624H53.979c-2.349,0-4.333-0.81-5.977-2.454l0.005-0.005c-0.82-0.821-1.435-1.734-1.845-2.741 c-0.41-1.006-0.614-2.081-0.614-3.23v-7.609c-0.359-0.133-0.728-0.272-1.107-0.42c-0.978-0.381-1.957-0.793-2.935-1.241 c-1.011-0.462-1.966-0.934-2.858-1.415c-0.291-0.157-0.582-0.319-0.873-0.485l-4.676,4.75c-0.033,0.035-0.067,0.069-0.102,0.103 c-0.824,0.781-1.739,1.367-2.739,1.761c-1.004,0.396-2.068,0.593-3.186,0.593c-1.114,0-2.17-0.195-3.169-0.589 c-0.997-0.393-1.907-0.973-2.734-1.743l0.001-0.002c-0.029-0.026-0.058-0.054-0.085-0.083l-8.381-8.478 c-0.806-0.82-1.423-1.724-1.845-2.714c-0.435-1.022-0.656-2.102-0.656-3.242c0-1.158,0.225-2.24,0.667-3.252 c0.437-0.999,1.071-1.886,1.897-2.67l5.359-5.344c-0.172-0.357-0.336-0.707-0.49-1.05c-0.411-0.909-0.815-1.88-1.213-2.912 c-0.378-0.971-0.728-1.984-1.05-3.036c-0.107-0.351-0.209-0.695-0.306-1.035H8.431c-1.156,0-2.239-0.213-3.251-0.637 c-0.998-0.417-1.897-1.031-2.7-1.841L2.422,71.8c-0.79-0.817-1.389-1.72-1.798-2.709C0.207,68.083,0,67.028,0,65.925V53.979 c0-1.149,0.204-2.225,0.614-3.23c0.41-1.005,1.021-1.916,1.839-2.735l0.001-0.001l0.006-0.005l0.005-0.005 c0.82-0.818,1.73-1.43,2.736-1.84c1.005-0.41,2.081-0.613,3.23-0.613h7.609c0.132-0.359,0.272-0.728,0.42-1.107 c0.38-0.978,0.793-1.957,1.241-2.936c0.462-1.011,0.933-1.966,1.415-2.857c0.16-0.297,0.326-0.594,0.496-0.891l-4.681-4.696 l-0.002-0.001c-0.827-0.813-1.453-1.728-1.88-2.739c-0.437-1.032-0.653-2.118-0.653-3.249c0-1.129,0.215-2.205,0.649-3.232 c0.43-1.017,1.05-1.932,1.863-2.745l0.005,0.005l8.356-8.376l0.021-0.021c0.82-0.806,1.723-1.423,2.713-1.845 c1.022-0.435,2.102-0.657,3.243-0.657c1.157,0,2.239,0.225,3.251,0.667c0.992,0.433,1.874,1.063,2.653,1.88l5.441,5.362 c0.327-0.162,0.653-0.317,0.978-0.467c0.837-0.386,1.761-0.775,2.772-1.167c0.043-0.02,0.087-0.038,0.131-0.055 c0.971-0.378,1.985-0.728,3.037-1.05c0.35-0.107,0.695-0.209,1.035-0.306V8.43c0-1.155,0.213-2.238,0.637-3.25 c0.417-0.998,1.032-1.897,1.841-2.701l0.057-0.057c0.818-0.79,1.72-1.388,2.709-1.797C54.796,0.207,55.851,0,56.956,0H68.9 c1.148,0,2.225,0.203,3.23,0.613c1.01,0.412,1.924,1.027,2.748,1.85c0.814,0.816,1.428,1.728,1.84,2.737 c0.41,1.005,0.613,2.081,0.613,3.229v7.61c0.359,0.133,0.727,0.273,1.107,0.42c0.977,0.38,1.955,0.793,2.934,1.24 c1.012,0.462,1.967,0.934,2.857,1.416c0.299,0.161,0.596,0.326,0.893,0.496l4.695-4.681l0.002-0.001 c0.813-0.827,1.729-1.453,2.738-1.88c1.033-0.437,2.117-0.653,3.248-0.653C96.936,12.396,98.012,12.61,99.039,13.044L99.039,13.044 z M61.44,35.346c1.781,0,3.519,0.17,5.214,0.508c1.666,0.333,3.318,0.844,4.953,1.534l0.018,0.008l0.004-0.008 c1.561,0.674,3.041,1.479,4.441,2.417c1.387,0.929,2.672,1.978,3.85,3.145l0.01,0.011l0,0c1.168,1.179,2.217,2.463,3.146,3.851 c0.938,1.4,1.742,2.88,2.416,4.441c0.031,0.074,0.059,0.148,0.084,0.223c0.646,1.569,1.131,3.152,1.449,4.751 c0.34,1.696,0.508,3.433,0.508,5.213c0,1.781-0.168,3.519-0.508,5.214c-0.332,1.667-0.844,3.317-1.533,4.953l-0.008,0.018 l0.008,0.004c-0.674,1.561-1.479,3.04-2.416,4.44c-0.93,1.388-1.979,2.672-3.146,3.851l-0.01,0.011l0,0 c-1.18,1.168-2.463,2.217-3.852,3.146c-1.398,0.938-2.879,1.742-4.439,2.416c-0.074,0.031-0.148,0.06-0.225,0.084 c-1.568,0.647-3.152,1.131-4.75,1.45c-1.695,0.339-3.434,0.508-5.214,0.508c-1.781,0-3.518-0.169-5.213-0.508 c-1.667-0.333-3.318-0.845-4.954-1.534l-0.018-0.008l-0.003,0.008c-1.561-0.674-3.042-1.479-4.441-2.416 c-1.388-0.929-2.672-1.978-3.85-3.146l-0.01-0.011l0,0c-1.168-1.18-2.218-2.463-3.146-3.852c-0.937-1.399-1.742-2.88-2.415-4.439 c-0.032-0.074-0.06-0.148-0.085-0.224c-0.647-1.569-1.131-3.152-1.45-4.751c-0.338-1.695-0.508-3.433-0.508-5.214 c0-1.781,0.169-3.518,0.508-5.213c0.333-1.667,0.845-3.318,1.535-4.953l0.007-0.018l-0.007-0.003 c0.673-1.561,1.479-3.041,2.415-4.44c0.929-1.389,1.978-2.672,3.146-3.852l0.011-0.01l0,0c1.178-1.167,2.462-2.216,3.849-3.145 c1.4-0.937,2.881-1.743,4.442-2.417c0.074-0.032,0.148-0.06,0.224-0.084c1.569-0.647,3.151-1.13,4.75-1.449 C57.922,35.516,59.659,35.346,61.44,35.346L61.44,35.346z M65.602,41.134c-1.344-0.269-2.73-0.403-4.162-0.403 c-1.431,0-2.817,0.134-4.162,0.403c-1.306,0.261-2.553,0.635-3.741,1.122c-0.052,0.026-0.105,0.052-0.16,0.075 c-1.298,0.561-2.492,1.205-3.58,1.933c-1.096,0.733-2.11,1.563-3.044,2.487c-0.925,0.935-1.755,1.951-2.489,3.048 c-0.728,1.087-1.372,2.28-1.932,3.578l-0.007-0.003c-0.521,1.237-0.917,2.539-1.191,3.905c-0.268,1.344-0.402,2.73-0.402,4.161 s0.134,2.817,0.402,4.162c0.261,1.306,0.636,2.553,1.123,3.741c0.026,0.053,0.052,0.105,0.075,0.16 c0.56,1.298,1.204,2.49,1.931,3.577c0.734,1.097,1.564,2.113,2.49,3.048c0.934,0.925,1.949,1.754,3.045,2.487 c1.087,0.728,2.28,1.372,3.579,1.933l-0.003,0.007c1.238,0.521,2.539,0.918,3.905,1.19c1.344,0.269,2.731,0.402,4.162,0.402 c1.431,0,2.818-0.134,4.162-0.402c1.307-0.261,2.553-0.635,3.742-1.122c0.051-0.026,0.105-0.052,0.16-0.075 c1.297-0.561,2.49-1.205,3.578-1.933c1.096-0.733,2.111-1.563,3.045-2.487c0.926-0.935,1.756-1.95,2.49-3.047 c0.727-1.087,1.371-2.28,1.93-3.578l0.008,0.003c0.521-1.237,0.918-2.539,1.191-3.904c0.268-1.345,0.402-2.731,0.402-4.162 s-0.135-2.817-0.402-4.161c-0.262-1.307-0.635-2.553-1.123-3.742c-0.027-0.052-0.051-0.105-0.076-0.16 c-0.559-1.298-1.203-2.491-1.932-3.578c-0.732-1.097-1.563-2.113-2.488-3.047c-0.934-0.924-1.949-1.754-3.045-2.487 c-1.088-0.728-2.281-1.372-3.578-1.933l0.002-0.007C68.27,41.804,66.969,41.407,65.602,41.134L65.602,41.134z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </nav>

            {/* Hamburger Menu */}
            <button
              onClick={() => toggleMobileMenu()}
              className="nav-container__hamburger disp--mobile"
            >
              <div className="nav-container__hamburger__bar"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
