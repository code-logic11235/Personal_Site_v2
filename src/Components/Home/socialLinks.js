import React from "react";

export default function SocialLink () {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://linkedin.com/"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};
