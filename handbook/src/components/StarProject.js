import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./StarProject.css";

export default function StarProject() {
  const [show, setShow] = useState(true);

  return (
    <div className="furion-star-project">
      <a
        className="furion-star-title"
        href="https://gitee.com/dotnetchina#-%E6%AF%8F%E5%91%A8%E7%B2%BE%E9%80%89%E9%A1%B9%E7%9B%AE-"
        target="_blank"
        style={{ color: "white" }}
        title="点击查看 dotNET China 更多每周精选"
      >
        dotNET China 每周精选第 <span style={{ color: "yellow" }}>12</span> 期
      </a>
      <button className="furion-star-close" onClick={() => setShow(!show)}>
        {show ? "收缩" : "展开"}
      </button>
      {show && (
        <a
          href="https://gitee.com/dotnetchina#-%E6%AF%8F%E5%91%A8%E7%B2%BE%E9%80%89%E9%A1%B9%E7%9B%AE-"
          target="_blank"
          title="dotNET China 每周精选第 12 期"
        >
          <img src={useBaseUrl("img/FastTunnel.png")} />
        </a>
      )}
      <a
        className="furion-star-title"
        style={{ color: "yellow" }}
        href="https://gitee.com/Hgui/FastTunnel"
        target="_blank"
        title="点击查看项目详情"
      >
        FastTunnel
      </a>
    </div>
  );
}
