import React from "react";
import config from "../../../data/SiteConfig";

const PostAuthor = ({ author, extraClass = "" }) => (
  <div className={`text-description ${extraClass}`}>
    {config.author} {author}
  </div>
)

export default PostAuthor;